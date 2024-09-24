# Contentstack Next.js Demo

This project demonstrates how to use Contentstack with Next.js 13+ and the App Router to create a simple blog post listing application.

## Project Structure

```
contentstack-nextjs-demo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── blog-posts/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── BlogPostList.tsx
│   ├── lib/
│   │   └── contentstack.ts
│   ├── models/
│   │   └── BlogPost.ts
│   └── styles/
│       └── globals.css
├── .env.local
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/DHRUVvkdv/contentstack-nextjs-demo.git
   cd contentstack-nextjs-demo
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with your Contentstack credentials:
   ```
   CONTENTSTACK_API_KEY=your_api_key
   CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
   CONTENTSTACK_ENVIRONMENT=your_environment
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Key Components

- `src/app/page.tsx`: The main page component that renders the BlogPostList.
- `src/components/BlogPostList.tsx`: A client component that fetches and displays blog posts.
- `src/app/api/blog-posts/route.ts`: An API route that fetches blog posts from Contentstack.
- `src/lib/contentstack.ts`: Initializes the Contentstack SDK.
- `src/models/BlogPost.ts`: Defines the TypeScript interface for blog posts.

## How It Works

1. The main page (`page.tsx`) renders the `BlogPostList` component.
2. `BlogPostList` makes a client-side fetch to the `/api/blog-posts` endpoint.
3. The API route uses the Contentstack SDK to fetch blog posts from Contentstack.
4. The fetched posts are returned to the client and rendered in the `BlogPostList` component.
