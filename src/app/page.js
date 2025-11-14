import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Next.js Routing Patterns
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Comprehensive examples of Next.js App Router features
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Nested Routes */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              1. Nested Routes
            </h2>
            <div className="space-y-2">
              <Link
                href="/blog"
                className="block text-blue-600 hover:underline dark:text-blue-400"
                prefetch={true}
              >
                /blog - Parent route
              </Link>
              <Link
                href="/blog/post-1"
                className="block text-blue-600 hover:underline dark:text-blue-400 ml-4"
                prefetch={true}
              >
                /blog/post-1 - Nested child
              </Link>
            </div>
          </section>

          {/* Dynamic Routes */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              2. Dynamic Routes
            </h2>
            <div className="space-y-2">
              <Link
                href="/products/laptop"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /products/laptop - [slug]
              </Link>
              <Link
                href="/docs/api/routes/handlers"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /docs/... - [...slug]
              </Link>
              <Link
                href="/wiki"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /wiki - [[...slug]]
              </Link>
            </div>
          </section>

          {/* Route Groups */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              3. Route Groups
            </h2>
            <div className="space-y-2">
              <Link
                href="/dashboard"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /dashboard - (dashboard) group
              </Link>
              <Link
                href="/dashboard/analytics"
                className="block text-blue-600 hover:underline dark:text-blue-400 ml-4"
              >
                /dashboard/analytics
              </Link>
              <Link
                href="/dashboard/settings"
                className="block text-blue-600 hover:underline dark:text-blue-400 ml-4"
              >
                /dashboard/settings
              </Link>
            </div>
          </section>

          {/* Parallel Routes */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              4. Parallel Routes
            </h2>
            <div className="space-y-2">
              <Link
                href="/admin"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /admin - @analytics + @team slots
              </Link>
            </div>
          </section>

          {/* Intercepted Routes */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              5. Intercepted Routes
            </h2>
            <div className="space-y-2">
              <Link
                href="/gallery"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /gallery - Photo modal example
              </Link>
            </div>
          </section>

          {/* Special Files */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              6. Special Files
            </h2>
            <div className="space-y-2">
              <Link
                href="/special"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /special - loading, error, template
              </Link>
              <Link
                href="/special/missing"
                className="block text-blue-600 hover:underline dark:text-blue-400 ml-4"
              >
                /special/missing - not-found
              </Link>
            </div>
          </section>

          {/* Search Params */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              7. Search Params
            </h2>
            <div className="space-y-2">
              <Link
                href="/search?q=nextjs&category=routing"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /search?q=nextjs&category=routing
              </Link>
            </div>
          </section>

          {/* Private Folders */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              8. Private Folders
            </h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                _components folder - not routable
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Note: Link Prefetching
          </h3>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            All Links use Next.js automatic prefetching. When links appear in the viewport,
            Next.js prefetches the routes in the background for faster navigation.
          </p>
        </div>
      </main>
    </div>
  );
}
