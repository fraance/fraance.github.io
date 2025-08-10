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
├── components/         # Reusable React components
├── data/               # Content and configuration data
│   ├── portfolio.ts    # Site content, projects, navigation
│   └── index.ts        # Data exports
├── config/             # UI configuration and constants
│   ├── ui.ts           # Animation configs, responsive breakpoints
│   └── index.ts        # Config exports
├── hooks/              # Custom React hooks
│   ├── useCompassAnimation.ts      # Compass animation logic
│   ├── useMouseAndTouchEvents.ts   # Event handling logic
│   └── index.ts        # Hooks exports
└── utils/              # Utility functions
    ├── cn.ts           # Class name utility
    └── index.ts        # Utils exports
```

## Content Management

The project now uses a centralized data structure for easy content updates:

- **Portfolio Data** (`src/data/portfolio.ts`): Contains all site content including navigation links, taglines, project information, and compass labels
- **UI Configuration** (`src/config/ui.ts`): Centralized animation settings, breakpoints, and layout constants
- **Custom Hooks** (`src/hooks/`): Extracted logic for animations and event handling
- **Utilities** (`src/utils/`): Shared utility functions

To update content, simply modify the data files rather than individual components.

## Development Notes

- The project uses cursor-none styling with a custom mouse cursor component
- Background shader is ported from HTML prototype in `prototypes/` directory  
- Components are designed to work together as an integrated experience
- Three.js canvas runs continuously with requestAnimationFrame for smooth animations
- All content is now separated from component logic for easier maintenance
- Custom hooks handle complex animation and event logic separately from rendering