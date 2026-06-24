export const metadata = {
  title: 'Free PDF to Word Converter Online | Convert Word to PDF – ConvertlyAI',
  description: 'Convert PDF to Word and Word to PDF instantly with our free online converter. Fast, secure, no watermark, and easy to use.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Convert PDF to Word & Word to PDF</h1>
        <p className="text-center text-gray-600 mb-12">Fast, secure, and free online converter</p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          <div className="flex gap-4 mb-8">
            <button className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              PDF to Word
            </button>
            <button className="flex-1 py-3 px-6 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
              Word to PDF
            </button>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <input type="file" accept=".pdf,.docx" className="hidden" id="file-upload" />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1.5" />
                </svg>
              </div>
              <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
              <p className="text-gray-500">PDF or DOCX (Max 25MB)</p>
            </label>
          </div>
        </div>
      </div>
    </main>
  )
}