export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Dashboard Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Total Users
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            1,234
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Active Sessions
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            567
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Revenue
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            $12,345
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          About Route Groups
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>✓ The folder structure is: app/(dashboard)/dashboard/page.js</li>
          <li>✓ The URL is simply: /dashboard</li>
          <li>✓ The (dashboard) part is NOT in the URL - it's purely for organization</li>
          <li>✓ All routes in this group share the same layout</li>
          <li>✓ You can have multiple route groups with different layouts</li>
        </ul>
      </div>
    </div>
  );
}
