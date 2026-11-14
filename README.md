This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Sample shopping flow

The storefront currently uses a temporary sample catalog. Cart contents are stored in the visitor's browser. Checkout prepares an order message and opens WhatsApp; the customer must press **Send** in WhatsApp to submit it.

To route the message directly to the business, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER` to the business number with country code and digits only (for India, start with `91`). If it is blank, WhatsApp opens with the message ready so the customer can choose the recipient.

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before deploying. This value is used for canonical metadata and `sitemap.xml`; the sitemap lists the homepage, shop and product pages. Cart and checkout are excluded from crawlers.

## Google Cloud deployment

This Next.js app is prepared for Cloud Run source deployment. Install and authenticate the Google Cloud CLI, select a Google Cloud project, then deploy from the repository root:

```sh
gcloud run deploy vedshashe-jewellery --source . --region asia-south1 --allow-unauthenticated
```

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS site URL during the Cloud Run build and at runtime so canonical metadata and the sitemap use the public domain. Set `NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER` as a build environment variable if orders should open directly to the business. These values are public storefront configuration; never put service keys in them. The `.gcloudignore` excludes local environment files and `.sf/` metadata from deployment uploads.

## No-billing sample deployment on Cloudflare Pages

The current sample storefront uses static sample products, browser-local cart storage and WhatsApp checkout. It can be exported as static files without a Google Cloud billing account. Cloudflare Pages sets `CF_PAGES=1` during its build, which enables static export automatically. For a local static build, run:

```sh
CLOUDFLARE_PAGES_EXPORT=1 npx next build
```

This creates the `out/` folder. In Cloudflare Pages, use `npx next build` as the build command and `out` as the output directory; no custom export flag is needed there. Set `NEXT_PUBLIC_SITE_URL` to the final `pages.dev` URL and `NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER` to the business number if checkout should open directly to the business. A Git-connected Pages project needs this repository in a Git host; alternatively, upload the generated `out/` static files directly through Cloudflare.

This static sample does not persist orders to Supabase. Add a server-backed host and connected database when order persistence or the admin dashboard is needed.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
