import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "Example of route groups",
};

export default function DashboardGroupLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-indigo-600 dark:bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
          <p className="text-sm text-indigo-200 dark:text-indigo-300">
            This layout is from (dashboard) route group - parentheses are not in URL
          </p>
        </div>
      </div>

      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex gap-6">
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/analytics"
              className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              Analytics
            </Link>
            <Link
              href="/dashboard/settings"
              className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              Settings
            </Link>
            <Link
              href="/"
              className="ml-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ← Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
            Route Group: (dashboard)
          </h4>
          <p className="text-sm text-indigo-800 dark:text-indigo-300">
            The folder is named (dashboard) with parentheses. This groups related routes
            and allows them to share a layout, but the (dashboard) part is NOT included
            in the URL path. All routes under this group share this layout.
          </p>
        </div>
      </div>
    </div>
  );
}
