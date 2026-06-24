export const metadata = {
  title: 'Terms of Service - ConvertlyAI',
  description: 'Terms of service for ConvertlyAI. Understand your rights and responsibilities when using our conversion service.',
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By using ConvertlyAI, you agree to these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <p className="text-gray-600 mb-4">
              ConvertlyAI provides an online file conversion service that allows users to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Convert PDF files to Word documents (.docx)</li>
              <li>Convert Word documents to PDF files</li>
              <li>Access these services free of charge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Users agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the service only for lawful purposes</li>
              <li>Not upload malicious content or viruses</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to hack or disrupt the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">File Upload Restrictions</h2>
            <p className="text-gray-600 mb-4">
              Users must:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Only upload files they own or have permission to convert</li>
              <li>Ensure files are under 25MB in size</li>
              <li>Use only supported file formats (.pdf, .docx, .doc)</li>
              <li>Not upload copyrighted or protected files without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              ConvertlyAI is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our service, including but not limited to data loss or corruption.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}