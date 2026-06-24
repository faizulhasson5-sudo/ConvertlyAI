"use client"

import { useState } from 'react'
import { pdfToWordConverter, wordToPdfConverter } from '@/lib/converter'

export default function ConverterTool() {
  const [activeTab, setActiveTab] = useState('pdf-to-word')
  const [file, setFile] = useState(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && (selectedFile.type === 'application/pdf' || 
                        selectedFile.name.endsWith('.docx') || 
                        selectedFile.name.endsWith('.doc'))) {
      setFile(selectedFile)
    }
  }

  const handleConvert = async () => {
    if (!file) return
    
    setIsConverting(true)
    setProgress(0)
    
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', activeTab)
      
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return prev
          }
          return prev + 10
        })
      }, 500)
      
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      })
      
      clearInterval(progressInterval)
      setProgress(100)
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        setResult(url)
      }
    } catch (error) {
      console.error('Conversion error:', error)
    } finally {
      setIsConverting(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex gap-4 mb-8 border-b">
            <button
              onClick={() => setActiveTab('pdf-to-word')}
              className={`pb-4 px-6 font-semibold transition-colors ${activeTab === 'pdf-to-word' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'}
              `}
            >
              PDF to Word
            </button>
            <button
              onClick={() => setActiveTab('word-to-pdf')}
              className={`pb-4 px-6 font-semibold transition-colors ${activeTab === 'word-to-pdf' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'}
              `}
            >
              Word to PDF
            </button>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors">
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer block">
                {file ? (
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-medium text-green-600">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1.5" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Click to upload or drag and drop</p>
                    <p className="text-gray-500">PDF or DOCX (Max 25MB)</p>
                  </div>
                )}
              </label>
            </div>

            {isConverting && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Converting...</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <button
              onClick={handleConvert}
              disabled={!file || isConverting}
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isConverting ? 'Converting...' : 'Convert File'}
            </button>

            {result && (
              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-4">Download Result</h3>
                <a
                  href={result}
                  download={file ? file.name.replace(/\.(pdf|docx|doc)$/, activeTab === 'pdf-to-word' ? '.docx' : '.pdf') : 'converted-file'}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Converted File
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}