export interface FAQData {
  question: string;
  answer: string;
}

export const faqData: FAQData[] = [
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