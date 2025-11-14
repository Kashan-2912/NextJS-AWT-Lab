import Link from "next/link";

// This component is in a private folder (_components)
// Private folders start with underscore and are NOT routable
// Trying to access /blog/_components will result in 404

export default function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {post.title}
        </h3>
        <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
          From _components
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Published on {post.date}
      </p>
    </Link>
  );
}
