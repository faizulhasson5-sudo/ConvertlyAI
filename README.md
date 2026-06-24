# ConvertlyAI - Free PDF to Word & Word to PDF Converter

A modern, fast, SEO-optimized web application for converting PDF to Word and Word to PDF files.

## Features

- ✅ Convert PDF to Word (.docx)
- ✅ Convert Word to PDF
- ✅ Fast, secure, and free online converter
- ✅ No registration required
- ✅ Automatic file deletion after 1 hour
- ✅ No watermarks
- ✅ 100% secure
- ✅ Drag & drop interface
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ AdSense ready

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + React + Tailwind CSS
- **Backend**: Next.js API routes
- **File Processing**: pdf-lib, mammoth.js
- **Animation**: Framer Motion
- **Hosting**: Vercel compatible

## Installation

```bash
# Clone the repository
npx create-next-app@latest convertly-ai --typescript --tailwind --eslint --app --src-dir

# Navigate to the project directory
cd convertly-ai

# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm run dev
```

## Build

```bash
# Build for production
npm run build

# Start the production server
npm run start
```

## Deployment

This project is optimized for deployment on Vercel. Simply push your code to a Git repository and deploy using Vercel's Git integration.

### Vercel Deployment

1. Push your code to a Git repository
2. Go to [Vercel](https://vercel.com) and import your project
3. Follow the deployment instructions

## AdSense Integration

To add Google AdSense ads:

1. Create a Google AdSense account
2. Get your publisher ID
3. Add the following to your `layout.tsx` or `page.tsx`:

```tsx
{process.env.AD_SENSE_CLIENT && (
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.AD_SENSE_CLIENT}"
    crossOrigin="anonymous"
  ></script>
)}
```

Place ad slots where needed:

```tsx
<div className="ad-container">
  <ins
    className="adsbygoogle"
    style={{ display: 'block' }}
    data-ad-client="${process.env.AD_SENSE_CLIENT}"
    data-ad-slot="YOUR_AD_SLOT_ID"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>
```

## SEO Setup

The site includes:

- Optimized meta tags and Open Graph data
- Schema markup for rich snippets
- Sitemap.xml
- robots.txt
- Clean, semantic HTML structure

## File Conversion

The application uses:

- **pdf-lib**: For PDF manipulation and creation
- **mammoth.js**: For Word document processing

## Security

- All uploaded files are automatically deleted after 1 hour
- Files are not stored permanently on servers
- Only .pdf and .docx files are accepted
- Maximum file size: 25MB
- HTTPS encryption enabled

## Project Structure

```
convertly-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── pdf-to-word/page.tsx
│   │   ├── word-to-pdf/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── about/page.tsx
│   │   └── api/
│   │       └── convert/route.ts
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── ConverterTool.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   └── FAQSection.tsx
│   ├── lib/
│   │   ├── faq-data.ts
│   │   └── converter.ts
│   └── layout.tsx
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## License

This project is open source and available under the MIT License.
