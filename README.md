# Cricket 26 - Modern Website

A modern, fully responsive website for Cricket 26 built with **Next.js 14**, **TypeScript**, **shadcn/ui**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Poppins)

## Features

### Design Highlights

- ✅ **Modern UI/UX**: Clean, contemporary design with smooth animations
- ✅ **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ✅ **Type-Safe**: Built entirely with TypeScript for better DX
- ✅ **Component-Based**: Modular, reusable React components
- ✅ **Accessible**: WCAG compliant with semantic HTML
- ✅ **Performance**: Optimized with Next.js 14 App Router
- ✅ **Dark Mode Ready**: Uses Tailwind's dark mode capabilities

### Key Sections

1. **Hero Section** - Eye-catching landing with animated stats
2. **Features** - Showcase of 6 key game features with icons
3. **Game Modes** - Detailed cards for Career, Tournament, and Online modes
4. **Gallery** - Visual showcase with hover effects
5. **System Requirements** - Min/Recommended specs comparison
6. **CTA Section** - Call-to-action with platform availability
7. **Footer** - Comprehensive links and social media

## Project Structure

```
BA_C26/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── navigation.tsx      # Main navigation
│   ├── hero.tsx           # Hero section
│   ├── features.tsx       # Features grid
│   ├── game-modes.tsx     # Game modes section
│   ├── gallery.tsx        # Gallery section
│   ├── system-requirements.tsx
│   ├── cta-section.tsx
│   └── footer.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── components.json        # shadcn/ui config
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BA_C26
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## Color Palette

The design uses a cricket-themed color scheme:

- **Primary**: Cricket Green (`hsl(152, 45%, 28%)`)
- **Secondary**: Gold/Yellow (`hsl(45, 93%, 55%)`)
- **Background**: Light/Dark variants
- **Accent**: Muted tones for secondary elements

Colors are defined in `app/globals.css` using CSS custom properties and can be easily customized.

## Customization

### Adding New Components

shadcn/ui components can be added via CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

### Modifying Theme

Edit `app/globals.css` to change color variables:

```css
:root {
  --primary: 152 45% 28%;
  --secondary: 45 93% 55%;
  /* ... */
}
```

### TypeScript Configuration

The project uses strict TypeScript settings. Modify `tsconfig.json` as needed for your preferences.

## Component Architecture

### UI Components (`components/ui/`)

Reusable shadcn/ui components:
- `Button` - Flexible button with variants
- `Card` - Container with header, content, footer
- `Separator` - Horizontal/vertical dividers

### Page Components (`components/`)

Section-specific components with TypeScript:
- Type-safe props
- Framer Motion animations
- Responsive design patterns
- Accessibility features

## Animations

Powered by **Framer Motion** for smooth, performant animations:

- Scroll-triggered animations (`whileInView`)
- Staggered transitions
- Hover effects
- Page load animations

## Performance

- **Next.js 14 App Router**: Server components by default
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component ready
- **Font Optimization**: Google Fonts with `next/font`

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/):

```bash
npm i -g vercel
vercel
```

### Other Platforms

Can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Docker

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

© 2026 Big Ant Studios. All rights reserved.

## Credits

- **Development**: Big Ant Studios Web Team
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Fonts**: Google Fonts (Inter, Poppins)

---

**Built with Next.js, TypeScript, and shadcn/ui** 🏏
