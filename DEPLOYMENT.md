# Vercel Deployment Instructions for INTERNITY LANDS

This project is ready for deployment on Vercel.

## Steps to Deploy

1. **Push your code to GitHub** (or GitLab/Bitbucket).
2. **Go to [vercel.com](https://vercel.com/)** and sign in.
3. **Import your repository** and select the `main` branch.
4. Vercel will auto-detect Next.js and Tailwind CSS.
5. No custom build command is needed (default: `next build`).
6. No custom output directory is needed (default: `.next`).
7. The included `vercel.json` ensures correct routing and build.
8. Set any required environment variables in the Vercel dashboard.
9. Click **Deploy**.

---

### Notes
- All static assets (images, video) should be in the `public/` directory.
- If you use environment variables (API keys, etc.), add them in Vercel's dashboard under Project Settings > Environment Variables.
- For custom domains, add them in Vercel after deployment.
- For analytics, enable Vercel Analytics in the dashboard.

---

**This project is now ready for Vercel. No further configuration is required.**
