# Deployment Guide for chulbuji.com

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```
Visit: http://localhost:4321

### Build for Production
```bash
npm run build
npm run preview  # Preview production build
```

## 📦 Deployment Options

### Option 1: Automatic Deployment (GitHub Actions) ✅ Recommended

1. **Set up Cloudflare secrets in GitHub:**
   - Go to: `Settings` → `Secrets and variables` → `Actions`
   - Add secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy Astro version"
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - Install dependencies
   - Build the Astro site
   - Deploy to Cloudflare Pages

### Option 2: Manual Deployment via Wrangler

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run build
wrangler pages deploy dist --project-name chulbuji-com
```

### Option 3: Cloudflare Dashboard

1. Go to Cloudflare Pages dashboard
2. Connect GitHub repository
3. Configure:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 20

## 🔧 Configuration

### Astro Config
See `astro.config.mjs`:
- Output: Static
- Site URL: https://chulbuji.com
- Sitemap: Auto-generated
- i18n: Korean (default), English

### Environment Variables
No environment variables required for static build.

## 🌐 Custom Domain

1. In Cloudflare Pages → Custom domains
2. Add: `chulbuji.com`
3. DNS records will be auto-configured

## 📊 Build Info

- **Pages**: 45
- **Build time**: ~12 seconds
- **Output size**: Check `dist/` folder
- **Languages**: Korean (ko), English (en)

## ✅ Pre-deployment Checklist

- [ ] Build succeeds locally (`npm run build`)
- [ ] Preview looks correct (`npm run preview`)
- [ ] All pages accessible
- [ ] Sitemap generated (`dist/sitemap-index.xml`)
- [ ] 404 page works
- [ ] Both languages (KO/EN) work
- [ ] Mobile responsive
- [ ] SEO metadata present

## 🔄 Rollback Plan

If issues occur, legacy files are backed up in `_legacy_backup/`:
```bash
# Emergency rollback (not recommended)
cp -r _legacy_backup/* .
git add .
git commit -m "Rollback to legacy version"
git push
```

## 📝 Post-deployment

- [ ] Test all pages on production
- [ ] Check Google Analytics (if configured)
- [ ] Test both languages
- [ ] Verify sitemap: https://chulbuji.com/sitemap-index.xml
- [ ] Submit sitemap to Google Search Console

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist .astro
npm install
npm run build
```

### Pages not updating
```bash
# Clear Cloudflare cache via dashboard
# Or wait 5-10 minutes for propagation
```

### 404 errors
- Check `astro.config.mjs` trailingSlash setting
- Verify routes in `src/pages/`

## 📞 Support

Issues? Check:
- Build logs in GitHub Actions
- Cloudflare Pages deployment logs
- Local build with `npm run build`
