export default function AnalyticsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Analytics
      </h2>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Page Views
          </h3>
          <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/20 rounded flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Chart placeholder</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            User Engagement
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">5m 32s</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">42%</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Route:</strong> /dashboard/analytics
            <br />
            <strong>File:</strong> app/(dashboard)/dashboard/analytics/page.js
            <br />
            Notice the (dashboard) is not in the URL!
          </p>
        </div>
      </div>
    </div>
  );
}
