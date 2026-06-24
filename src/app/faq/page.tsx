export const metadata = {
  title: 'FAQ - ConvertlyAI',
  description: 'Frequently asked questions about ConvertlyAI. Learn about our free PDF to Word and Word to PDF converter.',
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
              <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}