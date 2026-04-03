# MISTORIA Quick Start Guide

## 🚀 Get Started in 3 Minutes

### Step 1: Navigate to Project
```bash
cd d:\Mouad\projects\Aromatic-Select\artifacts\perfume-store
```

### Step 2: Install Dependencies
```bash
pnpm install
```

### Step 3: Start Development Server
```bash
pnpm dev
```

### Step 4: Open in Browser
Your site will be available at: **http://localhost:5173**

---

## 📖 What You'll See

### **Homepage** (/)
- **Hero Section**: "Discover Your Signature Scent" headline with luxury positioning
- **Best Sellers**: 3 signature fragrances displayed with product cards
- **Limited Offer**: Countdown timer showing exclusive deal
- **Testimonials**: 4+ customer reviews with 5-star ratings
- **Premium Footer**: MISTORIA branding and navigation

### **Products Page** (/products)
- All available fragrances in grid layout
- Product cards with:
  - High-quality images
  - Product name and tagline
  - Description snippet
  - "View Details" button
  - "Best Seller" and "New" badges

### **Product Detail Page** (/product/:id)
- Full-screen product image with luxury styling
- Complete product information:
  - Brand tagline
  - Dynamic pricing
  - Social proof (viewer count, stock alerts)
  - Full description
  - Fragrance notes (Top, Heart, Base)
- **Volume Selector**: Choose 10ml, 20ml, 30ml, or 50ml
- **Add to Reserve** button with success animation

### **Shopping Cart** (/cart)
- Review all selected items
- Adjust quantities with +/- buttons
- See total with complimentary shipping
- "Proceed to Checkout" button

### **Checkout** (/checkout)
- 3-step form:
  1. **Contact**: Name, email
  2. **Shipping**: Address, city, postal code, country
  3. **Payment**: Card details (demo form)
- Order summary sidebar
- "Place Order" button

### **Order Confirmation**
- Success page with checkmark
- Appreciation message
- Option to return to homepage

---

## 🎯 Key Features to Explore

### Dynamic Pricing
1. Go to any product detail page
2. Click different volume buttons (10ml, 20ml, etc.)
3. Watch price update automatically ✨

### Add to Cart
1. Select a volume
2. Click "Add to Reserve"
3. See success animation
4. Notice cart icon badge increments in navbar

### View Cart
1. Click shopping bag icon in navbar
2. Review all items
3. Adjust quantities or remove items
4. See total calculate automatically

### Checkout Flow
1. Click "Proceed to Checkout"
2. Fill in contact information
3. Enter shipping address
4. (Optional) Enter payment details
5. Click "Place Order"
6. See confirmation page

### Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar
3. Switch between:
   - Mobile (iPhone 12: 390x844)
   - Tablet (iPad: 768x1024)
   - Desktop (1920x1080)
4. Notice all elements resize smoothly

---

## 🎨 Customization

### Change Product Images
Edit: `src/data/perfumes.ts`
```typescript
imageUrl: "https://your-image-url.com/perfume.jpg"
```

### Update Product Names/Descriptions
Edit: `src/data/perfumes.ts`
```typescript
{
  name: "Your Fragrance Name",
  description: "Your description",
  // ...
}
```

### Modify Pricing
Edit: `src/data/perfumes.ts`
```typescript
export const VOLUME_PRICES = [
  { ml: 10, price: 8 },  // Changed from 5
  { ml: 20, price: 12 }, // Changed from 9
  // ...
]
```

### Change Colors
Edit: `src/index.css` - Look for these CSS variables:
```css
--primary: 46 57% 52%;        /* Gold color */
--background: 0 0% 4%;        /* Background */
--foreground: 0 0% 98%;       /* Text color */
```

---

## 📦 Download Production Build

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm serve
```

### Deploy to Vercel
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Set environment variables:
   - `PORT=3000`
   - `BASE_PATH=/`
5. Deploy!

---

## 🐛 Troubleshooting

### **Products show generic bottle image?**
✓ Images load from external URLs - check your internet connection
✓ Product URLs might be broken - verify in `src/data/perfumes.ts`

### **Cart doesn't save after refresh?**
✓ This is expected - demo uses in-memory state
✓ For production, add localStorage or backend API persistence

### **Styling looks wrong?**
✓ Clear browser cache (Ctrl+Shift+Delete)
✓ Rebuild: `pnpm build`
✓ Restart dev server: `pnpm dev`

### **Port already in use?**
✓ Kill process: `lsof -i :5173` (on macOS/Linux)
✓ Or use different port: `PORT=3001 pnpm dev`

---

## 📊 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Mobile Safari | ✅ iOS 14+ |
| Chrome Mobile | ✅ Latest |

---

## 💡 Pro Tips

### **Keyboard Navigation**
- `Tab` - Navigate between elements
- `Enter` - Click buttons and links
- `Esc` - Close mobile menu

### **Dark Mode Support**
The site is built with dark mode as default. To toggle:
```javascript
document.documentElement.classList.toggle('dark')
```

### **Test Checkout**
Use any of these card numbers:
- `4242 4242 4242 4242` (Visa test)
- Expiry: Any future date (e.g., 12/25)
- CVC: Any 3 digits (e.g., 123)

### **Reset Cart**
Clear browser localStorage:
```javascript
localStorage.clear()
```

---

## 📚 File Guide

| File | Purpose |
|------|---------|
| `src/data/perfumes.ts` | Product data with prices & images |
| `src/pages/HomePage.tsx` | Landing page hero + reviews |
| `src/pages/ProductDetailPage.tsx` | Single product page |
| `src/pages/CartPage.tsx` | Shopping cart |
| `src/pages/CheckoutPage.tsx` | Order form |
| `src/components/ProductCard.tsx` | Product display card |
| `src/components/MistoriaLogo.tsx` | Custom M logo |
| `src/index.css` | Tailwind + custom styles |
| `tailwind.config.ts` | Tailwind configuration |

---

## 🎓 Learning Resources

### Styling Changes
- Tailwind Classes: https://tailwindcss.com/docs
- CSS Variables: `src/index.css` (lines 1-100)

### Component Updates
- React Hooks: https://react.dev
- TypeScript: https://typescriptlang.org/docs
- Framer Motion: https://www.framer.com/motion/

### Adding Features
- Context API: `src/context/CartContext.tsx`
- Routing: `src/App.tsx`
- State Management: Any component with `useState`

---

## ✅ Verification Checklist

After running `pnpm dev`, verify:

- [ ] Homepage loads with hero section
- [ ] Product images display correctly
- [ ] Navigation bar shows Mistoria logo
- [ ] Can add products to cart
- [ ] Cart updates show badge number
- [ ] Product detail page shows fragrance notes
- [ ] Volume selector works and updates price
- [ ] Checkout form accepts input
- [ ] Mobile view works on tablet/phone
- [ ] No console errors (F12)

---

## 🌟 Next Steps

1. ✅ Understand the current structure
2. ✅ Explore all pages and features
3. ✅ Test adding products to cart
4. ✅ Try different volumes and prices
5. ✅ Review responsive design
6. ⬜ Integrate payment gateway (Stripe/PayPal)
7. ⬜ Connect to backend API
8. ⬜ Add user authentication
9. ⬜ Set up analytics
10. ⬜ Deploy to production

---

## 📞 Support

For questions or issues:
1. Check `README-MISTORIA.md` for detailed docs
2. Review `MISTORIA-IMPLEMENTATION-SUMMARY.md` for features
3. Check console errors: Open DevTools (F12)
4. Verify file paths and URLs

---

**Ready to explore MISTORIA? Start with `pnpm dev`! 🚀**

*Discover Your Signature Scent ✨*
