# 🇬🇷 Parea Multi-Location Website Project

## 📋 Project Overview

Building a multi-location restaurant website system for **Parea Authentic Greek** with two distinct locations:

### 🏢 **Parea Orleans** (Full-Service Restaurant)
- **Address:** 1675 Tenth Line Rd Unit 22A, Ottawa, ON K1E 3P6
- **Phone:** (613) 834-1112
- **Services:** Dine-in, Take-out, Delivery, Reservations, Catering
- **Hours:** Tue-Sun (Closed Mondays)
- **Special Features:** Table reservations, catering section, full restaurant experience

### 🚀 **Parea Express** (Take-Out Counter)
- **Address:** 540 Montréal Rd, Ottawa, ON K1K 4R4  
- **Phone:** (613) 499-1010
- **Services:** Take-out ONLY (no dine-in, no reservations)
- **Hours:** Daily 11am-9pm
- **Special Features:** Fast counter service, streamlined ordering experience

---

## 🏗 **Architecture Strategy**

### **3-Site Structure:**
```
parea-sites/
├── splash/              # Location selector landing page
│   ├── index.html       # "Choose Your Location" page
│   ├── styles.css       # Splash page styling
│   └── script.js        # Location routing logic
├── orleans/             # Full-service restaurant site
│   ├── index.html       # Complete restaurant website
│   ├── styles.css       # Orleans-specific styling
│   ├── script.js        # Orleans functionality
│   └── img/            # Orleans assets
└── express/             # Take-out only site
    ├── index.html       # Streamlined take-out site
    ├── styles.css       # Express-specific styling
    ├── script.js        # Express functionality
    └── img/            # Express assets
```

### **Routing Strategy:**
- **Main Domain:** `parea.com` → Splash page with location selector
- **Orleans:** `parea.com/orleans/` → Full restaurant experience  
- **Express:** `parea.com/express/` → Take-out focused experience

---

## 📊 **Data Analysis**

### **Shared Elements:**
- ✅ Same logo and branding
- ✅ Same popular dishes (identical menu items)
- ✅ Same deals and promotions
- ✅ Same gallery photos
- ✅ Same social media accounts
- ✅ Same online ordering platform URL

### **Orleans-Specific:**
- 🍽 **Dine-in service** - full restaurant experience
- 📞 **Table reservations** - https://www.eatparea.com/en/book-a-table/
- 🎉 **Catering services** - $18.95/person, 10 guest minimum
- ⏰ **Limited hours** - Closed Mondays, 4-9pm service
- 📍 **Delivery areas** - K1C, K1W, K1E, K4A

### **Express-Specific:**
- 🚀 **Take-out ONLY** - no dine-in, no reservations
- ⚡ **Fast service** - counter ordering, quick pickup
- 🕐 **Extended hours** - Daily 11am-9pm
- 📍 **Different delivery areas** - K1K, K1J, K1B, K1M, K1L
- 💨 **Streamlined experience** - focus on speed and convenience

---

## 🎨 **Design Strategy**

### **Splash Page Design:**
- Clean, modern location selector
- Parea branding at the top
- Two prominent location cards:
  - **Orleans Card:** "Full Restaurant Experience - Dine In, Take Out, Delivery"
  - **Express Card:** "Fast Take-Out - Quick & Convenient"
- Address, phone, and key service highlights for each
- Mobile-first responsive design

### **Location-Specific Adaptations:**

#### **Orleans Site Features:**
- Full Master Guide structure with all sections
- **Reservations section** - prominent booking CTA
- **Catering section** - dedicated page/section
- **Dine-in messaging** - "Join us for dinner" language
- **Full service emphasis** - table service, wine, atmosphere

#### **Express Site Features:**
- Streamlined structure focusing on ordering
- **No reservations section** - remove entirely
- **No catering section** - or minimal mention
- **Take-out messaging** - "Quick pickup" language  
- **Speed emphasis** - fast service, convenient parking
- **Ordering CTA priority** - prominent "Order Now" buttons

---

## 🛠 **Technical Implementation**

### **Phase 1: Project Setup**
1. Create folder structure
2. Set up shared assets and branding
3. Create splash page with location routing

### **Phase 2: Orleans Site** (Full Master Guide Implementation)
- Complete restaurant website following Master Guide
- Add reservations integration
- Add catering section
- Full gallery and about sections

### **Phase 3: Express Site** (Streamlined Version)
- Simplified version focusing on take-out
- Remove dine-in specific sections
- Emphasize speed and convenience
- Streamlined ordering flow

### **Phase 4: Integration & Deployment**
- Set up routing between sites
- Configure deployment for multi-site structure
- Test user flows between locations

---

## 🎯 **Success Metrics**

- **Clear service differentiation** - users understand Orleans vs Express
- **Seamless navigation** - easy movement between locations
- **Optimized user flows** - appropriate CTAs for each location type
- **Proper hero heights** - 60-65vh (not too tall like initial builds)
- **Mobile-first design** - 75%+ traffic optimization
- **Fast loading** - shared assets, optimized images
- **Brand consistency** - cohesive Parea experience across all sites

---

## 📋 **Development Checklist**

### **Splash Page:**
- [ ] Location selector interface
- [ ] Responsive design for mobile/desktop
- [ ] Clear service differentiation
- [ ] Proper routing to location sites

### **Orleans Site:**
- [ ] Full Master Guide implementation
- [ ] Reservations section integration
- [ ] Catering section with contact details
- [ ] Dine-in focused messaging
- [ ] Complete gallery and about sections

### **Express Site:**
- [ ] Streamlined take-out focused design
- [ ] Remove reservations/catering sections
- [ ] Fast ordering emphasis
- [ ] Take-out specific messaging
- [ ] Simplified navigation

### **Integration:**
- [ ] Cross-site navigation working
- [ ] Shared branding consistency
- [ ] Mobile responsive across all sites
- [ ] Deployment configuration complete

---

## 🚀 **Agent Orchestration Strategy**

For this project, we can use **ZEN MCP** with specialized agents:

1. **Splash Agent** - Location selector and routing
2. **Orleans Agent** - Full-service restaurant site
3. **Express Agent** - Take-out focused site  
4. **Integration Agent** - Cross-site coordination and deployment

This approach allows parallel development while maintaining consistency across the multi-location system.

---

*Project Status: Ready for development*  
*Next Step: Begin with splash page creation and site structure setup*
