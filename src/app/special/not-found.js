import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            404 - Page Not Found
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The page you're looking for doesn't exist in this route segment.
          </p>

          <Link
            href="/special"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Go Back to Special
          </Link>

          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
            <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">
              Not Found Page (not-found.js)
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              This is a not-found.js file that shows when:
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• A route in this segment doesn't exist</li>
              <li>• You call notFound() function in a page</li>
              <li>• User navigates to an invalid path</li>
            </ul>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              Try visiting: /special/missing or /special/anything-else
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
