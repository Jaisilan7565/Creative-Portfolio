# Creative Portfolio Website Design System
## Poornima — Graphic Designer & Creative Thinker

This document details the visual style guide, branding rules, layout specifications, and animation details for building Poornima's portfolio site. The overall vision draws inspiration from premium luxury, fashion, and editorial brands (e.g., Apple, Aesop, Saint Laurent, Porsche).

---

## 1. Brand Identity & Keywords
* **Personality**: Elegant, Luxury, Creative, Editorial, Modern, Confident, Minimal, Artistic, Professional, Timeless.
* **Vibe**: Immersive gallery/museum, editorial magazine feel.
* **Avoid**: Template-like cards, dashboards, heavy neon/gradients, Behance clones.

---

## 2. Color Palette (Luxury Noir & Warm Neutrals)

| Color Name | Hex Code | Purpose | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Primary Background** | `#120F12` | Deep luxury black | `bg-primary-bg` |
| **Secondary Background**| `#171315` | Accent panels, cards | `bg-secondary-bg` |
| **Burgundy** | `#40222B` | Warm luxury highlights | `bg-burgundy` |
| **Wine** | `#5D2F3E` | Sophisticated highlights | `bg-wine` |
| **Rose** | `#D49C9C` | Primary accent, CTA borders | `text-rose` / `bg-rose` |
| **Warm Beige** | `#E8D6CC` | Secondary text, warm layers | `text-warm-beige` |
| **Ivory** | `#F7F2EF` | Heading text, bright details | `text-ivory` |
| **Accent** | `#D98E8E` | Active states, hover markers | `text-accent` |
| **Glass Border** | `rgba(255,255,255,.08)` | Minimal luxury outline panels | `border-glass` |
| **Divider** | `rgba(255,255,255,.12)` | Subtle grid divisions | `border-divider` |

---

## 3. Typography & Sizing

### Fonts
1. **Hero Fonts**: `Canela`, `Cormorant Garamond`, or `PP Editorial New` (Elegant Serif)
2. **Body Fonts**: `Satoshi`, `General Sans`, or `Neue Montreal` (Minimal Grotesque Sans-Serif)
3. **Numbers & Stats**: `Bebas Neue` or `Monument Extended` (Bold Display)

### Font Scaling
* **Hero Text (Desktop)**: `180px` to `240px` (utilizing fluid scaling using standard modern viewport units `text-[clamp(4.5rem,12vw,15rem)]`)
* **Hero Text (Tablet)**: `120px` (`text-[7.5rem]`)
* **Hero Text (Mobile)**: `72px` (`text-[4.5rem]`)

---

## 4. Grid & Layout System
* **Grid**: 12-Column Grid with large margins (`px-6 md:px-12 xl:px-24`).
* **Whitespace**: Massive vertical padding (`py-24 md:py-36 xl:py-48`) to create an airy, editorial feel.
* **Alignment**: Asymmetric alignments, grid-overlapping images, and offset columns.

---

## 5. Animation & Motion Design Guidelines
The site should feature smooth, natural animation curves using GSAP, Framer Motion, and Lenis scroll integration.

* **Scroll Engine**: Lenis Smooth Scroll (default setting).
* **Text Reveals**: SplitType for individual letter reveals (`clip-path` masks, translating up from `100%`).
* **Image Reveals**: Sleek `clip-path` sliding mask reveals accompanied by a subtle zoom on the image (`scale-105` to `scale-100`).
* **Custom Cursor**: A delicate circular ring that expands and changes color on hover, embedding custom actions (e.g., displaying `View Project →` in tiny uppercase text).
* **Parallax**: Subtle mouse parallax on the hero landscape/portrait images and subtle scroll-driven parallax on case study components.

---

## 6. Page Structure & Sections
The single-page immersive portfolio uses the following section sequence:

1. **Hero**: Large typography background, overlapping graphic portrait, available indicator, mouse parallax.
2. **Selected Work**: Horizontal scroll row, large images, hover zoom, and magnetic CTA buttons.
3. **About**: Asymmetric portrait layout with short story, design philosophy, and location/status details.
4. **Design Process**: A timeline detailing the steps: *Discover → Research → Strategy → Design → Refine → Deliver*.
5. **Featured Case Studies**: Modular visual deep dives showcasing Challenge, Grid, Iterations, and Final Mockups.
6. **Skills**: Minimal progress indicators for Figma, Photoshop, Illustrator, Brand Identity, etc.
7. **Testimonials**: Clean, editorial quotes with circular profile indicators.
8. **Contact CTA**: Large typographic focal statement: *"Let's Create Something Beautiful"*.
9. **Footer**: Massive copyright, navigation directories, and social handles.
