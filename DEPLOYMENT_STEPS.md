# Vercel Deployment Instructions

Deploying **The Above Mindset** portfolio to Vercel takes only a few minutes. Everything is pre-configured.

### Step 1: Push code to GitHub
Make sure all your latest changes are pushed to your GitHub repository (already initialized as `the-above-mindset-portfolio`).

### Step 2: Import into Vercel
1. Go to [vercel.com](https://vercel.com/) and log in.
2. Click **Add New...** and select **Project**.
3. Locate your `the-above-mindset-portfolio` repository in the GitHub import list and click **Import**.

### Step 3: Configure Project
1. **Framework Preset**: Vercel will auto-detect **Next.js**. Leave it as is.
2. **Root Directory**: Leave as `./`
3. **Build and Output Settings**: 
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
4. **Environment Variables**:
   - If you are currently using Supabase, expand the Environment Variables section and add:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - *Note: If you haven't enabled Supabase yet, you can skip this. The app won't break.*

### Step 4: Deploy
Click the **Deploy** button. Vercel will build the project (this takes about 1-2 minutes). Once finished, you will see a preview and get a live `your-project.vercel.app` URL.

### Step 5: Add a Custom Domain (Optional)
1. Go to your project dashboard on Vercel.
2. Click on **Settings** in the top navigation.
3. Select **Domains** from the left sidebar.
4. Enter your custom domain (e.g., `theabovemindset.in`) and click **Add**.
5. Follow the instructions provided by Vercel to configure your DNS records (usually adding an A record or CNAME in your domain registrar like GoDaddy or Namecheap).
