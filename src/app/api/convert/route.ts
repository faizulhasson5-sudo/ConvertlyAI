import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'
import { PDFDocument } from 'pdf-lib'
import mammoth from 'mammoth'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const type = formData.get('type') as string

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer())
    const fileId = uuidv4()
    const uploadDir = join(process.cwd(), 'temp', fileId)

    await writeFile(uploadDir, fileBuffer)

    let result: Buffer
    
    if (type === 'pdf-to-word') {
      result = await convertPdfToWord(fileBuffer)
    } else if (type === 'word-to-pdf') {
      result = await convertWordToPdf(fileBuffer)
    } else {
      return NextResponse.json(
        { error: 'Invalid conversion type' },
        { status: 400 }
      )
    }

    return new NextResponse(result, {
      status: 200,
      headers: {
        'Content-Type': type === 'pdf-to-word' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : 'application/pdf',
        'Content-Disposition': `attachment; filename=converted.${type === 'pdf-to-word' ? 'docx' : 'pdf'}`,        }
      }
    )
  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json(
      { error: 'Conversion failed' },
      { status: 500 }
    )
  }
}

async function convertPdfToWord(pdfBuffer: Buffer): Promise<Buffer> {
  const pdfDoc = await PDFDocument.load(pdfBuffer)
  const pages = pdfDoc.getPages()
  
  let html = '<html><body>'
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    const { width, height } = page.getSize()
    
    html += `<div class="page" style="page-break-after: always;">`
    
    const textContent = page.getTextContent()
    const lines = textContent.items
      .filter(item => item.str)
      .map(item => item.str)
      .join(' ')
    
    html += `<p>${lines}</p>`
    html += `</div>`
  }
  
  html += '</body></html>'
  
  const result = await mammoth.convertToBuffer(html)
  return result
}

async function convertWordToPdf(wordBuffer: Buffer): Promise<Buffer> {
  const html = await mammoth.convertToHtml({ arrayBuffer: wordBuffer })
  
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage()
  
  const { width, height } = page.getSize()
  const fontSize = 12
  const lineHeight = fontSize * 1.2
  const maxWidth = width - 40
  
  const lines = html.value.split('\n')
  let y = height - 20
  
  for (const line of lines) {
    if (y < 20) {
      y = height - 20
    }
    
    page.drawText(line, {
      x: 20,
      y: y,
      size: fontSize,
      maxWidth,
    })
    
    y -= lineHeight
  }
  
  const pdfBytes = await pdfDoc.save()
  return Buffer.from(pdfBytes)
}
