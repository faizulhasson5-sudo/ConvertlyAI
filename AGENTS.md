# AGENTS.md

This file documents the development process and decisions made during the creation of ConvertlyAI.

## Project Overview

ConvertlyAI is a modern, fast, SEO-optimized web application for converting PDF to Word and Word to PDF files.

## Tech Stack Decisions

### Frontend
- **Next.js 14**: Latest version with App Router for optimal performance
- **React**: Component-based architecture
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: For smooth animations and micro-interactions

### Backend
- **Next.js API Routes**: Serverless functions for file conversion
- **pdf-lib**: For PDF manipulation
- **mammoth.js**: For Word document processing

### Performance
- **Vercel Hosting**: Optimized for Next.js applications
- **Auto-deletion**: Files automatically deleted after 1 hour for security
- **Lazy Loading**: Components loaded as needed

## Key Features Implemented

### File Conversion
- PDF to Word conversion using pdf-lib and mammoth.js
- Word to PDF conversion with proper formatting
- File validation (max 25MB, .pdf/.docx/.doc)
- Secure temporary storage

### UI/UX
- Modern SaaS-style landing page
- Drag & drop file upload
- Progress indicators during conversion
- Responsive design (mobile-first)
- Dark mode ready

### SEO Optimization
- Optimized meta tags and Open Graph data
- Schema markup for rich snippets
- XML sitemap
- robots.txt
- Clean URL structure

### Security
- Automatic file deletion after 1 hour
- No permanent file storage
- HTTPS ready
- File type validation

## Development Process

### 1. Project Structure
- Created modular component structure
- Organized code into logical directories
- Followed Next.js best practices

### 2. API Implementation
- Created `/api/convert` route for file processing
- Implemented error handling and validation
- Added progress tracking

### 3. Component Architecture
- Created reusable components
- Implemented animations with Framer Motion
- Ensured accessibility and semantic HTML

### 4. SEO Optimization
- Added comprehensive meta tags
- Implemented structured data
- Created sitemap and robots.txt

## Performance Optimizations

### Image Optimization
- Next.js automatically optimizes images
- Lazy loading implemented

### Code Splitting
- Dynamic imports where appropriate
- Component-based architecture

### Caching
- Browser caching for static assets
- Server-side caching for API responses

## Future Enhancements

### Bonus Features
- [ ] Conversion progress bar
- [ ] Dark mode toggle
- [ ] File preview before download
- [ ] Drag & drop animations
- [ ] Animated gradient buttons

### Scaling
- [ ] Add more conversion tools (e.g., Excel, PowerPoint)
- [ ] Implement user accounts
- [ ] Add batch processing
- [ ] Create API for developers

## Testing

### Manual Testing
- File upload and conversion
- Mobile responsiveness
- Cross-browser compatibility
- SEO validation

### Automated Testing
- Linting with ESLint
- Type checking with TypeScript
- Build verification

## Deployment

### Vercel Configuration
- Next.js optimized for Vercel
- Environment variables for production
- Automatic builds and deployments

### Environment Setup
- `.env.local` for local development
- Vercel dashboard for production variables

## Code Quality

### Linting
- ESLint with Next.js configuration
- Prettier for code formatting

### Type Safety
- TypeScript throughout the codebase
- Comprehensive type definitions

### Documentation
- README.md with comprehensive instructions
- DEPLOYMENT.md with setup guides
- AGENTS.md for development process

## Security Considerations

### File Handling
- File size limits (25MB)
- File type validation
- Automatic file deletion

### Data Protection
- No permanent file storage
- Secure transmission (HTTPS)
- Privacy policy compliance

## Analytics and Monetization

### AdSense Integration
- Placeholder areas for ads
- Below hero section
- Between sections
- Sidebar (desktop)

### Analytics
- Google Analytics integration ready
- Performance monitoring
- User behavior tracking

## Accessibility

### WCAG Compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### Color Contrast
- Accessible color schemes
- High contrast options
- Focus indicators

## Conclusion

ConvertlyAI is a production-ready, modern web application that provides fast, secure, and free PDF to Word and Word to PDF conversion. The application is optimized for performance, SEO, and scalability, with a focus on user experience and security.
