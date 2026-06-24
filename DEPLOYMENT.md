# Installation Instructions

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Step 1: Clone the Repository

```bash
# Clone the ConvertlyAI repository
git clone https://github.com/yourusername/convertly-ai.git
cd convertly-ai
```

## Step 2: Install Dependencies

```bash
# Install all dependencies
npm install
```

## Step 3: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Google AdSense (optional)
AD_SENSE_CLIENT=your_adsense_client_id

# Additional environment variables can be added here
```

## Step 4: Run Development Server

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:3000
```

## Step 5: Build for Production

```bash
# Build the application for production
npm run build

# Start the production server
npm run start
```

## Step 6: Run Tests and Checks

```bash
# Run linting
npm run lint

# Type checking
npm run typecheck
```

## Deployment Guide

### Vercel Deployment

1. **Push to Git**: Push your code to a Git repository
2. **Deploy on Vercel**: Go to vercel.com and import your project
3. **Set Environment Variables**: Add your environment variables in the Vercel dashboard
4. **Deploy**: Vercel will automatically build and deploy your application

### Local Development with Environment Variables

Create a `.env.local` file:

```env
# For local development
AD_SENSE_CLIENT=ca-pub-123456789
```

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   ```bash
   # Change the port in next.config.js
   port: 3001
   ```

2. **TypeScript errors**:
   ```bash
   # Fix any TypeScript issues
   npm run typecheck
   ```

3. **Tailwind CSS not working**:
   ```bash
   # Reinstall Tailwind CSS
   npm install tailwindcss@latest postcss@latest autoprefixer@latest
   npx tailwindcss init -p
   ```

## Scaling Guide

### Adding More Tools

To add more conversion tools:

1. **Add new API routes** in `src/app/api/`
2. **Update the converter library** in `src/lib/converter.ts`
3. **Add new tabs** to the ConverterTool component
4. **Update navigation** if needed

### Performance Optimization

- **Image Optimization**: Next.js automatically optimizes images
- **Static Generation**: Use `generateStaticParams` for better performance
- **Caching**: Implement caching for frequently accessed data
- **CDN**: Use Vercel's CDN for static assets

### Adding New Features

1. **Dark Mode**: Add a theme provider and toggle button
2. **File Preview**: Add preview functionality before download
3. **Progress Bar**: Enhance the conversion progress display
4. **Drag & Drop**: Improve the drag and drop interface
5. **File Validation**: Add more comprehensive file validation

## Support

For support, please visit the [Contact page](https://convertlyai.com/contact) or check the documentation.
