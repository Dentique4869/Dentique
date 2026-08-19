# Dentique — Dental Instruments Store

A React + Vite storefront for dental students to browse instruments and send WhatsApp orders.

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS v4** (utility-first styling)
- **shadcn/ui** (component library)
- **Framer Motion** (animations)
- **react-icons** (WhatsApp icon etc.)

---

## Quick Start (local)

### Prerequisites
- [Node.js 18+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) — install with `npm i -g pnpm`

### Steps

```bash
# 1. Install dependencies
pnpm install

# 2. Start the dev server
pnpm dev
```

The site will be available at **http://localhost:5173**

### Build for production

```bash
pnpm build        # outputs to ./dist
pnpm preview      # preview the production build locally
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui base components
│   ├── Navbar.tsx    # Top navigation bar + cart icon
│   ├── Footer.tsx    # Footer with WhatsApp link
│   └── CartDrawer.tsx  # Right-side cart panel with WhatsApp share
├── pages/
│   └── Home.tsx      # Hero + product catalog
├── data/
│   └── products.ts   # All 148 products (name, description, category, image)
├── hooks/
│   └── use-cart.ts   # Cart state (add / update / remove)
├── lib/
│   └── utils.ts      # cn() helper
├── App.tsx           # Root layout + routing
└── index.css         # Tailwind + CSS variables (warm brown palette)
public/
└── logo.jpg          # Dentique logo
```

---

## Customisation

### Change WhatsApp number
Search for `wa.me/201108350907` in the codebase and replace with your number.

### Change colours
Edit the CSS variables in `src/index.css` under `:root { ... }`.

### Add / edit products
Edit `src/data/products.ts` — each product has:
```ts
{ id, name, description, category, image }
```

### Change the logo
Replace `public/logo.jpg` with your own image (keep the same filename, or update the `src` in `Navbar.tsx`, `Footer.tsx`, and `Home.tsx`).
