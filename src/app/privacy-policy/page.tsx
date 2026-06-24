export const metadata = {
  title: 'Privacy Policy - ConvertlyAI',
  description: 'Privacy policy for ConvertlyAI. Learn how we protect your data and handle your files securely.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect only the minimum information necessary to provide our conversion services. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Files you upload for conversion</li>
              <li>Temporary session data</li>
              <li>Usage analytics to improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Your information is used solely to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process your file conversions</li>
              <li>Provide customer support</li>
              <li>Improve our conversion algorithms</li>
              <li>Maintain service security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">File Storage and Security</h2>
            <p className="text-gray-600 mb-4">
              We take your privacy seriously:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All uploaded files are automatically deleted after 1 hour</li>
              <li>Files are not stored permanently on our servers</li>
              <li>Conversion process is encrypted and secure</li>
              <li>No third-party access to your files</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Request deletion of your data at any time</li>
              <li>Download your converted files immediately after processing</li>
              <li>Use our service without creating an account</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}