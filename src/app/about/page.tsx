export const metadata = {
  title: 'About Us - ConvertlyAI',
  description: 'Learn about ConvertlyAI - your trusted PDF to Word and Word to PDF converter. Fast, secure, and free.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">About ConvertlyAI</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At ConvertlyAI, our mission is to make file conversion simple, fast, and accessible to everyone. We believe that converting PDF to Word or Word to PDF should be a seamless experience without any complexity or cost barriers.
            </p>
            <p className="text-gray-600">
              We're dedicated to providing a reliable, secure, and user-friendly conversion service that helps millions of users work more efficiently with their documents.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              ConvertlyAI is built by a team of developers passionate about creating tools that simplify digital workflows. We combine expertise in web development, AI, and document processing to deliver a superior conversion experience.
            </p>
            <p className="text-gray-600">
              Our platform is designed with the user in mind, focusing on speed, security, and ease of use. Every feature is carefully crafted to ensure you get the best possible conversion results.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
            <p className="text-gray-600 mb-4">
              We leverage cutting-edge technologies to provide our services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Next.js 14 with App Router for optimal performance</li>
              <li>pdf-lib and mammoth.js for reliable file conversion</li>
              <li>AI-powered processing for intelligent document handling</li>
              <li>Secure cloud infrastructure for data protection</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Security First</h3>
                <p className="text-gray-600">Your files are processed securely and automatically deleted after 1 hour.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Speed & Performance</h3>
                <p className="text-gray-600">Lightning-fast conversions powered by modern web technologies.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Zero Cost</h3>
                <p className="text-gray-600">Completely free to use with no hidden charges or subscriptions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">User Privacy</h3>
                <p className="text-gray-600">We never store your files permanently and respect your privacy.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}