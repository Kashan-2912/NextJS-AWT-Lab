import Link from "next/link";

// Example: Catch-all segment [...slug]
// Matches /docs/a, /docs/a/b, /docs/a/b/c, etc.
// Does NOT match /docs (requires at least one segment)
export default async function DocsPage({ params }) {
  const { slug } = await params;

  // slug is an array of path segments
  const pathSegments = slug || [];
  const currentPath = pathSegments.join(" > ");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Home
        </Link>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Documentation
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Current Path:
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded font-mono text-sm">
              /{pathSegments.join("/")}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Breadcrumb:
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {currentPath || "docs"}
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Try these paths:
            </h3>
            <div className="space-y-2">
              <Link
                href="/docs/getting-started"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /docs/getting-started
              </Link>
              <Link
                href="/docs/api/routes"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /docs/api/routes
              </Link>
              <Link
                href="/docs/api/routes/handlers"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /docs/api/routes/handlers
              </Link>
              <Link
                href="/docs/advanced/server-components/streaming"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /docs/advanced/server-components/streaming
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">
            Route Pattern: /docs/[...slug]
          </h4>
          <p className="text-sm text-orange-800 dark:text-orange-300 mb-2">
            Slug array: <code className="bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded">
              {JSON.stringify(pathSegments)}
            </code>
          </p>
          <p className="text-sm text-orange-800 dark:text-orange-300 mb-2">
            This is a catch-all segment. It matches one or more path segments.
          </p>
          <p className="text-sm text-orange-800 dark:text-orange-300">
            ✅ Matches: /docs/a, /docs/a/b, /docs/a/b/c
            <br />
            ❌ Does NOT match: /docs (requires at least one segment)
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: ["getting-started"] },
    { slug: ["api", "routes"] },
    { slug: ["api", "routes", "handlers"] },
  ];
}
