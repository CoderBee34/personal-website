# Ali İlan - Full-Stack Developer Portfolio

A modern, SEO-optimized portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- ✨ **Server-Side Rendering (SSR)** - Built with Next.js App Router for optimal performance
- 🔍 **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- 🌍 **Multi-language Support** - English and Turkish language support
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🎨 **Modern UI** - Smooth animations and gradient effects
- ♿ **Accessibility** - Semantic HTML and proper ARIA labels
- 🔒 **Type Safe** - Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📋 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CoderBee34/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout with SEO metadata
│   │   ├── page.tsx         # Home page
│   │   ├── sitemap.ts       # Auto-generated sitemap
│   │   ├── robots.ts        # Robots.txt configuration
│   │   └── manifest.ts      # PWA manifest
│   ├── components/          # React components
│   │   ├── cards/          # Card components
│   │   ├── common/         # Shared components
│   │   ├── layout/         # Layout components
│   │   └── sections/       # Page sections
│   ├── constants/          # Static data
│   ├── context/            # React contexts
│   ├── hooks/              # Custom hooks
│   ├── locales/            # Translation files
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript types
├── public/                 # Static assets
└── next.config.mjs         # Next.js configuration
```

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:
- Vercel deployment (recommended)
- Self-hosted server setup
- Docker deployment
- SEO configuration checklist

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CoderBee34/personal-website)

## ⚙️ Configuration

### Before Deploying

1. **Update Domain URLs:**
   - `src/app/layout.tsx` - Update `metadataBase`
   - `src/app/sitemap.ts` - Update `baseUrl`
   - `src/app/robots.ts` - Update `baseUrl`
   - `src/lib/structured-data.ts` - Update URLs

2. **Add Open Graph Image:**
   - Place a 1200x630px image at `/public/og-image.png`

3. **Customize Content:**
   - Edit `src/constants/data.ts` for your information
   - Update translations in `src/locales/`

## 🎨 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Ali İlan**
- GitHub: [@CoderBee34](https://github.com/CoderBee34)
- LinkedIn: [ali-ilan](https://www.linkedin.com/in/ali-ilan-a55949220/)
- Email: ali.ilan@ozu.edu.tr

// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
