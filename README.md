# First Biotech Company Website

A modern, responsive website for First Biotech Company, built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations and transitions
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 🎯 Accessible components
- 🖼️ Optimized images
- 📝 Dynamic content management

## Tech Stack

- **Framework:** Next.js 14.1.0
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 11.18.2
- **Icons:** React Icons 5.0.1
- **TypeScript:** 5.3.3

## Prerequisites

- Node.js 18.17 or later
- npm 9.0 or later

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd firstbio-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add any required environment variables:
```env
# Add your environment variables here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
firstbio-website/
├── public/
│   ├── images/          # Static images
│   └── fonts/          # Custom fonts
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── about/      # About page
│   │   ├── capabilities/ # Capabilities page
│   │   ├── contact/    # Contact page
│   │   ├── services/   # Services page
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable components
│   └── styles/        # Global styles
├── tailwind.config.js  # Tailwind configuration
└── package.json       # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Image Requirements

Place all images in the `public/images/` directory with the following specifications:

- **Hero Images:** 1920x1080px, JPG/WebP format
- **Logo:** 200x200px, PNG format with transparency
- **Content Images:** 800x600px, JPG/WebP format
- **Icons:** 24x24px, SVG format

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Images are optimized using Next.js Image component
- Fonts are loaded with next/font
- Components are lazy-loaded where appropriate
- CSS is purged in production

## Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## Deployment

### Option 1: Deploy with Vercel (Recommended)

1. Create a [Vercel account](https://vercel.com/signup)
2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy your site:
```bash
vercel
```

4. Follow the prompts to:
   - Link your project to Vercel
   - Configure your project settings
   - Deploy to production

Your site will be available at `https://your-project-name.vercel.app`

### Option 2: Deploy with Netlify

1. Create a [Netlify account](https://app.netlify.com/signup)
2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy your site:
```bash
netlify deploy
```

Your site will be available at `https://your-project-name.netlify.app`

### Option 3: Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

3. Configure your hosting provider to serve the application

## Local Development Sharing

To share your local development environment with others:

1. Install ngrok:
```bash
npm install -g ngrok
```

2. Start your Next.js development server:
```bash
npm run dev
```

3. In a new terminal, start ngrok:
```bash
ngrok http 3000
```

4. Share the ngrok URL with others (e.g., `https://abc123.ngrok.io`)

Note: The ngrok URL will change each time you restart ngrok unless you have a paid account.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For any questions or concerns, please contact:
- Email: [contact-email]
- Website: [website-url] 