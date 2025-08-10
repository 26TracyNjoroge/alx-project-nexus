# MovieMood

A movie discovery app built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Browse popular movies
- View detailed movie information
- Responsive design
- Fast performance with Next.js

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **TMDB API** - Movie data

## Setup

1. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

## API Integration

Uses TMDB API for movie data with dynamic routing `/movie/[id]` for individual movie pages.

## Component Architecture

### Core Components
- **MovieDetailView** - Main container for movie details
- **MovieHeroSection** - Hero section with backdrop and poster
- **MovieDetailsContent** - Movie overview

### Layout Components
- **Layout** - Main app wrapper with header and footer
- **Header** - Navigation component
- **Footer** - App footer

## Features in Detail

### Movie Discovery
- Grid layout of popular movies
- Click navigation to detail pages
- Responsive card design

### Movie Details
- Full movie information display
- Release dates and runtime

### Performance Optimizations
- Next.js Image optimization
- TypeScript for development efficiency
- Tailwind CSS for small bundle size

## Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### File Structure Details
- `pages/movie/[id].tsx` - Dynamic movie detail pages with API integration
- `components/` - Reusable UI components
- `interfaces/` - TypeScript type definitions
