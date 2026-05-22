# How to Edit Your Dashboard

## Quick Start

Your dashboard is now live at:
**https://3000-ihrvdiahppyvb7fx34dg0-5634da27.sandbox.novita.ai**

## File Locations

### Main Dashboard File (Editable)
```
/home/user/webapp/public/dashboard.html
```
This is your **active dashboard** - all changes you make here will be deployed.

### Backup Files (For Reference)
```
/home/user/webapp/public/dashboard_uploaded.html         ← Original upload
/home/user/webapp/public/dashboard_previous_version.html ← Previous working version
/home/user/webapp/public/dashboard_backup*.html          ← Historical versions
```

## How to Make Changes

### Step 1: Read the Dashboard File
```
I can help you read the file:
"Read /home/user/webapp/public/dashboard.html starting from line X"
```

### Step 2: Make Your Changes
Tell me what you want to change, for example:
- "Change the title to [new title]"
- "Update the background color to [color]"
- "Add a new tile for [metric]"
- "Modify the chart colors"
- "Change filter options"

### Step 3: I'll Update the File
I'll use the Edit tool to make precise changes to the HTML file.

### Step 4: Rebuild & Deploy
```bash
# Build the updated dashboard
cd /home/user/webapp && npm run build

# Restart the service
fuser -k 3000/tcp 2>/dev/null || true
pm2 restart webapp

# Or restart from scratch
pm2 delete all
pm2 start ecosystem.config.cjs
```

### Step 5: View Your Changes
Visit: https://3000-ihrvdiahppyvb7fx34dg0-5634da27.sandbox.novita.ai

## Common Edit Scenarios

### 1. Change Dashboard Title
**Current**: "North Recruitment & Financial Dashboard"
**Location**: Line 6 (in `<title>` tag) and in the HTML body

**How to request**: "Change the dashboard title to 'My New Title'"

### 2. Modify Background Color
**Current**: Dark gradient (slate/gray)
**Location**: CSS section, `body` style

**How to request**: "Change background to blue gradient" or "Make background lighter"

### 3. Update Tile Styling
**Current**: 160px min-width, professional design
**Location**: CSS classes `.kpi-card`, `.kpi-grid`

**How to request**: "Make tiles bigger" or "Change tile colors to green theme"

### 4. Add New KPI Tiles
**Location**: HTML sections with class `.kpi-grid`

**How to request**: "Add a new tile for [metric name] on [page name]"

### 5. Modify Charts
**Current**: Chart.js charts in various sections
**Location**: JavaScript functions like `barChart()`, `doughnutChart()`, etc.

**How to request**: "Change chart colors" or "Add a new chart for [data]"

### 6. Update Filter Options
**Location**: JavaScript functions `populateFilters()`, `applyFilters()`

**How to request**: "Add a new filter for [field]" or "Change filter behavior"

### 7. Modify Data
**Current**: Embedded data constants (EMBEDDED_DATA, HC_DATA, FINANCIAL_DATA)
**Location**: JavaScript section with data arrays

**How to request**: "Update the financial data" or "Add new team members"

## Example Change Requests

### Simple Changes
- "Change the title to 'ABC Company Dashboard'"
- "Make the background color lighter"
- "Change tile width to 180px"

### Medium Changes
- "Add a new tile showing 'Total Interviews' on Recruitment page"
- "Change the color scheme to blue and orange"
- "Add a new chart showing monthly trends"

### Complex Changes
- "Add a new section called 'Performance Analytics'"
- "Integrate data from a new Excel sheet"
- "Add export to PDF functionality"

## File Structure Reference

```
dashboard.html structure:
├── <head>
│   ├── Title
│   ├── CSS Libraries (Tailwind, FontAwesome)
│   ├── JS Libraries (Chart.js, SheetJS)
│   └── <style> (Custom CSS)
├── <body>
│   ├── Sidebar Navigation
│   ├── Top Bar
│   ├── Filter Section
│   ├── Section: Recruitment Analysis
│   │   ├── KPI Tiles
│   │   ├── Time Metrics
│   │   └── Charts
│   ├── Section: Financial Analysis
│   │   ├── KPI Tiles
│   │   └── Charts
│   └── Section: HC Analysis
│       ├── KPI Tiles
│       └── Charts
└── <script>
    ├── Embedded Data (EMBEDDED_DATA, HC_DATA, FINANCIAL_DATA)
    ├── Chart Functions
    ├── Filter Functions
    ├── Render Functions
    └── Event Handlers
```

## Current Dashboard Features

### Pages
1. **Recruitment Analysis** - 10 KPI tiles, 6 charts
2. **Financial Analysis** - 8 KPI tiles, 5 charts
3. **HC Analysis** - 10 KPI tiles, 6 charts

### Filters
- **Recruitment**: Project, PM, Recruiter, Source (4 filters)
- **Financial**: Project, PM (2 filters)
- **HC Analysis**: Project, PM (2 filters)

### Data
- **Recruitment**: 100 records from Base sheet
- **Financial**: 12 months MSIL data
- **HC**: 112 employees across 10 projects

## Tips for Editing

1. **Always backup before major changes** (I can do this for you)
2. **Test changes incrementally** - make small changes and test
3. **Keep backups** - multiple versions are saved automatically
4. **Use precise descriptions** when requesting changes
5. **Check the public URL** after each rebuild

## Need Help?

Just ask! I can:
- Read any part of the dashboard file
- Make precise edits
- Test changes
- Explain any section
- Help debug issues
- Create new features

**Example**: "Show me the Recruitment Analysis tile HTML section" or "I want to add a new chart showing XYZ data"

---

## Quick Commands Reference

```bash
# View dashboard structure
ls -lh /home/user/webapp/public/dashboard*.html

# Check service status
pm2 list

# View logs
pm2 logs webapp --nostream

# Rebuild after changes
cd /home/user/webapp && npm run build

# Restart service
pm2 restart webapp

# View public URL
# https://3000-ihrvdiahppyvb7fx34dg0-5634da27.sandbox.novita.ai
```

---

Ready to make changes? Just tell me what you'd like to update! 🚀
