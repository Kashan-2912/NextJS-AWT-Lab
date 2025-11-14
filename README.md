# 🚀 Next.js Routing Patterns - Complete Guide

A comprehensive, interactive demonstration of **all Next.js App Router features** built for learning and reference. Explore nested routes, dynamic segments, parallel routes, intercepted routes, and more!

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 📚 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Routing Patterns](#-routing-patterns)
  - [1. Nested Routes](#1--nested-routes)
  - [2. Dynamic Routes](#2--dynamic-routes)
  - [3. Route Groups](#3--route-groups)
  - [4. Private Folders](#4--private-folders)
  - [5. Parallel Routes](#5--parallel-routes)
  - [6. Intercepted Routes](#6--intercepted-routes)
  - [7. Special Files](#7--special-files)
  - [8. Search Params](#8--search-params)
- [Learning Resources](#-learning-resources)

---

## ✨ Features

This project demonstrates **every major routing pattern** in Next.js 15+:

- 🗂️ **Nested Routes** - Hierarchical routing with shared layouts
- 🔀 **Dynamic Routes** - `[slug]`, `[...slug]`, and `[[...slug]]` patterns
- 📁 **Route Groups** - Organize routes without affecting URLs
- 🔒 **Private Folders** - Non-routable folders for components
- ⚡ **Parallel Routes** - Render multiple pages simultaneously
- 🎯 **Intercepted Routes** - Modal patterns with URL preservation
- 🎨 **Special Files** - loading, error, template, not-found
- 🔍 **Search Params** - Query string handling with PageProps
- 🚄 **Link Prefetching** - Automatic route prefetching for speed

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to the project directory
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to see the interactive demo! 🎉

### Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
my-app/
├── src/
│   └── app/
│       ├── page.js                    # 🏠 Homepage with navigation
│       ├── layout.js                  # Root layout
│       ├── globals.css                # Global styles
│       │
│       ├── blog/                      # 🗂️ NESTED ROUTES
│       │   ├── layout.js              # Shared blog layout
│       │   ├── page.js                # Blog list page
│       │   ├── [slug]/                # Dynamic blog post
│       │   │   └── page.js
│       │   └── _components/           # 🔒 PRIVATE FOLDER
│       │       └── PostCard.js
│       │
│       ├── products/                  # 🔀 DYNAMIC: [slug]
│       │   └── [slug]/
│       │       └── page.js
│       │
│       ├── docs/                      # 🔀 DYNAMIC: [...slug]
│       │   └── [...slug]/
│       │       └── page.js
│       │
│       ├── wiki/                      # 🔀 DYNAMIC: [[...slug]]
│       │   └── [[...slug]]/
│       │       └── page.js
│       │
│       ├── (dashboard)/               # 📁 ROUTE GROUP
│       │   ├── layout.js              # Shared dashboard layout
│       │   └── dashboard/
│       │       ├── page.js
│       │       ├── analytics/
│       │       │   └── page.js
│       │       └── settings/
│       │           └── page.js
│       │
│       ├── admin/                     # ⚡ PARALLEL ROUTES
│       │   ├── layout.js              # Receives @analytics & @team
│       │   ├── page.js
│       │   ├── @analytics/
│       │   │   ├── page.js
│       │   │   └── default.js
│       │   └── @team/
│       │       ├── page.js
│       │       └── default.js
│       │
│       ├── gallery/                   # 🎯 INTERCEPTED ROUTES
│       │   ├── page.js                # Photo grid
│       │   └── (..)photos/[id]/       # Modal intercept
│       │       └── page.js
│       │
│       ├── photos/                    # Full page views
│       │   └── [id]/
│       │       └── page.js
│       │
│       ├── special/                   # 🎨 SPECIAL FILES
│       │   ├── page.js
│       │   ├── loading.js             # Loading UI
│       │   ├── error.js               # Error boundary
│       │   ├── template.js            # Re-renders on nav
│       │   ├── not-found.js           # Custom 404
│       │   └── _components/
│       │       └── ErrorTrigger.js
│       │
│       └── search/                    # 🔍 SEARCH PARAMS
│           └── page.js                # PageProps demo
│
├── package.json
└── README.md
```

---

## 🎓 Routing Patterns

### 1. 🗂️ Nested Routes

**Location:** `/blog`

Nested routes create hierarchical page structures with shared layouts.

```
app/
├── blog/
│   ├── layout.js       ← Wraps all /blog routes
│   ├── page.js         ← /blog
│   └── [slug]/
│       └── page.js     ← /blog/post-1
```

**Features:**
- ✅ Shared layout persists across child routes
- ✅ Navigation bar remains visible
- ✅ Nested URL structure: `/blog` → `/blog/post-1`

**Try it:**
- Visit `/blog` to see the list
- Click any post to see the nested route
- Notice the layout persists!

---

### 2. 🔀 Dynamic Routes

Dynamic segments capture URL parameters.

#### a) **[slug]** - Single Dynamic Segment

**Location:** `/products/[slug]`

```
app/products/[slug]/page.js
```

Matches: `/products/laptop`, `/products/keyboard`
Does NOT match: `/products` (needs the segment)

**Access params:**
```javascript
export default async function Page({ params }) {
  const { slug } = await params;
  // slug = "laptop"
}
```

---

#### b) **[...slug]** - Catch-all Segments

**Location:** `/docs/[...slug]`

```
app/docs/[...slug]/page.js
```

Matches: `/docs/a`, `/docs/a/b`, `/docs/a/b/c`
Does NOT match: `/docs` (requires at least one segment)

**Access params:**
```javascript
export default async function Page({ params }) {
  const { slug } = await params;
  // slug = ["a", "b", "c"] (array)
}
```

---

#### c) **[[...slug]]** - Optional Catch-all

**Location:** `/wiki/[[...slug]]`

```
app/wiki/[[...slug]]/page.js
```

Matches: `/wiki`, `/wiki/nextjs`, `/wiki/react/hooks`
✅ Also matches the base route!

**Access params:**
```javascript
export default async function Page({ params }) {
  const { slug } = await params;
  // slug = undefined (at /wiki)
  // slug = ["nextjs"] (at /wiki/nextjs)
}
```

---

### 3. 📁 Route Groups

**Location:** `/(dashboard)/dashboard`

Route groups organize routes without affecting the URL path.

```
app/
└── (dashboard)/           ← NOT in URL!
    ├── layout.js          ← Shared layout
    └── dashboard/
        ├── page.js        → /dashboard
        ├── analytics/     → /dashboard/analytics
        └── settings/      → /dashboard/settings
```

**Features:**
- ✅ Folder name `(dashboard)` is excluded from URL
- ✅ All routes share the same layout
- ✅ Perfect for organizing related routes
- ✅ Can have multiple route groups with different layouts

**Benefits:**
- Organize by feature or section
- Share layouts without affecting URLs
- Cleaner project structure

---

### 4. 🔒 Private Folders

**Location:** `/blog/_components`

Folders starting with underscore are NOT routable.

```
app/
└── blog/
    ├── page.js
    └── _components/       ← Private!
        └── PostCard.js    ← Not accessible as route
```

**Features:**
- ✅ Start folder name with `_`
- ✅ Not accessible via URL
- ✅ Perfect for components, utilities, helpers
- ✅ Keeps routes clean and organized

**Try it:**
- Visit `/blog/_components` → 404 Error! ❌
- Components are used internally but not routable

---

### 5. ⚡ Parallel Routes

**Location:** `/admin`

Render multiple pages simultaneously using named slots.

```
app/
└── admin/
    ├── layout.js          ← Receives slots as props
    ├── page.js            ← Default children
    ├── @analytics/
    │   ├── page.js        ← Analytics slot
    │   └── default.js
    └── @team/
        ├── page.js        ← Team slot
        └── default.js
```

**Layout receives slots:**
```javascript
export default function Layout({ children, analytics, team }) {
  return (
    <>
      {children}
      <div>{analytics}</div>
      <div>{team}</div>
    </>
  );
}
```

**Features:**
- ✅ Render multiple pages at once
- ✅ Independent loading states
- ✅ Perfect for dashboards
- ✅ Each slot can have its own error/loading states

**Use Cases:**
- Dashboard with multiple widgets
- Split views
- Conditional rendering based on user type

---

### 6. 🎯 Intercepted Routes

**Location:** `/gallery` + `/photos`

Show a route in a different context (like a modal) while preserving the URL.

```
app/
├── gallery/
│   ├── page.js                # Photo grid
│   └── (..)photos/[id]/       # Intercept pattern
│       └── page.js            # Shows as modal
└── photos/
    └── [id]/
        └── page.js            # Full page
```

**Intercept Patterns:**
- `(.)` - Same level
- `(..)` - One level up (parent)
- `(..)(..)` - Two levels up
- `(...)` - From root

**Behavior:**
- Click from `/gallery` → Modal appears ✅
- Direct visit to `/photos/1` → Full page ✅
- Refresh in modal → Shows full page ✅

**Features:**
- ✅ Keep context while showing details
- ✅ Perfect for modals, slideshows, overlays
- ✅ Shareable URLs still work
- ✅ Browser back button closes modal

---

### 7. 🎨 Special Files

**Location:** `/special`

Next.js provides special files for common UI patterns.

#### **loading.js** - Loading UI
```javascript
export default function Loading() {
  return <div>Loading...</div>;
}
```
- ✅ Automatic loading state with Suspense
- ✅ Shows while page is fetching
- ✅ Wraps page automatically

---

#### **error.js** - Error Boundary
```javascript
"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Error: {error.message}</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```
- ✅ Catches runtime errors
- ✅ Must be a Client Component
- ✅ Provides reset function
- ✅ Isolates errors to segment

---

#### **template.js** - Re-rendering Wrapper
```javascript
export default function Template({ children }) {
  return <div>{children}</div>;
}
```
- ✅ Like layout but re-renders on navigation
- ✅ Useful for animations, analytics
- ✅ Fresh instance on each navigation

**Difference from layout.js:**
- `layout.js` → Persists state across navigation
- `template.js` → Creates new instance each time

---

#### **not-found.js** - Custom 404
```javascript
export default function NotFound() {
  return <div>Page not found</div>;
}
```
- ✅ Custom 404 for the segment
- ✅ Triggered by `notFound()` function
- ✅ Better UX than default error

---

### 8. 🔍 Search Params

**Location:** `/search`

Access URL query parameters using PageProps.

```javascript
export default async function SearchPage({ searchParams }) {
  const params = await searchParams; // Next.js 15+
  const query = params.q;
  const category = params.category;

  return <div>Search: {query}</div>;
}
```

**Features:**
- ✅ Type-safe with PageProps helper
- ✅ searchParams is a Promise (must await)
- ✅ Perfect for filters, pagination, search
- ✅ Changes trigger re-renders automatically

**Example URLs:**
- `/search?q=nextjs`
- `/search?q=routing&category=docs&page=2`

---

## 🔗 Link Prefetching

All examples use Next.js `<Link>` component with automatic prefetching.

```javascript
import Link from "next/link";

<Link href="/about" prefetch={true}>
  About
</Link>
```

**How it works:**
- ✅ When link enters viewport → Prefetch begins
- ✅ Route data loaded in background
- ✅ Instant navigation on click
- ✅ Faster perceived performance

**Default behavior:**
- Production: `prefetch={true}` by default
- Development: `prefetch={false}` by default

---

## 📖 Learning Resources

### Official Documentation
- 📘 [Next.js Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)
- 📘 [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- 📘 [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- 📘 [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)

### Key Concepts
- 🎯 **File-system based routing** - Folders = routes
- 🎯 **Server Components by default** - Async data fetching
- 🎯 **Layouts** - Shared UI that preserves state
- 🎯 **Templates** - Shared UI that re-renders
- 🎯 **Special Files** - Convention-based features

---

## 🛠️ Tech Stack

- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - Latest React with Server Components
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **JavaScript** - No TypeScript (for simplicity)

---

## 💡 Tips & Best Practices

### ✅ DO:
- Use layouts for shared UI (nav, footer)
- Use route groups for organization
- Use loading.js for better UX
- Use error.js to handle failures gracefully
- Use intercepted routes for modals
- Use parallel routes for dashboards

### ❌ DON'T:
- Don't use route groups to affect URLs (they don't)
- Don't forget to await params/searchParams (Next.js 15+)
- Don't put business logic in layouts (use pages)
- Don't forget default.js for parallel routes

---

## 🎯 Use Cases

| Pattern | Best For |
|---------|----------|
| Nested Routes | Blogs, documentation, hierarchical content |
| Dynamic Routes | Product pages, user profiles, CMS content |
| Route Groups | Feature-based organization, multiple layouts |
| Parallel Routes | Dashboards, split views, conditional UI |
| Intercepted Routes | Modals, galleries, quick previews |
| Loading States | Better UX during data fetching |
| Error Boundaries | Graceful error handling |

---

## 🚦 Getting Started Guide

1. **Navigate to project**
   ```bash
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

5. **Explore patterns**
   - Click through each routing pattern
   - Read the explanations on each page
   - Check the file structure
   - Experiment with URLs

---

## 📝 License

This project is for educational purposes. Feel free to use, modify, and learn from it!

---

## 🙏 Acknowledgments

Built with ❤️ to help developers understand Next.js routing patterns.

Special thanks to:
- Vercel team for Next.js
- Next.js community for excellent documentation
- Tailwind CSS for beautiful styling

---

## 📧 Questions?

- **Next.js Docs**: https://nextjs.org/docs
- **Next.js Discord**: https://discord.gg/nextjs
- **GitHub Discussions**: https://github.com/vercel/next.js/discussions

---

### 🌟 Happy Routing! 🚀

Explore, learn, and build amazing Next.js applications!
