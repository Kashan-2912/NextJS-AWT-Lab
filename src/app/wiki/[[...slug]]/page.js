import Link from "next/link";

// Example: Optional catch-all segment [[...slug]]
// Matches /wiki, /wiki/a, /wiki/a/b, /wiki/a/b/c, etc.
// The double brackets make it optional (includes the base route)
export default async function WikiPage({ params }) {
  const { slug } = await params;

  // slug can be undefined if at /wiki, or an array if deeper
  const pathSegments = slug || [];
  const isHomePage = pathSegments.length === 0;

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
            {isHomePage ? "Wiki Home" : "Wiki Article"}
          </h1>

          {isHomePage ? (
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Welcome to the Wiki! This is the base route that matches /wiki with no additional segments.
              </p>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Browse articles:
              </h2>
            </div>
          ) : (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Current Path:
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded font-mono text-sm">
                /wiki/{pathSegments.join("/")}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Article: {pathSegments.join(" > ")}
              </p>
            </div>
          )}

          <div className={isHomePage ? "" : "border-t border-gray-200 dark:border-gray-700 pt-6"}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Try these paths:
            </h3>
            <div className="space-y-2">
              <Link
                href="/wiki"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /wiki (base route)
              </Link>
              <Link
                href="/wiki/nextjs"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /wiki/nextjs
              </Link>
              <Link
                href="/wiki/react/hooks"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /wiki/react/hooks
              </Link>
              <Link
                href="/wiki/javascript/es6/features"
                className="block text-blue-600 hover:underline dark:text-blue-400"
              >
                /wiki/javascript/es6/features
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
          <h4 className="font-semibold text-pink-900 dark:text-pink-200 mb-2">
            Route Pattern: /wiki/[[...slug]]
          </h4>
          <p className="text-sm text-pink-800 dark:text-pink-300 mb-2">
            Slug array: <code className="bg-pink-200 dark:bg-pink-800 px-2 py-1 rounded">
              {slug ? JSON.stringify(pathSegments) : "undefined (at base route)"}
            </code>
          </p>
          <p className="text-sm text-pink-800 dark:text-pink-300 mb-2">
            This is an optional catch-all segment. The double brackets [[...slug]] make it optional.
          </p>
          <p className="text-sm text-pink-800 dark:text-pink-300">
            ✅ Matches: /wiki (base), /wiki/a, /wiki/a/b, /wiki/a/b/c
            <br />
            The key difference from [...slug] is that it also matches the base route without any segments.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: undefined }, // For /wiki
    { slug: ["nextjs"] },
    { slug: ["react", "hooks"] },
    { slug: ["javascript", "es6", "features"] },
  ];
}
