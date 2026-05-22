# North Recruitment & Financial Dashboard

## 🎯 Project Overview
A comprehensive recruitment and financial analytics dashboard with three main sections:
1. Recruitment Analysis
2. Financial Analysis  
3. HC (Human Capital) Analysis

## 🌐 Live URLs
- **Public URL:** https://3000-inewmd89bmqbut40i27yv-3844e1b6.sandbox.novita.ai
- **Local URL:** http://localhost:3000

## ✨ Current Features

### **Page 1: Recruitment Analysis**
**KPI Tiles (10 tiles in 5×2 grid):**
- Total Requirements, Joined, Offered, Selection, WIP
- On Hold, Cancelled, Ageing Requirements, Ageing Req %, Success Rate

**Time Metrics:**
- Average Time to Offer (ATTO)
- Average Time to Fill (ATTF)

**Charts (6):**
- Month on Month Joiners
- Month on Month Offers
- Month on Month Requirements
- Source of Hire Mix (pie chart)
- Ageing Bracket Analysis
- Gender Diversity (Joined)

**Filters:** Project, PM, Recruiter, Source

### **Page 2: Financial Analysis**
**KPI Tiles (8 tiles):**
- YTD Performance: Total Target, Achievement, Achievement %, Avg CM%
- Quarterly Performance: Q1-Q4 Achievement values

**Charts (5):**
- Target vs Achievement (Monthly)
- CM% Trend (Monthly)
- Achievement % Trend (Monthly)
- Quarter on Quarter Comparison
- Quarter on Quarter CM%

**Filters:** Project, PM only

### **Page 3: HC Analysis**
**KPI Tiles (8 tiles in two grids):**
- Primary: Total Headcount, Active Resources, Total Projects, Avg Utilization
- Secondary: Recruiters, Sourcers, Project Managers, Utilization Sum

**Charts (10+):**
- Grade-wise Distribution (Count)
- Role-wise Distribution (Count)
- Utilization Sum by Grade
- Utilization Sum by Role
- Project-wise Headcount
- PM-wise Headcount
- Project-wise Utilization Sum
- Grade Distribution by Project
- Employment Status Overview
- Utilization Distribution

**Filters:** Project, PM only

## 🎨 Visual Design

### **Modern Flat Design:**
- ✅ Clean white background cards
- ✅ Colored left borders (4px solid) for visual hierarchy
- ✅ Circular icon badges with subtle color tints
- ✅ Professional typography (Inter/SF Pro inspired)
- ✅ Smooth staggered animations on page load
- ✅ Interactive hover effects (lift + shadow + icon rotation)
- ✅ Glassmorphism filters and gradient buttons
- ✅ Responsive grid layouts (5 cols → 4 cols → 2 cols)

### **Color Coding:**
- Blue: Primary metrics (Total, Headcount)
- Green: Success metrics (Joined, Active)
- Indigo: Offered
- Purple: Selection, Projects
- Orange: WIP, Recruiters
- Yellow: On Hold, Utilization
- Red: Ageing, Critical
- Gray: Cancelled
- Teal: Success Rate, Sourcers
- Pink: Ageing %, PMs

## 📊 Data Architecture

### **Data Sources:**
1. **Base Sheet** (~100 records):
   - Recruitment records with stages, dates, candidates
   - Fields: Project, PM, Recruiter, Stage, Status, Dates, Source, Ageing
   
2. **Financial Sheet** (12 months):
   - Monthly targets, achievements, CM%
   - Quarterly aggregations
   
3. **Team Sheet** (~112 employees):
   - Employee status, roles, grades, utilization
   - Project assignments

### **Calculated Metrics:**
- **Ageing %** = (Ageing Requirements / Total Requirements) × 100
- **Success Rate** = (Joined / Total Requirements) × 100
- **Achievement %** = (Actual / Target) × 100
- **Avg CM%** = Average of monthly CM values
- **Utilization Sum** = Sum of all employee utilization values

## 🔧 Tech Stack

- **Backend:** Hono (TypeScript) on Cloudflare Workers
- **Frontend:** Vanilla JavaScript + TailwindCSS
- **Charts:** Chart.js v4.4.0 with DataLabels plugin
- **Data Processing:** SheetJS (XLSX.js)
- **Icons:** Font Awesome 6.4.0
- **Build Tool:** Vite 5.x
- **Deployment:** Wrangler 3.78+
- **Process Manager:** PM2

## 📁 Project Structure

```
webapp/
├── src/
│   └── index.tsx           # Hono backend entry point
├── public/
│   └── dashboard.html      # Main dashboard HTML
├── dist/                   # Build output
├── ecosystem.config.cjs    # PM2 configuration
├── wrangler.jsonc          # Cloudflare config
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 Usage

### **Navigation:**
1. Open the dashboard URL
2. Use sidebar to switch between sections:
   - Recruitment Analysis
   - Financial Analysis
   - HC Analysis
3. Apply filters using dropdowns at the top
4. Click on KPI tiles for drill-through details
5. Reset filters using Reset button

### **Data Upload:**
1. Click "Upload Data" in sidebar or "Upload" button
2. Select Excel/CSV file (must have Base, Financial, Team sheets)
3. Or drag & drop file onto upload area
4. Dashboard auto-updates with new data

### **Interactive Features:**
- Click KPI tiles to see detailed records
- Filter by Project, PM, Recruiter, Source
- View month-over-month trends
- Analyze quarterly performance
- Drill into grade/role distributions

## 📈 Recent Updates (Latest)

### **Tile Design Overhaul:**
- ✅ Changed to modern flat design with white backgrounds
- ✅ Added colored left borders for category identification
- ✅ Updated icon style to circular badges with color tints
- ✅ Implemented 5-column grid for Recruitment (desktop)
- ✅ Arranged HC Analysis in 4+4 tile layout
- ✅ Added staggered slide-in animations
- ✅ Enhanced hover effects with icon rotation
- ✅ Improved responsive breakpoints

### **Previous Updates:**
- ✅ Reordered Recruitment tiles to match requirements
- ✅ Added Ageing Req % and Success Rate tiles
- ✅ Made Financial tiles more compact
- ✅ Added Quarter on Quarter CM% chart
- ✅ Created HC Analysis page with grade/role analysis
- ✅ Limited Financial & HC filters to Project + PM only
- ✅ Removed Conversion Rate from Recruitment page
- ✅ Removed Month-on-Month Headcount from Financial page

## 🎯 Next Steps

### **Optional Enhancements:**
1. Add export to PDF functionality
2. Implement dark mode toggle
3. Add date range picker for historical analysis
4. Create custom dashboard builder
5. Add email alerts for threshold breaches
6. Implement user authentication

### **Deployment:**
```bash
# Deploy to Cloudflare Pages
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name north-recruitment-dashboard

# Push to GitHub
git add .
git commit -m "Tile design update - flat design with left borders"
git push origin main
```

## 📝 Notes

- Dashboard loads with embedded sample data (5 recruitment records, financial data, 112 HC records)
- Real data can be uploaded via Excel file with 3 sheets: Base, Financial, Team
- All calculations are done client-side in real-time
- Charts update dynamically based on filters
- Mobile-responsive with hamburger menu for small screens
- No backend data persistence (Cloudflare Workers edge deployment)

## 🎨 Design Philosophy

**Modern Enterprise Dashboard:**
- Clean, minimal design inspired by Material Design and Tailwind UI
- Professional color coding for different metric categories
- Subtle animations enhance UX without distraction
- White cards provide excellent readability
- Left borders create clear visual hierarchy
- Circular icon badges are friendly yet professional

## ⚙️ Development Commands

```bash
# Start local development
npm run dev:sandbox

# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy:prod

# View logs
pm2 logs webapp --nostream

# Restart service
pm2 restart webapp
```

---

**Last Updated:** March 5, 2026
**Status:** ✅ Active and Production-Ready
**Version:** 3.0 (Flat Design Update)
