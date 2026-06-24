"use client"

import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Is ConvertlyAI really free to use?',
    answer: 'Yes, ConvertlyAI is completely free to use. We don\'t charge any fees for our PDF to Word and Word to PDF conversion services.'
  },
  {
    question: 'How secure is my data?',
    answer: 'Your privacy is our priority. All files are processed securely and automatically deleted from our servers after 1 hour. We never store your files permanently.'
  },
  {
    question: 'What file formats are supported?',
    answer: 'We support PDF to Word (.docx) and Word to PDF (.pdf) conversions. We accept files up to 25MB in size.'
  },
  {
    question: 'Do you add watermarks to converted files?',
    answer: 'No, we never add watermarks to your converted files. You get clean, professional output files.'
  },
  {
    question: 'How long does the conversion take?',
    answer: 'Our AI-powered conversion is extremely fast. Most conversions complete in under 30 seconds, depending on file size.'
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our conversion service
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}