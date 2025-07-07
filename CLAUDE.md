# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for prompt-app (轻量级 AI 提示词工具), a macOS application. The site is built with vanilla HTML, CSS, and JavaScript without any frameworks or complex build tools.

## Commands

### Development
```bash
npm run dev              # Start development server on http://localhost:8000
npm run preview          # Preview production build on http://localhost:8080
```

### Build & Optimization
```bash
npm run build            # Complete build process: clean, prepare, optimize, copy assets
npm run clean            # Remove dist directory
npm run optimize:html    # Minify HTML only
npm run optimize:css     # Minify CSS only  
npm run optimize:js      # Minify JavaScript only
```

## Architecture

### Directory Structure
- `index.html` - Main entry point and only HTML file
- `styles/main.css` - All styling
- `scripts/main.js` - All JavaScript functionality
- `images/` - App screenshots and preview images
- `assets/PromptX2.zip` - Downloadable macOS application
- `dist/` - Build output directory (created by build process)

### Key Implementation Details

The website implements:
- Smooth scrolling navigation
- Dynamic navbar effects on scroll
- Intersection Observer for scroll-triggered animations
- Click-to-copy functionality for code snippets
- Responsive mobile menu
- CSS custom properties for theming

### Development Notes

1. The site is entirely in Chinese (zh-CN)
2. No external dependencies or API calls
3. Uses sirv-cli for Node.js-based development server
4. The build process only performs minification - no transpilation or bundling
5. All JavaScript uses modern ES6+ features without polyfills
6. Build output includes automatic asset copying (images and downloads)