# Deploying to GitHub + Cloudflare Pages

Step-by-step guide to get this dashboard live on the internet for free.

---

## Step 1 — Push to GitHub

```bash
# Inside the webapp/ folder
git init
git add .
git commit -m "Initial commit"

# Replace YOUR_USERNAME with your GitHub username
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/north-dashboard.git
git push -u origin main
```

If you don't have a repo yet:
1. Go to https://github.com/new
2. Repo name: `north-dashboard` (or anything you want)
3. Leave it empty (no README, no .gitignore, no license — we have them already)
4. Click **Create repository**
5. Run the commands above

---

## Step 2 — Deploy on Cloudflare Pages (recommended — free, fast, global)

### Option A — Connect GitHub (auto-deploy on every push) ✅ Recommended

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Authorize Cloudflare to access your GitHub account
3. Select the `north-dashboard` repo
4. Configure the build:

   | Setting                | Value             |
   | ---------------------- | ----------------- |
   | Framework preset       | **None**          |
   | Build command          | `npm run build`   |
   | Build output directory | `dist`            |
   | Root directory         | *(leave empty)*   |
   | Node version           | `20` *(set in environment variables: `NODE_VERSION` = `20`)* |

5. Click **Save and Deploy**
6. Wait ~1–2 minutes. You'll get a URL like `https://north-dashboard.pages.dev`

Every `git push` after this will auto-deploy. Done.

### Option B — Deploy from your machine (no GitHub auto-deploy)

```bash
cd webapp
npm install
npm run build
npx wrangler login          # opens browser, authorize once
npx wrangler pages deploy dist --project-name=north-dashboard
```

---

## Step 3 — Deploy to GitHub Pages instead (alternative — static-only)

Since `dashboard.html` is self-contained (all data + JS embedded, CDNs for libs), you can also host it on GitHub Pages without any build:

1. In your repo on GitHub → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/public`
4. Save

Your site will be at `https://YOUR_USERNAME.github.io/north-dashboard/dashboard.html`

> Note: GitHub Pages won't run the Hono backend (it's static-only). Cloudflare Pages does — pick Cloudflare if you ever want to add server routes.

---

## Step 4 — Custom domain (optional)

On Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**. Cloudflare handles SSL automatically.

---

## Troubleshooting

**Build fails with "command not found: wrangler"** — Cloudflare Pages auto-installs from `package.json`. Make sure `wrangler` is in `devDependencies` (it already is).

**Blank page after deploy** — open browser DevTools → Console. If you see CDN errors, your network may block jsdelivr/tailwindcss. Switch to a local build (ask me).

**"Module not found: hono"** — run `npm install` locally first to generate `package-lock.json`, then commit it (it's already included in this repo).

**Password screen forever** — see `dashboard.html` line ~3906 for the `AUTH_PASSWORDS` object. Default passwords:
- `Abhay@2026` → admin (full access)
- `North@0326` → user (recruitment only)

⚠️ These passwords are visible in the page source. Change them before going public.
