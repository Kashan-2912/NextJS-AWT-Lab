import Link from "next/link";
import ErrorTrigger from "./_components/ErrorTrigger";

// Simulate a slow data fetch to show loading.js
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { loaded: true };
}

export default async function SpecialPage() {
  const data = await getData();

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
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Special Files Demo
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            This route demonstrates all the special Next.js files. Each file has a specific purpose
            in the routing system.
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ loading.js
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Shows loading UI while page is being fetched. Navigate away and back to see it.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ template.js
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Re-renders on every navigation (see the purple banner above with timestamp).
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ error.js
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Catches runtime errors in this segment. Click below to trigger an error:
              </p>
              <ErrorTrigger />
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ not-found.js
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Shows custom 404 page for this segment. Try these:
              </p>
              <div className="flex gap-3">
                <Link
                  href="/special/missing"
                  className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
                >
                  /special/missing
                </Link>
                <Link
                  href="/special/nonexistent"
                  className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
                >
                  /special/nonexistent
                </Link>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
              Special Files Summary
            </h4>
            <ul className="text-sm text-green-800 dark:text-green-300 space-y-1">
              <li><strong>page.js</strong> - Defines the route's UI (you're viewing it now)</li>
              <li><strong>layout.js</strong> - Wraps pages, persists across navigation</li>
              <li><strong>template.js</strong> - Like layout but re-renders on navigation</li>
              <li><strong>loading.js</strong> - Automatic loading UI with Suspense</li>
              <li><strong>error.js</strong> - Error boundary for this segment</li>
              <li><strong>not-found.js</strong> - Custom 404 page</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
