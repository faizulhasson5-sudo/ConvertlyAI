"use client"

import { motion } from 'framer-motion'

const features = [
  { icon: '🔒', title: '100% Secure', desc: 'Your files are processed securely and deleted automatically' },
  { icon: '⚡', title: 'Fast Conversion', desc: 'Lightning-fast conversion powered by AI' },
  { icon: '✂️', title: 'No Watermark', desc: 'Clean output files without any watermarks' },
  { icon: '🆓', title: 'Free to Use', desc: 'Completely free with no hidden charges' },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ConvertlyAI</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the fastest and most secure PDF to Word and Word to PDF conversion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}