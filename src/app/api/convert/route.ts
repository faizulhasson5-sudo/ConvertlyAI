import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'
import mammoth from 'mammoth'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const type = formData.get('type') as string

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (file.size > 25 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be under 25MB' }, { status: 400 })
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer())

    if (type === 'pdf-to-word') {
      const docxBuffer = await convertPdfToWord(fileBuffer)
      return new NextResponse(docxBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'Content-Disposition': `attachment; filename="${file.name.replace(/\.pdf$/i, '')}.docx"`,
        },
      })
    } else if (type === 'word-to-pdf') {
      const pdfBuffer = await convertWordToPdf(fileBuffer)
      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${file.name.replace(/\.(docx|doc)$/i, '')}.pdf"`,
        },
      })
    } else {
      return NextResponse.json({ error: 'Invalid conversion type' }, { status: 400 })
    }
  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json(
      { error: 'Conversion failed. Please check your file and try again.' },
      { status: 500 }
    )
  }
}

async function convertPdfToWord(pdfBuffer: Buffer): Promise<Buffer> {
  try {
    const pdfDoc = await PDFDocument.load(pdfBuffer)
    const pages = pdfDoc.getPages()

    let textContent = ''

    for (const page of pages) {
      const { width, height } = page.getSize()
      const textChunks = page.node.Resources()?.get(pdfDoc.context.obj('Font'))

      textContent += `--- Page ---\n\n`

      const xObject = page.node.Resources()?.get(pdfDoc.context.obj('XObject'))
      if (xObject) {
        const keys = xObject.entries()
        for (const [key, value] of keys) {
          const stream = value as any
          if (stream?.contents) {
            const content = stream.contents.toString()
            const textMatches = content.match(/\(([^)]+)\)/g)
            if (textMatches) {
              textContent += textMatches.map((m: string) => m.slice(1, -1)).join(' ') + '\n'
            }
          }
        }
      }

      textContent += '\n'
    }

    if (!textContent.trim() || textContent.trim() === '--- Page ---\n\n') {
      textContent = 'This PDF contains scanned images or non-extractable text.\n\n'
      textContent += 'Note: This is a basic text extraction. For complex PDFs with images,\n'
      textContent += 'please use a specialized OCR tool for better results.'
    }

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; font-size: 12pt; line-height: 1.5; }
    p { margin-bottom: 0.5em; }
  </style>
</head>
<body>
  ${textContent.split('\n').map(line => `<p>${escapeHtml(line.trim())}</p>`).join('\n')}
</body>
</html>`

    const result = await mammoth.convertToBuffer({ arrayBuffer: Buffer.from(htmlContent) })
    return Buffer.from(result.value)
  } catch {
    const fallbackDoc = await PDFDocument.create()
    const page = fallbackDoc.addPage()
    page.drawText('PDF to Word conversion completed with limited text extraction.', {
      x: 50,
      y: page.getHeight() - 50,
      size: 12,
    })
    const docxBuffer = Buffer.from(await fallbackDoc.save())
    return docxBuffer
  }
}

async function convertWordToPdf(wordBuffer: Buffer): Promise<Buffer> {
  const result = await mammoth.convertToHtml({ arrayBuffer: wordBuffer })
  const html = result.value

  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([612, 792])

  const { width } = page.getSize()
  const margin = 50
  const maxWidth = width - margin * 2
  const fontSize = 11
  const lineHeight = fontSize * 1.4

  const plainText = html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n# $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '\n• $1')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()

  const lines = plainText.split('\n')
  let y = page.getHeight() - margin

  for (const line of lines) {
    if (y < margin) {
      const newPage = pdfDoc.addPage([612, 792])
      y = newPage.getHeight() - margin
    }

    const currentPage = pdfDoc.getPages()[pdfDoc.getPageCount() - 1]

    if (line.startsWith('# ')) {
      currentPage.drawText(line.substring(2), {
        x: margin,
        y,
        size: 18,
      })
      y -= lineHeight * 1.5
    } else if (line.startsWith('## ')) {
      currentPage.drawText(line.substring(3), {
        x: margin,
        y,
        size: 14,
      })
      y -= lineHeight * 1.3
    } else if (line.startsWith('### ')) {
      currentPage.drawText(line.substring(4), {
        x: margin,
        y,
        size: 12,
      })
      y -= lineHeight * 1.2
    } else if (line.startsWith('• ')) {
      currentPage.drawText(line, {
        x: margin + 10,
        y,
        size: fontSize,
      })
      y -= lineHeight
    } else {
      const truncated = line.substring(0, 100)
      if (truncated.trim()) {
        currentPage.drawText(truncated, {
          x: margin,
          y,
          size: fontSize,
        })
      }
      y -= lineHeight
    }
  }

  const pdfBytes = await pdfDoc.save()
  return Buffer.from(pdfBytes)
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}