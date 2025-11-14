import PostCard from "./_components/PostCard";

export default function BlogPage() {
  const posts = [
    { id: "post-1", title: "Getting Started with Next.js", date: "2025-01-01" },
    { id: "post-2", title: "Understanding React Server Components", date: "2025-01-05" },
    { id: "post-3", title: "Advanced Routing Patterns", date: "2025-01-10" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Blog Posts
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is a parent route. Click any post to see nested child routes.
        Posts are rendered using a component from the _components folder.
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
          Nested Route + Private Folder
        </h4>
        <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
          This route uses a nested layout. The layout in blog/layout.js wraps this page
          and all child pages like /blog/[slug]. Notice the navigation persists across pages.
        </p>
        <p className="text-sm text-blue-800 dark:text-blue-300">
          <strong>Private Folder:</strong> The PostCard component is in blog/_components/
          which is a private folder (starts with underscore). It's not accessible as a route.
          Try visiting /blog/_components - you'll get a 404!
        </p>
      </div>
    </div>
  );
}
