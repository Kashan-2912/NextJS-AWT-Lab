import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard",
  description: "Example of parallel routes with slots",
};

// Parallel routes are passed as props using the slot names
export default function AdminLayout({ children, analytics, team }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <Link
              href="/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              ← Home
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            This layout uses parallel routes (@analytics and @team slots)
          </p>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Main content */}
        <div className="mb-8">
          {children}
        </div>

        {/* Parallel routes rendered side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* @analytics slot */}
          <div>
            {analytics}
          </div>

          {/* @team slot */}
          <div>
            {team}
          </div>
        </div>

        <div className="mt-8 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
          <h4 className="font-semibold text-teal-900 dark:text-teal-200 mb-2">
            Parallel Routes Concept
          </h4>
          <p className="text-sm text-teal-800 dark:text-teal-300 mb-2">
            This layout renders multiple pages simultaneously using named slots.
          </p>
          <ul className="text-sm text-teal-800 dark:text-teal-300 space-y-1">
            <li>• The @analytics slot renders content from admin/@analytics/page.js</li>
            <li>• The @team slot renders content from admin/@team/page.js</li>
            <li>• The children prop renders content from admin/page.js</li>
            <li>• All three are rendered independently but displayed together</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
