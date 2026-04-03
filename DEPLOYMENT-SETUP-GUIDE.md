# MISTORIA Deployment & Setup Guide

## 📋 Overview

This guide covers everything needed to understand, run, customize, and deploy the MISTORIA luxury perfume e-commerce platform.

---

## 🏗️ Architecture

```
MISTORIA E-Commerce Platform
├── Frontend (React + TypeScript)
│   ├── Pages: Home, Products, Product Detail, Cart, Checkout
│   ├── Components: Navbar, ProductCard, VolumeSelector, Logo
│   ├── State: CartContext (Redux-like context)
│   └── Styling: Tailwind CSS with custom dark theme
├── Build Tool: Vite (ultra-fast)
├── Animations: Framer Motion
├── UI Library: Radix UI + Lucide Icons
└── Hosting: Ready for any platform
```

---

## 🚀 Deployment Options

### **Option 1: Vercel (Recommended)**

#### Setup
1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Add MISTORIA e-commerce"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mistoria.git
git push -u origin main
```

2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Configure:
   - **Framework**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `./dist`
   - **Install Command**: `pnpm install`

6. Add environment variables:
   - `PORT=3000`
   - `BASE_PATH=/`

7. Click "Deploy"

#### Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add domain: `mistoria.com`
3. Follow DNS instructions for your registrar
4. Wait 24-48 hours for propagation

#### Cost: **FREE** tier available

---

### **Option 2: Netlify**

#### Setup
1. Push code to GitHub (same as Vercel)

2. Go to https://netlify.com
3. Click "Import from Git"
4. Select repository
5. Configure build:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`

6. Deploy

#### Custom Domain
- Add domain in Netlify Settings → Domain management
- Point DNS records (instructions provided)

#### Cost: **FREE** tier available

---

### **Option 3: Self-Hosted (Docker)**

#### Build Docker Image
```dockerfile
# Create Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV BASE_PATH=/

CMD ["pnpm", "serve"]
```

#### Build & Run
```bash
docker build -t mistoria:latest .
docker run -p 3000:3000 mistoria:latest
```

#### Deploy to AWS/DigitalOcean/Azure
1. Push Docker image to registry (Docker Hub, ECR, etc.)
2. Deploy using platform's container service
3. Configure reverse proxy (Nginx/Apache)
4. Set up SSL with Let's Encrypt

---

### **Option 4: Cloudflare Pages**

#### Setup
1. Connect GitHub repository to Cloudflare Pages
2. Build settings:
   - Framework: Vite
   - Build command: `pnpm build`
   - Build output directory: `dist`

3. Connect custom domain (mistoria.com)

#### Cost: **FREE**

---

## 🔧 Configuration

### Environment Variables

Create `.env` in project root:
```env
VITE_API_URL=https://api.mistoria.com
VITE_GA_ID=UA-XXXXXXXXX-X
NODE_ENV=production
```

Use in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 💳 Payment Gateway Integration

### Stripe Setup

1. Create account at https://stripe.com
2. Get API keys (public & secret)
3. Install Stripe React:
```bash
pnpm add @stripe/react-stripe-js @stripe/js
```

4. Update checkout form:
```typescript
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/js';

const stripe = loadStripe('pk_test_...');

// In CheckoutPage.tsx:
<Elements stripe={stripe}>
  <PaymentForm />
</Elements>
```

5. Create backend endpoint for payment processing

### PayPal Integration

1. Create PayPal developer account
2. Install PayPal SDK:
```bash
pnpm add @paypal/checkout-server-sdk
```

3. Add PayPal button to checkout
4. Implement server-side verification

---

## 🗄️ Backend Integration

### Add Backend API

Create `src/services/api.ts`:
```typescript
const API_URL = import.meta.env.VITE_API_URL;

export async function submitOrder(orderData) {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  return response.json();
}
```

### Connect Frontend to Backend

Update `CheckoutPage.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const result = await submitOrder({
      items,
      customerInfo,
      shippingAddress,
      paymentInfo
    });
    
    if (result.success) {
      setIsSuccess(true);
    }
  } catch (error) {
    console.error('Order failed:', error);
  }
};
```

---

## 📧 Email Notifications

### SendGrid Integration

1. Get API key from https://sendgrid.com
2. Install package:
```bash
pnpm add @sendgrid/mail
```

3. Backend endpoint:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: customerEmail,
  from: 'orders@mistoria.com',
  subject: 'Order Confirmation',
  html: '<h1>Thank you for your order!</h1>'
});
```

---

## 📊 Analytics

### Google Analytics

1. Get tracking ID from https://analytics.google.com
2. Install gtag:
```bash
pnpm add react-ga4
```

3. Initialize in `main.tsx`:
```typescript
import GA4 from 'react-ga4';

GA4.initialize('G-XXXXXXXXXX');
```

4. Track events:
```typescript
GA4.event('add_to_cart', { item_id: perfume.id });
```

---

## 🔒 Security Checklist

- [ ] Use HTTPS (SSL certificate)
- [ ] Sanitize user input
- [ ] Never store credit cards
- [ ] Use payment gateway (Stripe, PayPal)
- [ ] Implement rate limiting
- [ ] Add CORS properly
- [ ] Use security headers
- [ ] Keep dependencies updated
- [ ] Use environment variables
- [ ] Regular security audits

---

## 🚀 Optimization

### Image Optimization

Use CDN or optimization service:
```typescript
// Option 1: Cloudinary
imageUrl: `https://res.cloudinary.com/your-cloud/image/fetch/w_500/https://original-url.com/image.jpg`

// Option 2: Imgix
imageUrl: `https://your-domain.imgix.net/image.jpg?w=500&h=600`
```

### Code Splitting

Already handled by Vite - each route code-splits automatically.

### Performance Metrics

Monitor with:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse (DevTools)

### Target Scores
- Lighthouse: 90+
- Core Web Vitals: All "Good"
- Page Load: < 2 seconds

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - run: pnpm test
      - name: Deploy to Vercel
        run: pnpm install -g vercel && vercel --prod
```

---

## 📈 Growth Strategy

### Marketing Ideas
1. **Email Campaign**: Send to newsletter subscribers
2. **Social Media**: Instagram posts of product photography
3. **Influencer**: Send samples to luxury bloggers
4. **Reviews**: Incentivize customer testimonials
5. **Referral**: "Get $5 off when you refer a friend"
6. **SMS**: Order updates and promotions
7. **Retargeting**: Facebook/Google ads for visitors

### Conversion Optimization
1. **A/B Testing**: Test different CTAs
2. **Heatmaps**: Track user behavior with HotJar
3. **Surveys**: Ask why users leave
4. **Testimonials**: Display more social proof
5. **Speed**: Optimize for fast load times
6. **Mobile**: Perfect mobile experience
7. **Checkout**: Minimize form fields

---

## 📱 PWA (Progressive Web App)

Make installable on phones:

1. Add `public/manifest.json`:
```json
{
  "name": "MISTORIA - Luxury Perfumes",
  "short_name": "MISTORIA",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "theme_color": "#0A0A0A",
  "background_color": "#F8F8F8"
}
```

2. Add to `index.html`:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0A0A0A">
```

---

## 🐛 Monitoring

### Error Tracking

Use Sentry for error monitoring:
```bash
pnpm add @sentry/react
```

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://your-sentry-url",
  environment: "production"
});
```

### Uptime Monitoring

Monitor with UptimeRobot:
1. Go to uptimerobot.com
2. Add endpoint: https://mistoria.com
3. Alert on downtime

---

## 🎓 Scalability

### Phase 1: MVP (Current State)
- Single frontend app
- Static products
- In-memory cart
- Demo checkout

### Phase 2: Add Backend
- Backend API (Node.js/Python)
- Database (PostgreSQL/MongoDB)
- User authentication
- Order processing
- Email notifications

### Phase 3: Advanced Features
- Inventory management
- Subscription service
- Customer accounts
- Wishlist
- Reviews and ratings
- Recommendations

### Phase 4: Scale
- Microservices
- Caching (Redis)
- CDN
- Database replication
- Load balancing

---

## 📚 Documentation

### Created Files
1. **README-MISTORIA.md** - Full feature documentation
2. **QUICK-START.md** - Get started in 3 minutes
3. **MISTORIA-IMPLEMENTATION-SUMMARY.md** - What was built
4. **This file** - Deployment & setup guide

### Keep These Updated
- Product catalog in `perfumes.ts`
- Color scheme in `index.css`
- Meta tags in `index.html`
- Error messages in components

---

## 🎯 Launch Checklist

- [ ] All product images load correctly
- [ ] Pricing is accurate for all volumes
- [ ] Mobile design looks good on all devices
- [ ] Navigation works smoothly
- [ ] Cart adds/removes items correctly
- [ ] Checkout form accepts input
- [ ] No console errors
- [ ] Page load time < 3 seconds
- [ ] SSL certificate installed
- [ ] Custom domain configured
- [ ] Analytics code added
- [ ] Payment gateway connected
- [ ] Email service configured
- [ ] Backup system in place
- [ ] 404 page works
- [ ] Favicon appears
- [ ] Social media links work (if added)

---

## 🎊 Launch Day

### Pre-Launch (24 hours before)
- Final testing on all devices
- Backup database
- Notify support team
- Prepare social media posts

### Launch
- Deploy to production
- Verify site works
- Monitor for errors
- Respond to customer inquiries
- Share on social media

### Post-Launch (1 week)
- Monitor analytics
- Fix any bugs
- Gather feedback
- Prepare Phase 2 features
- Plan marketing campaigns

---

## 📞 Support & Maintenance

### Regular Maintenance
- Update dependencies monthly
- Monitor performance
- Review analytics
- Respond to bugs
- Optimize slow pages
- Update content

### Backup Strategy
- Daily automated backups
- Test restore process monthly
- Keep backups in 2+ locations
- Document recovery procedures

### Disaster Recovery
- Have failover plan
- Document critical systems
- Test recovery procedures
- Maintain contact list
- Plan for DDoS attacks

---

## ✨ Success Metrics

Track these KPIs:

| Metric | Target | Tool |
|--------|--------|------|
| Page Load Time | < 2s | Lighthouse |
| Bounce Rate | < 40% | Google Analytics |
| Conversion Rate | > 2% | Stripe Dashboard |
| Cart Abandonment | < 70% | Custom Tracking |
| Customer Satisfaction | > 4.5/5 | Reviews Section |
| Uptime | > 99.5% | UptimeRobot |

---

## 🚀 You're Ready!

Your MISTORIA e-commerce platform is ready to launch. Choose your deployment platform above and follow the setup instructions.

**Next Steps:**
1. Choose deployment platform (Vercel recommended)
2. Set up custom domain
3. Configure payment gateway
4. Launch marketing campaign
5. Monitor performance
6. Plan Phase 2 features

---

**Best of luck with MISTORIA! 🌟**

*Helping luxury brands connect with their customers worldwide.*
