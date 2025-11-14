import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Example of nested routes with layout",
};

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Blog
            </h1>
            <Link
              href="/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              ← Home
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            This layout wraps all /blog routes (nested layout example)
          </p>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
