# Supabase Setup Guide

This project is pre-configured to easily add Supabase for authentication, database, or storage.

## 1. Environment Variables
Add the following to your `.env.local` file (and in the Vercel dashboard when deploying):

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

## 2. Install Dependencies
When you are ready to activate Supabase, install the required packages:

```bash
npm install @supabase/supabase-js @supabase/ssr
```

## 3. Activate the Clients
Uncomment the code inside these two files:

- `src/lib/supabase/client.ts` — Use this when fetching data from Client Components (`"use client"`).
- `src/lib/supabase/server.ts` — Use this when fetching data from Server Components, Route Handlers, or Server Actions.

## Example Usage (Server Component)

```tsx
import { createClient } from '@/lib/supabase/server';

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.from('your_table').select('*');
  
  // ...
}
```
