# 🎯 MISTORIA - Quick Reference Card

## 🚀 GET STARTED IN 60 SECONDS

```bash
cd artifacts/perfume-store
pnpm install
pnpm dev
# Open http://localhost:5173
```

---

## 📖 DOCUMENTATION QUICK LINKS

| Need | File | Read Time |
|------|------|-----------|
| 👀 Overview | [START-HERE.md](./START-HERE.md) | 5 min |
| ⚡ Setup | [QUICK-START.md](./artifacts/perfume-store/QUICK-START.md) | 10 min |
| 📚 Full Docs | [README-MISTORIA.md](./artifacts/perfume-store/README-MISTORIA.md) | 20 min |
| 📋 Features | [MISTORIA-IMPLEMENTATION-SUMMARY.md](./MISTORIA-IMPLEMENTATION-SUMMARY.md) | 15 min |
| 🚀 Deploy | [DEPLOYMENT-SETUP-GUIDE.md](./DEPLOYMENT-SETUP-GUIDE.md) | 30 min |

---

## 🎨 CUSTOMIZATION QUICK GUIDE

### Change Product Images
**File**: `src/data/perfumes.ts`
```typescript
imageUrl: "https://new-image-url.com/image.jpg"
```

### Update Pricing
**File**: `src/data/perfumes.ts`
```typescript
export const VOLUME_PRICES = [
  { ml: 10, price: 6 },   // Edit price
  { ml: 20, price: 12 },
  { ml: 30, price: 18 },
  { ml: 50, price: 25 },
]
```

### Change Colors
**File**: `src/index.css` (Search for :root)
```css
--primary: 46 57% 52%;        /* Gold */
--background: 0 0% 4%;        /* Black */
--foreground: 0 0% 98%;       /* White */
```

### Modify Product Data
**File**: `src/data/perfumes.ts`
```typescript
{
  id: "1",
  name: "Your Name",
  tagline: "Your Tagline",
  description: "Your Description",
  imageUrl: "https://...",
  topNotes: ["Note1"],
  middleNotes: ["Note2"],
  baseNotes: ["Note3"],
  isBestSeller: true,
  isNew: false,
}
```

---

## 📁 KEY FILES

| File | What It Does | Edit For |
|------|-------------|----------|
| `perfumes.ts` | Products & prices | Product data |
| `index.css` | Colors & styles | Branding |
| `Navbar.tsx` | Top navigation | Menu/logo |
| `HomePage.tsx` | Landing page | Hero content |
| `ProductDetailPage.tsx` | Product view | Product layout |

---

## 🎯 COMMON COMMANDS

```bash
# Start development
pnpm dev

# Build for production
pnpm build

# Preview production
pnpm serve

# Type check
pnpm typecheck

# Clean & rebuild
rm -rf node_modules && pnpm install && pnpm dev
```

---

## 🌐 DEPLOYMENT OPTIONS

| Platform | Time | Cost | Setup |
|----------|------|------|-------|
| **Vercel** | 2 min | Free | GitHub + click |
| **Netlify** | 3 min | Free | GitHub + click |
| **Docker** | 10 min | Variable | Build + push |
| **AWS** | 30 min | Variable | Guide needed |

**Recommended**: Vercel (fastest, easiest, free)

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile:   320px - 640px
Tablet:   641px - 1024px  
Desktop:  1025px+
Large:    1280px+
```

All automatically handled by Tailwind

---

## 🎨 BRAND COLORS

```
Gold:  #D4AF37 (Primary accent)
Black: #0A0A0A (Background)
White: #F8F8F8 (Text)
Gray:  #1A1A1A (Borders)
```

---

## ✨ PAGES AVAILABLE

```
/              → Homepage
/products      → All products
/product/1     → Product 1 detail
/product/2     → Product 2 detail
/product/3     → Product 3 detail
/cart          → Shopping cart
/checkout      → Order form
/404           → Page not found
```

---

## 🛒 SHOPPING FLOW

```
Home → View Product → Select Volume → Add to Cart → Checkout → Confirm
```

Each step is smooth with animations!

---

## 💡 PRO TIPS

1. **Font**: Serif (headers), Sans (body)
2. **Spacing**: Use Tailwind: `p-6`, `mb-8`, `py-12`
3. **Colors**: Use CSS variables: `text-primary`, `bg-background`
4. **Images**: Use external URLs in `perfumes.ts`
5. **Icons**: Import from `lucide-react`
6. **Animations**: Use Framer Motion for smooth effects

---

## 🐛 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Port in use | Change PORT env var or kill process |
| Images not showing | Check URLs in perfumes.ts |
| Styles wrong | Clear cache, rebuild: `pnpm build` |
| Cart resets | Expected (in-memory only, use localStorage for persistence) |
| Console errors | Check browser F12, review error message |

---

## ✅ LAUNCH CHECKLIST

```
□ pnpm dev works
□ Homepage displays
□ Products show images
□ Add to cart works
□ Mobile responsive
□ Checkout submits
□ No console errors
□ Prices update
□ Animations smooth
□ Links all work
```

---

## 📞 QUICK HELP

**Q: How do I add a new product?**
A: Edit `src/data/perfumes.ts`, add new object to PERFUMES array

**Q: How do I change price?**
A: Edit VOLUME_PRICES in `src/data/perfumes.ts`

**Q: How do I change colors?**
A: Edit CSS variables in `src/index.css`

**Q: How do I deploy?**
A: Read DEPLOYMENT-SETUP-GUIDE.md, choose Vercel (easiest)

**Q: Why does cart reset?**
A: It uses in-memory state only. For persistence, use localStorage or backend

**Q: Can I add more products?**
A: Yes! Add to PERFUMES array and VOLUME_PRICES in `perfumes.ts`

---

## 🎓 TECH STACK

```
Frontend:   React 18 + TypeScript
Build:      Vite
Styling:    Tailwind CSS
Animations: Framer Motion
UI:         Radix UI + Lucide Icons
Routing:    Wouter
State:      Context API
```

---

## 📊 PROJECT STRUCTURE

```
perfume-store/
├── src/
│   ├── pages/          (Home, Products, Cart, Checkout)
│   ├── components/     (ProductCard, Navbar, etc.)
│   ├── context/        (CartContext for state)
│   ├── data/          (perfumes.ts - products & prices)
│   ├── App.tsx        (Router)
│   └── index.css      (Tailwind + custom styles)
├── vite.config.ts     (Build configuration)
└── package.json       (Dependencies)
```

---

## 🚀 DEPLOYMENT QUICK STEPS

### Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy
5. Add domain in settings
6. Done! ✅

### Alternative: Netlify
1. Push to GitHub
2. Go to netlify.com
3. New site from Git
4. Select repo & deploy
5. Add domain
6. Done! ✅

---

## 🎉 YOU'RE READY!

```bash
# Start your MISTORIA journey
cd artifacts/perfume-store
pnpm dev

# Then explore, customize, and deploy! 🚀
```

---

## 📚 DOCUMENTATION MAP

```
START-HERE.md  ⭐ (Begin here)
    ↓
QUICK-START.md or README-MISTORIA.md
    ↓
DEPLOYMENT-SETUP-GUIDE.md (when ready to launch)
```

---

**🌟 Discover Your Signature Scent with MISTORIA 🌟**

*Your luxury perfume e-commerce platform, production-ready in 60 seconds*
