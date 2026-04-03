# 🌟 MISTORIA - Luxury Perfume E-Commerce Platform

> **Discover Your Signature Scent**

A premium, minimalist e-commerce website for MISTORIA luxury perfume brand. Built with React, TypeScript, and modern web technologies for an elevated shopping experience.

## ✨ Features

### 🎨 Luxury Branding
- **Elegant Design**: Dark premium backgrounds with gold accents (#D4AF37)
- **Custom Logo**: Bespoke "M" inspired by mist and aura
- **Typography**: Cormorant Garamond (serif) for luxury feel, Montserrat (sans-serif) for clarity
- **Color Scheme**: Black, white, and gold - timeless luxury palette

### 📦 Product Experience
- **Dynamic Product Display**: High-resolution product images with smooth hover effects
- **Volume Selection**: 10ml, 20ml, 30ml, 50ml with real-time price updates
- **Fragrance Notes**: Detailed olfactory profiles (Top, Heart, Base notes)
- **Social Proof**: 
  - Real-time viewer count ("X people viewing this product")
  - Limited stock alerts
  - Countdown timers for exclusive offers
  - Customer testimonials with ratings

### 🛒 Seamless Shopping
- **Product Catalog**: 3 signature fragrances
  - Stronger With You Intensely - Warm & Sensual
  - Xerjoff Erba Pura - Fresh & Elegant  
  - Versace Eros EDP - Bold & Seductive
- **Smart Cart**: Add, remove, adjust quantities with live totals
- **Professional Checkout**: Multi-step form with contact, shipping, payment sections
- **Order Confirmation**: Elegant success page with appreciation message

### 🎬 Smooth Animations
- Framer Motion transitions throughout
- Page scroll animations
- Hover effects on all interactive elements
- Loading states and micro-interactions

### 📱 Fully Responsive
- Mobile-first design
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading performance

### 🏠 Homepage Sections
1. **Hero Section** - "Discover Your Signature Scent" with luxury photography
2. **Best Sellers** - Showcase of signature fragrances with badges
3. **Exclusive Offer** - Countdown timer for limited availability
4. **Customer Testimonials** - 4-star reviews from satisfied patrons
5. **Premium Footer** - Brand presence and navigation

## 🚀 Quick Start

### Installation
```bash
cd artifacts/perfume-store
pnpm install
```

### Development
```bash
pnpm dev
```
The application will be available at `http://localhost:5173`

### Production Build
```bash
pnpm build
pnpm serve
```

## 📁 Project Structure

```
perfume-store/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Navigation with Mistoria logo
│   │   ├── MistoriaLogo.tsx           # Custom logo SVG component
│   │   ├── ProductCard.tsx            # Product display card
│   │   ├── ProductDetailPage.tsx      # Detailed product view
│   │   ├── VolumeSelector.tsx         # Volume selection buttons
│   │   ├── CountdownTimer.tsx         # Countdown display
│   │   ├── ReviewCard.tsx             # Customer testimonial card
│   │   └── ui/                        # Radix UI components
│   ├── pages/
│   │   ├── HomePage.tsx               # Landing page
│   │   ├── ProductsPage.tsx           # Product listing
│   │   ├── ProductDetailPage.tsx      # Product details
│   │   ├── CartPage.tsx               # Shopping cart
│   │   ├── CheckoutPage.tsx           # Checkout form
│   │   └── not-found.tsx              # 404 page
│   ├── context/
│   │   └── CartContext.tsx            # Cart state management
│   ├── data/
│   │   └── perfumes.ts                # Product data with images & prices
│   ├── assets/                        # Images and static files
│   ├── App.tsx                        # Main app router
│   └── index.css                      # Tailwind styles
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🎯 Product Data

Each product includes:
- **Name**: Fragrance title
- **Tagline**: Quick descriptor
- **Description**: Short overview
- **Full Description**: Detailed experience
- **Image URL**: High-quality product photo
- **Fragrance Notes**:
  - Top Notes (opening scent)
  - Heart Notes (middle development)
  - Base Notes (lasting impression)
- **Pricing**: Tiered by volume (10ml-50ml)

### Available Products

#### 1. Stronger With You Intensely
- **Type**: Warm, sensual, winter fragrance
- **Best for**: Confident men, night occasions
- **Key Notes**: Pink Pepper, Cinnamon, Lavender (top) | Cinnamon, Lavender (heart) | Vanilla, Amber (base)
- **Price Range**: $5-$20 (10ml-50ml)

#### 2. Xerjoff Erba Pura
- **Type**: Fresh, rich, unisex
- **Best for**: Daily wear, elegant occasions
- **Key Notes**: Orange, Lemon (top) | Fruits (heart) | Musk, Vanilla (base)
- **Price Range**: $5-$20 (10ml-50ml)

#### 3. Versace Eros Eau de Parfum
- **Type**: Seductive, masculine, energetic
- **Best for**: Bold personalities, night events
- **Key Notes**: Mint, Apple (top) | Ambroxan (heart) | Vanilla, Tonka Bean (base)
- **Price Range**: $5-$20 (10ml-50ml)

## 💳 Shopping Flow

1. **Browse**: Explore collection via homepage or products page
2. **Discover**: Click "View Details" to see full fragrance profile
3. **Select**: Choose volume (10/20/30/50ml) - price updates automatically
4. **Add**: "Add to Reserve" button adds to cart
5. **Review**: Visit cart to see items and adjust quantities
6. **Checkout**: Multi-step form (contact → shipping → payment)
7. **Confirm**: Order confirmation with appreciation message

## 🛠 Technical Details

### Technologies
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with dark mode
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Routing**: Wouter
- **State Management**: React Context API + Hooks
- **Icons**: Lucide React

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Optimized images with lazy loading
- Code splitting via Vite
- CSS-in-JS for critical styles
- ~60+ Lighthouse score

## 🎨 Customization

### Colors
Edit `src/index.css` CSS variables:
```css
--primary: 46 57% 52%;        /* Gold #D4AF37 */
--background: 0 0% 4%;        /* Dark background */
--foreground: 0 0% 98%;       /* Light text */
```

### Fonts
Change in `src/index.css`:
- Serif (luxury): Cormorant Garamond
- Sans (interface): Montserrat

### Products
Edit `src/data/perfumes.ts` to:
- Update product names and descriptions
- Change image URLs
- Modify fragrance notes
- Adjust pricing

## 📊 Price Configuration

Volume pricing tiers in `src/data/perfumes.ts`:
```typescript
export const VOLUME_PRICES = [
  { ml: 10, price: 5 },
  { ml: 20, price: 9 },
  { ml: 30, price: 15 },
  { ml: 50, price: 20 },
];
```

Adjust prices as needed - ProductCard and ProductDetailPage automatically calculate based on volume.

## 🔐 Security Notes

⚠️ **Payment Processing**: This is a demonstration checkout. In production:
- Integrate with Stripe, PayPal, or similar payment gateway
- Never store card details in frontend
- Use proper SSL/TLS certificates
- Implement backend order processing

## 📧 Customer Features

### Testimonials Section
Located on homepage showing 5-star reviews from:
- K. Mansour
- C. Rousseau
- A. Patel
- Y. Hassan

Edit in `src/pages/HomePage.tsx` to add/modify reviews.

### Countdown Timer
Offers limited-time exclusivity. Set target date in HomePage:
```typescript
const countdownTarget = new Date();
countdownTarget.setDate(countdownTarget.getDate() + 7); // 7 days
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Set environment variables:
   - `PORT=3000`
   - `BASE_PATH=/`
4. Deploy

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "serve"]
```

### Domain Setup
- Point `mistoria.com` to your hosting provider
- Set up SSL certificate for HTTPS
- Configure DNS records

## 📈 Analytics & Conversion

The site includes conversion optimization:
- **Social Proof**: Viewer counts and stock alerts
- **Urgency**: Countdown timers on exclusive offers
- **Clear CTA**: "Add to Reserve" buttons throughout
- **Smooth UX**: Minimal friction in shopping flow
- **Trust Signals**: "Complimentary shipping", "Signature box included"

## 🐛 Debugging

### Common Issues

**Products not showing images?**
- Check URLs in `src/data/perfumes.ts`
- Verify imageUrl field exists in each product
- Check browser console for CORS issues

**Cart not persisting?**
- CartContext state resets on page refresh (expected for demo)
- For persistence, use localStorage or a backend API

**Styling issues?**
- Clear cache: `rm -rf node_modules/.vite`
- Rebuild: `pnpm build`

## 📝 License

© 2026 Mistoria Luxury Perfumes. All rights reserved.

---

**Built with ❤️ for luxury perfume enthusiasts worldwide.**

*"Discover Your Signature Scent" - Mistoria*
