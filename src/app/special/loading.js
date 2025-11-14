export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
              Loading State (loading.js)
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              This is a loading.js file that shows while the page content is being fetched.
              It creates an automatic loading state with React Suspense.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
