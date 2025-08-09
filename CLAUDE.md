# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive portfolio website built with Next.js 15, React 19, TypeScript, and Three.js. It features a dynamic shader-based background with animated noise gradients and interactive UI components.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server  
- `npm run lint` - Run ESLint

## Architecture

### Core Structure
- **App Router**: Uses Next.js App Router with `src/app/` structure
- **Components**: Modular React components in `src/components/`
- **Styling**: TailwindCSS v4 with custom CSS variables for fonts

### Key Components
- `BackgroundCanvas`: Three.js shader background with animated noise gradients
- `MouseCursor`: Custom cursor replacement 
- `PortraitHover`: Floating portrait that follows mouse pointer
- `Compass`: Central navigation/interaction element
- `AIInteractive`: AI chat interface component
- `Navigation`: Header navigation component
- `Tagline`: Dynamic tagline display

### Technical Details
- **Fonts**: Uses Inter and Playfair Display via `next/font/google`
- **Path Mapping**: `@/*` maps to `src/*`
- **Three.js Integration**: WebGL shaders for background effects ported from HTML prototypes
- **Image Handling**: Configured for Cloudinary and GitHub remote images

### File Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with font setup
│   ├── page.tsx        # Main homepage with component composition
│   └── globals.css     # Global styles and Tailwind
└── components/         # Reusable React components
```

## Development Notes

- The project uses cursor-none styling with a custom mouse cursor component
- Background shader is ported from HTML prototype in `prototypes/` directory  
- Components are designed to work together as an integrated experience
- Three.js canvas runs continuously with requestAnimationFrame for smooth animations