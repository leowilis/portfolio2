# Leonardo Wilis — Frontend Developer Portfolio

Personal portfolio website for **Leonardo Wilis**, focused on frontend engineering, clean UI architecture, responsive interfaces, accessibility, and maintainable React/Next.js development.

**Live:** https://leonardo-wilis-portfolio.vercel.app/

---

## Overview

This portfolio is built as a production-oriented frontend project rather than a simple static personal page.

The implementation focuses on:

- Clean and maintainable component architecture
- Responsive layouts across mobile, tablet, and desktop
- Accessible navigation and interaction patterns
- Reusable UI patterns
- Centralized configuration for site and UI values
- Semantic HTML and SEO-friendly structure
- Performance-conscious animation and visual design
- A developer-focused hero visual built with HTML and CSS

The visual direction uses a restrained dark interface with blue accents and subtle depth to create a mature, engineering-focused presentation.

The hero visual intentionally avoids WebGL, canvas-based rendering, and continuously animated 3D effects.

---

## Sections

The homepage follows this content structure:

```text
Hero
↓
Selected Work
↓
About
↓
Technical Skills
↓
Engineering Priorities
↓
Education & Training
↓
CTA
```

### Hero

Introduces Leonardo's role, frontend focus, availability, and primary technologies.

The hero includes an editorial developer interface representing a frontend system rather than a personal photograph.

### Selected Work

Presents selected frontend projects with project information maintained through centralized configuration.

### About

Provides an introduction to Leonardo's frontend development background, engineering mindset, and approach to building web experiences.

### Technical Skills

Presents the technologies and tools used across frontend development and the portfolio itself.

### Engineering Priorities

Highlights several engineering priorities:

- Component architecture
- Performance
- User experience
- Maintainability
- Accessibility

### Education & Training

Presents education, frontend development training, and supporting credentials.

Education and certification data is maintained separately from the presentation components.

### CTA

Provides a final contact-oriented section with direct ways to connect.

---

## Tech Stack

### Core

- Next.js
- React
- TypeScript
- Tailwind CSS

### UI & Styling

- Tailwind CSS
- shadcn/ui
- Radix UI
- class-variance-authority
- clsx
- tailwind-merge
- tw-animate-css

### Animation

- Motion

Animation is used selectively to support hierarchy, interaction, and visual polish without creating unnecessary continuous motion.

### Icons

- Lucide React
- Tabler Icons
- React Icons

### SEO & Structured Data

- Next.js Metadata
- Schema.org structured data
- `schema-dts`

### Development

- ESLint
- TypeScript
- npm

---

## Architecture

The project separates presentation, configuration, reusable UI, and shared utilities into focused directories.

The following represents the main application structure:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── loading/
│   │   └── page-loader.constants.ts
│   │
│   ├── sections/
│   │   ├── about/
│   │   ├── cta/
│   │   ├── education/
│   │   ├── focus/
│   │   ├── projects/
│   │   └── skills/
│   │
│   ├── seo/
│   │   └── StructuredData.tsx
│   │
│   └── ui/
│       └── SectionHeading.tsx
│
├── config/
│   ├── projects.config.ts
│   └── site.config.ts
│
├── constants/
│   ├── hero.constants.ts
│   └── layout.constants.ts
│
├── hooks/
│   └── useInView.ts
│
├── lib/
│   └── utils.ts
│
├── sections/
│   └── hero/
│       ├── HeroAvailability.tsx
│       ├── HeroButtons.tsx
│       ├── HeroCodeVisual.tsx
│       ├── HeroContent.tsx
│       ├── HeroDescription.tsx
│       ├── HeroHeading.tsx
│       ├── HeroSection.tsx
│       ├── HeroVisual.tsx
│       └── index.ts
│
└── types/
    └── project.ts
```

The architecture is organized around feature and responsibility boundaries rather than concentrating unrelated logic inside large components.

---

## Design Principles

### 1. Focused component responsibilities

Components are structured around clear responsibilities.

For example, the hero separates:

- Heading
- Description
- Actions
- Availability
- Visual presentation
- Section composition

Section-specific components follow the same approach across About, Projects, Skills, Engineering Priorities, Education, and CTA.

### 2. Centralized configuration

Reusable or intentionally tunable configuration is kept outside presentation components where appropriate.

Examples include:

- Site information
- Project data
- Hero visual configuration
- Layout constants

This keeps configuration from becoming scattered throughout the component tree.

### 3. Meaningful abstraction

Reusable components are introduced when they provide a clear architectural or maintenance benefit.

The goal is not to maximize the number of abstractions, but to keep responsibilities cohesive and avoid unnecessary duplication.

### 4. Accessibility

The interface uses semantic HTML and accessible interaction patterns wherever appropriate.

Navigation includes:

- Semantic navigation landmarks
- Accessible labels
- Keyboard-focus support
- Responsive mobile navigation
- Reduced-motion considerations

Same-page navigation uses native anchor links for predictable browser behavior.

### 5. Motion with restraint

Motion is used to improve hierarchy and interaction rather than act as a constant visual layer.

The implementation respects:

```css
prefers-reduced-motion
```

so users who request reduced motion are not exposed to unnecessary animation.

### 6. Performance awareness

The portfolio avoids unnecessary continuous animation and heavy visual effects.

The developer visual is built with standard HTML and CSS rather than WebGL or canvas-based rendering.

---

## Responsive Design

The portfolio is designed for:

- Mobile
- Tablet
- Desktop
- Large desktop displays

Responsive Tailwind utilities are used to adapt:

- Typography
- Spacing
- Navigation
- Section layouts
- Interactive elements
- Hero composition

The mobile navigation provides a dedicated responsive interaction model while maintaining the same overall content structure as the desktop experience.

---

## SEO

The application includes SEO-oriented metadata and structured data.

The implementation uses:

- Next.js Metadata
- Semantic HTML
- Structured data through `StructuredData.tsx`
- Descriptive page content
- Accessible headings and navigation

The goal is to make the portfolio understandable to both users and search engines without compromising the visual experience.

---

## Development

### Requirements

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/leowilis/portfolio2.git
cd portfolio2
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the production server after a successful build.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

### Type Check

```bash
npm run typecheck
```

Runs TypeScript without emitting files.

---

## Development Workflow

Before committing changes, validate the project with:

```bash
npm run lint
npm run typecheck
npm run build
git diff --check
```

Changes should remain scoped to the relevant feature or responsibility.

Unrelated changes should not be included in the same commit.

---

## Deployment

The portfolio is deployed using Vercel.

**Production:**
https://leonardo-wilis-portfolio.vercel.app/

The application is built as a Next.js production application and can be deployed through a standard Vercel workflow.

---

## Project Status

The portfolio is actively being refined with a focus on:

- Frontend engineering presentation
- Component architecture
- Responsive design
- Accessibility
- Motion quality
- Performance
- SEO
- Maintainable code organization

The visual system is intentionally oriented toward a mature engineering-focused portfolio rather than relying on heavy visual effects.

---

## Author

**Leonardo Wilis**

Frontend Developer focused on building clean, responsive, and maintainable web experiences.

- Portfolio: https://leonardo-wilis-portfolio.vercel.app/
- GitHub: https://github.com/leowilis

---

## License

This project is a personal portfolio created by Leonardo Wilis.
