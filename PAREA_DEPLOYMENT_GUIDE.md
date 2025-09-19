# 🚀 Parea Multi-Location Website - Deployment Guide

## 📁 Project Structure Overview

```
parea-sites/
├── splash/              # Main landing page (location selector)
│   ├── index.html       # Location selector homepage
│   ├── styles.css       # Splash page styling
│   ├── script.js        # Location routing logic
│   ├── netlify.toml     # Main deployment config
│   └── _redirects       # Routing rules
├── orleans/             # Full-service restaurant site
│   ├── index.html       # Complete restaurant website
│   ├── styles.css       # Orleans styling (Greek blue theme)
│   ├── script.js        # Orleans functionality
│   ├── netlify.toml     # Orleans deployment config
│   └── _redirects       # Orleans routing
└── express/             # Take-out only site
    ├── index.html       # Streamlined take-out site
    ├── styles.css       # Express styling (orange theme)
    ├── script.js        # Express functionality
    ├── netlify.toml     # Express deployment config
    └── _redirects       # Express routing
```

---

## 🌐 Deployment Options

### **Option 1: Single Domain with Subdirectories (Recommended)**

Deploy the entire `parea-sites/` folder as one site:

**Domain Structure:**
- `parea.com/` → Splash page (location selector)
- `parea.com/orleans/` → Orleans full restaurant site
- `parea.com/express/` → Express take-out site

**Deployment Steps:**
1. Upload entire `parea-sites/` folder to hosting provider
2. Set document root to `parea-sites/splash/`
3. Configure routing using the main `netlify.toml` and `_redirects`

### **Option 2: Separate Subdomains**

Deploy each location as separate sites:

**Domain Structure:**
- `parea.com` → Splash page
- `orleans.parea.com` → Orleans site
- `express.parea.com` → Express site

**Deployment Steps:**
1. Deploy `splash/` to main domain
2. Deploy `orleans/` to orleans subdomain
3. Deploy `express/` to express subdomain
4. Update splash page links to use subdomains

---

## 🔧 Netlify Deployment (Recommended)

### **Single Site Deployment:**

1. **Connect Repository:**
   ```bash
   # If using Git
   git add parea-sites/
   git commit -m "Add Parea multi-location website"
   git push origin main
   ```

2. **Netlify Settings:**
   - **Build command:** (leave empty for static site)
   - **Publish directory:** `parea-sites/splash`
   - **Branch:** `main`

3. **Custom Domain Setup:**
   - Add custom domain: `www.eatparea.com`
   - Enable HTTPS (automatic with Netlify)
   - Configure DNS records

4. **Environment Variables:** (if needed)
   - `SITE_URL`: `https://www.eatparea.com`

### **Testing Deployment:**

After deployment, test these URLs:
- ✅ `parea.com/` → Splash page loads
- ✅ `parea.com/orleans/` → Orleans site loads
- ✅ `parea.com/express/` → Express site loads
- ✅ Navigation between sites works
- ✅ Online ordering links work
- ✅ Phone links work on mobile

---

## 📱 Mobile Testing Checklist

### **Splash Page:**
- [ ] Location cards display properly
- [ ] Touch interactions work
- [ ] Navigation to Orleans/Express works
- [ ] Images load optimized versions

### **Orleans Site:**
- [ ] Full navigation menu works
- [ ] Dishes conveyor scrolls smoothly
- [ ] Reservation buttons work
- [ ] Contact info is clickable
- [ ] Gallery lightbox works

### **Express Site:**
- [ ] Order buttons are prominent
- [ ] Quick order flow works
- [ ] Hours display correctly
- [ ] Express benefits are clear
- [ ] Take-out messaging is obvious

---

## 🎯 SEO Optimization

### **Meta Tags Implemented:**
- ✅ Title tags optimized for each location
- ✅ Meta descriptions with local keywords
- ✅ Open Graph tags for social sharing
- ✅ Schema.org structured data
- ✅ Local business markup

### **Performance Optimizations:**
- ✅ WebP images with fallbacks
- ✅ Lazy loading for images
- ✅ CSS/JS cache busting
- ✅ Minified assets
- ✅ CDN-optimized images (Supabase)

### **Local SEO Features:**
- ✅ Google Maps integration
- ✅ Local postal codes in delivery areas
- ✅ Business hours markup
- ✅ Phone numbers in proper format
- ✅ Address schema markup

---

## 🔍 Analytics Setup

### **Google Analytics 4:**
Add to each site's `<head>` section:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Event Tracking Implemented:**
- ✅ Phone call clicks
- ✅ Order button clicks
- ✅ External link clicks
- ✅ Page load times
- ✅ Location selections

---

## 🛠 Maintenance & Updates

### **Content Updates:**
1. **Menu Changes:** Update JSON data and redeploy
2. **Hours Changes:** Update both HTML and schema markup
3. **Contact Info:** Update across all three sites
4. **Deals/Promotions:** Update deal images and text

### **Image Management:**
- All images served from Supabase CDN
- Automatic WebP conversion
- Responsive image sizing
- Lazy loading implemented

### **Performance Monitoring:**
- Check Core Web Vitals monthly
- Monitor mobile page speed
- Test all interactive elements
- Verify cross-browser compatibility

---

## 🚨 Troubleshooting

### **Common Issues:**

**1. Routing Not Working:**
- Check `_redirects` file is in root
- Verify netlify.toml configuration
- Test with and without trailing slashes

**2. Images Not Loading:**
- Verify Supabase URLs are accessible
- Check image format parameters
- Test on different devices/networks

**3. Mobile Navigation Issues:**
- Test touch interactions
- Verify viewport meta tag
- Check responsive breakpoints

**4. Phone/Email Links Not Working:**
- Verify `tel:` and `mailto:` formats
- Test on actual mobile devices
- Check for URL encoding issues

### **Performance Issues:**
- Run Lighthouse audit
- Check image optimization
- Verify lazy loading is working
- Test on slow 3G connection

---

## 📊 Success Metrics

### **Key Performance Indicators:**
- **Page Load Speed:** < 3 seconds on mobile
- **Core Web Vitals:** All green scores
- **Mobile Usability:** No mobile usability errors
- **Conversion Rate:** Order button clicks / visits
- **Local SEO:** Rankings for "Greek restaurant [location]"

### **Business Metrics:**
- Online order completions
- Phone call conversions
- Location page engagement
- Cross-location traffic

---

## 🎉 Launch Checklist

### **Pre-Launch:**
- [ ] All three sites tested thoroughly
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing completed
- [ ] SEO markup validated
- [ ] Analytics tracking verified
- [ ] Contact forms working (if added)
- [ ] External links tested

### **Launch Day:**
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] Google Search Console submitted
- [ ] Social media links updated
- [ ] Staff trained on new website features

### **Post-Launch:**
- [ ] Monitor for 48 hours
- [ ] Check analytics data
- [ ] Test order flows
- [ ] Gather user feedback
- [ ] Plan first content updates

---

**🚀 Ready for Launch!**

The Parea multi-location website system is now complete and ready for deployment. Each location has its own optimized experience while maintaining brand consistency and shared functionality.

---

*Last Updated: September 2025*  
*Built following Restaurant Website Master Guide patterns*
