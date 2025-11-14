export default function AdminPage() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to Admin
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        This is the main admin page content. It's rendered as the 'children' prop in the layout.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">2,547</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
          <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">1,832</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
          <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$48.2K</p>
        </div>
      </div>
    </div>
  );
}
