# Roma Norte Host — Cloudflare Pages Deployment Guide

## What You Have
A complete 5-page static website ready to deploy:
- index.html        (Homepage)
- services.html     (Services & Pricing)
- results.html      (Track Record)
- guide.html        (Roma Norte Guide)
- contact.html      (Lead Capture Form)
- css/style.css     (All styles)
- js/main.js        (Interactions)
- llms.txt          (AI agent discoverability)
- ai-context.json   (Machine-readable data)
- robots.txt        (Crawler permissions)
- sitemap.xml       (Search engine map)
- _headers          (Cloudflare security headers)
- _redirects        (Cloudflare URL rules)

---

## STEP 1 — Create a GitHub Repository

1. Go to https://github.com and sign in (or create a free account)
2. Click "New repository"
3. Name it: romanortehost
4. Set to Public (Cloudflare Pages requires this on free plan)
5. Click "Create repository"
6. Upload ALL the files from this folder to the repository
   - Drag & drop files into the GitHub interface, OR
   - Use GitHub Desktop app (easier for non-developers)

---

## STEP 2 — Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com and sign in (free account)
2. Click "Pages" in the left sidebar
3. Click "Create a project"
4. Click "Connect to Git"
5. Authorize Cloudflare to access your GitHub account
6. Select your "romanortehost" repository
7. Configure build settings:
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: / (root)
8. Click "Save and Deploy"

Your site will be live at:
  https://romanortehost.pages.dev

---

## STEP 3 — Connect Your Custom Domain

1. Buy domain: romanortehost.mx (at namecheap.com or godaddy.mx)
   Estimated cost: ~$15-20 USD/year for .mx domain

2. In Cloudflare Pages → your project → "Custom Domains"
3. Click "Set up a custom domain"
4. Enter: romanortehost.mx
5. Cloudflare will show you DNS records to add

6. In your domain registrar (Namecheap/GoDaddy):
   - Find DNS settings
   - Add the CNAME record Cloudflare shows you
   - OR change nameservers to Cloudflare's (easier, gives you free CDN)

7. Wait 5-30 minutes for DNS to propagate
8. SSL certificate is automatic — HTTPS enabled at no cost

---

## STEP 4 — Connect the Contact Form

The contact form currently shows a success message without actually sending data.
To make it send real emails, use Formspree (free for 50 submissions/month):

1. Go to https://formspree.io and create a free account
2. Create a new form, copy the form ID (looks like: xpzvwqlk)
3. Open contact.html and find this line:
   // fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(this) })
4. Replace YOUR_ID with your Formspree form ID
5. Uncomment the line (remove the //)
6. Commit and push to GitHub — Cloudflare deploys automatically

---

## STEP 5 — Submit to Google

1. Go to https://search.google.com/search-console
2. Add property: romanortehost.mx
3. Verify ownership (Cloudflare makes this easy — DNS TXT record method)
4. Submit sitemap: https://romanortehost.mx/sitemap.xml
5. Request indexing for each page

---

## STEP 6 — Test AI Discoverability

After deployment, verify AI agents can read your site:

Test llms.txt:
  curl https://romanortehost.mx/llms.txt

Test ai-context.json:
  curl https://romanortehost.mx/ai-context.json

Test robots.txt:
  curl https://romanortehost.mx/robots.txt

All three should return content (not 404 errors).

---

## Ongoing Updates

Every time you push changes to GitHub, Cloudflare Pages auto-deploys.
No manual uploads needed after initial setup.

Deployment time: ~30-60 seconds per change.

---

## Costs Summary

| Item                    | Cost         |
|-------------------------|--------------|
| Cloudflare Pages        | FREE         |
| Cloudflare CDN & SSL    | FREE         |
| GitHub (public repo)    | FREE         |
| Formspree (50 msgs/mo)  | FREE         |
| romanortehost.mx domain | ~$15-20/year |
| TOTAL                   | ~$15-20/year |

---

## Support

If you get stuck on any step, share the error message and I'll help you fix it.
