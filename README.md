# Leonardo Wilis — Personal Developer Portfolio

A modern, responsive, and interactive personal portfolio built to showcase my work, technical skills, and experience as a Frontend Developer. The project focuses on clean component architecture, reusable animation systems, and immersive 3D visual experiences.

<p align="center">
  <a href="https://leonardo-wilis-portfolio.vercel.app"><b>Live Demo</b></a> ·
  <a href="https://github.com/leowilis/portfolio2"><b>Repository</b></a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-black?logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" />
  <img alt="Three.js" src="https://img.shields.io/badge/Three.js-black?logo=three.js" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Animation System](#animation-system)
- [Responsive Design](#responsive-design)
- [Performance Considerations](#performance-considerations)
- [SEO & Metadata](#seo--metadata)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Development Principles](#development-principles)
- [Browser Support](#browser-support)
- [Troubleshooting](#troubleshooting)
- [Project Status](#project-status)
- [Author](#author)
- [License](#license)

---

## Overview

This portfolio is designed and developed as a **production-style frontend project** rather than a simple static personal website. It combines traditional frontend engineering with motion design and 3D experiences to reflect both technical and UI/UX capabilities.

**Goals of the project:**

- Showcase selected frontend projects in an interactive, product-like way
- Demonstrate modern React and Next.js development practices
- Build reusable, well-typed animation primitives
- Maintain a scalable, easy-to-extend component structure
- Provide a fully responsive experience across devices
- Apply SEO and accessibility best practices
- Keep the codebase clean and maintainable

---

## Features

### Responsive Navigation
- Dedicated desktop and mobile navigation experiences
- Mobile hamburger menu with state management
- Smooth section navigation and scroll position handling
- Responsive "Hire Me" call-to-action

### Animated Hero Section
- Layered motion with ambient background effects
- Mouse-based visual interaction
- Availability indicator and scroll indicator
- Responsive typography and motion-based transitions

### About Section
- Introduces my background and development approach
- Smooth scroll-triggered entrance animations via reusable components

### Interactive Projects Section
- Scroll-driven animation with 3D CSS transforms and perspective effects
- Project cards with technology badges, live demo, and GitHub links
- Feels like an interactive product experience rather than a static grid

### Tech Stack Section
- Responsive layout highlighting tools and technologies
- Motion-based interactions on hover/scroll

### Education Section
- Overview of my learning background and development journey

### Contact Section
- Clear call-to-action for clients, recruiters, and collaborators
- Interactive Three.js globe

### Reusable Animation System
Animations are organized into reusable components instead of being reimplemented in every section:

- Fade In
- Stagger Container
- Text Reveal
- Magnetic Button
- Floating Elements
- Count Up
- Scroll-based transformations

### 🔍 SEO
- Page metadata, Open Graph, and Twitter card metadata
- Structured data, robots configuration, favicon, and canonical metadata

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js, React, TypeScript |
| **Styling** | Tailwind CSS, Tailwind Merge, Tailwind Animate |
| **Animation** | Motion, GSAP, React CountUp |
| **3D & WebGL** | Three.js, React Three Fiber, React Three Drei, React Three Postprocessing, Three Globe, Postprocessing, Maath |
| **UI & Components** | shadcn/ui, Radix UI, Lucide React, Tabler Icons, React Icons, Class Variance Authority, clsx |
| **Tooling** | ESLint, TypeScript, PostCSS, npm |

---

## Architecture

The project follows a **component-oriented architecture**, separated into:

- Page-level structure
- Layout components
- Section components
- UI components
- Animation components
- SEO components
- Scroll utilities

This separation keeps responsibilities clear and makes individual parts of the portfolio easier to modify without affecting unrelated sections.

---

## Project Structure

```text
portfolio2/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── ...
│
├── src/
│   ├── animations/
│   │   ├── CountUp.tsx
│   │   ├── Cursor.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Floating.tsx
│   │   ├── Magnetic.tsx
│   │   ├── ScrollScene.tsx
│   │   ├── StaggerContainer.tsx
│   │   └── TextReveal.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── loading/
│   │   ├── ScrollRestoration/
│   │   ├── sections/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── education/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   └── tech-stack/
│   │   ├── seo/
│   │   └── ui/
│   │       └── resizable-navbar.tsx
│   └── ...
│
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

Verify your versions with:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/leowilis/portfolio2.git
cd portfolio2
```

### 2. Install Dependencies

```bash
npm install
```

This installs the dependencies defined in `package.json`, using the existing `package-lock.json` for reproducible dependency resolution.

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Development Workflow

```bash
npm install
npm run dev
```

After making changes, run the project's validation commands before committing:

```bash
npm run lint
npm run typecheck
npm run build
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint |
| `npm run typecheck` | Runs TypeScript type checking |

---

## Animation System

One of the main goals of this project is to avoid duplicating animation logic across individual sections. Instead, common animation patterns are implemented as reusable components.

**Fade In** — controlled entrance animations
```tsx
<FadeIn>
  <Content />
</FadeIn>
```

**Stagger Container** — animates multiple children sequentially
```tsx
<StaggerContainer>
  <Item />
  <Item />
  <Item />
</StaggerContainer>
```

**Text Reveal** — animated text entrances and heading transitions

**Magnetic** — interactive buttons/elements that respond to pointer movement

**Floating** — subtle continuous motion on selected visual elements

**Scroll Scene** — scroll-driven motion connecting different sections, giving the page an interactive, visual-experience feel while keeping the structure component-based

---

## Responsive Design

The portfolio adapts across Mobile, Tablet, Laptop, Desktop, and Large Desktop displays, including:

- Navigation changes
- Typography scaling
- Section spacing
- Project layouts
- Interactive elements
- 3D visual adjustments
- Mobile menu behavior

The goal is to preserve visual hierarchy and usability regardless of viewport size.

---

## Performance Considerations

Since the project contains animation- and WebGL-heavy experiences, performance is a key consideration. The implementation relies on:

- Reusable animation primitives
- CSS transforms
- Scroll-based motion values
- Component separation
- Next.js image optimization
- Responsive rendering strategies
- Controlled visual effects

3D effects are used selectively to enhance the experience rather than replacing the entire UI with WebGL.

---

## SEO & Metadata

Configured through the Next.js App Router, including:

- Site title, description, and keywords
- Author information
- Open Graph metadata
- Twitter metadata
- Robots configuration
- Favicon and metadata base URL
- Structured data for search engines

---

## Deployment

The portfolio is deployed using [Vercel](https://vercel.com).

**Production website:** [leonardo-wilis-portfolio.vercel.app](https://leonardo-wilis-portfolio.vercel.app)

### Deploying Your Own Instance

1. Fork or clone the repository
2. Install the dependencies
3. Run the production build locally
4. Connect the repository to Vercel
5. Configure any required environment variables
6. Deploy the project

No special server configuration is required beyond the standard Next.js application setup.

---

## Development Principles

- **Component Reusability** — components are reused whenever the same behavior or UI pattern appears in multiple places
- **Separation of Concerns** — page structure, animation behavior, UI primitives, and section-specific logic are kept separated where practical
- **Maintainability** — individual sections can be changed without large ripple effects across the app
- **Responsive First** — UI behavior is considered across viewport sizes, not just desktop
- **Purposeful Animation** — motion improves hierarchy, feedback, and storytelling rather than adding decoration for its own sake
- **Performance Awareness** — visual effects are balanced against rendering and browser performance, especially for animation-heavy and WebGL-based sections

---

## Browser Support

The portfolio targets modern browsers with support for modern JavaScript, CSS transforms/animations, ES modules, and WebGL for 3D experiences.

For the best experience, use an up-to-date version of:

- Chrome
- Edge
- Firefox
- Safari

---

## Troubleshooting

**Port 3000 is already in use**
```bash
npm run dev -- -p 3001
```
Then open [http://localhost:3001](http://localhost:3001).

**Dependencies are out of sync**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Build issues**

Run the checks individually to isolate the source of the problem:
```bash
npm run lint
npm run typecheck
npm run build
```

---

## Project Status

The portfolio is currently live. Planned improvements include:

- Additional project case studies
- More detailed project documentation
- Further performance optimization
- Additional accessibility improvements
- Expanded interactive experiences

---

## Author

**Leonardo Wilis**
Frontend Developer focused on building modern, responsive, and interactive web experiences.

I enjoy working with React, Next.js, TypeScript, modern CSS, animation, interactive UI, and 3D web experiences.

- Portfolio: [leonardo-wilis-portfolio.vercel.app](https://leonardo-wilis-portfolio.vercel.app)
- GitHub: [@leowilis](https://github.com/leowilis)

---

## License

This repository contains my personal portfolio website and is intended primarily for personal and professional presentation. The design, content, branding, and personal assets are **not** intended to be redistributed as a portfolio template without permission.