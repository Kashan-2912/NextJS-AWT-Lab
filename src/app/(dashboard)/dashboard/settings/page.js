export default function SettingsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Settings
      </h2>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Profile Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="johndoe"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="john@example.com"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Preferences
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-3"
                defaultChecked
              />
              <span className="text-gray-700 dark:text-gray-300">
                Email notifications
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-3"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Push notifications
              </span>
            </label>
          </div>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-300">
            <strong>Route:</strong> /dashboard/settings
            <br />
            <strong>File:</strong> app/(dashboard)/dashboard/settings/page.js
            <br />
            This page shares the same layout as other dashboard pages due to route grouping.
          </p>
        </div>
      </div>
    </div>
  );
}
