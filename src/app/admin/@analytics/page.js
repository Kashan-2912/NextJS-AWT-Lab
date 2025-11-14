export default function AnalyticsSlot() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Analytics
        </h3>
        <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
          @analytics slot
        </span>
      </div>

      <div className="space-y-4">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Page Views (Today)
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            12,345
          </p>
          <p className="text-xs text-green-600 dark:text-green-400">
            ↑ 12% from yesterday
          </p>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Unique Visitors
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            3,456
          </p>
          <p className="text-xs text-green-600 dark:text-green-400">
            ↑ 8% from yesterday
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Avg. Session Duration
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            4m 32s
          </p>
          <p className="text-xs text-red-600 dark:text-red-400">
            ↓ 3% from yesterday
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          This content is from admin/@analytics/page.js
        </p>
      </div>
    </div>
  );
}
