import Link from "next/link";

// Example of using PageProps with params
export default async function BlogPostPage({ params }) {
  // In Next.js 15+, params is a Promise
  const { slug } = await params;

  const posts = {
    "post-1": {
      title: "Getting Started with Next.js",
      date: "2025-01-01",
      content: "This is a nested route under /blog. The URL pattern is /blog/[slug].",
    },
    "post-2": {
      title: "Understanding React Server Components",
      date: "2025-01-05",
      content: "Server Components allow you to render components on the server.",
    },
    "post-3": {
      title: "Advanced Routing Patterns",
      date: "2025-01-10",
      content: "Learn about parallel routes, intercepted routes, and more!",
    },
  };

  const post = posts[slug] || {
    title: "Post Not Found",
    date: "",
    content: "This post does not exist.",
  };

  return (
    <div>
      <Link
        href="/blog"
        className="inline-block mb-6 text-blue-600 hover:underline dark:text-blue-400"
      >
        ← Back to all posts
      </Link>

      <article className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {post.title}
        </h2>
        {post.date && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Published on {post.date}
          </p>
        )}
        <div className="prose dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
        </div>
      </article>

      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
          Dynamic Segment: [slug]
        </h4>
        <p className="text-sm text-green-800 dark:text-green-300 mb-2">
          Current slug: <code className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">{slug}</code>
        </p>
        <p className="text-sm text-green-800 dark:text-green-300">
          This page uses the [slug] pattern. The params object contains the dynamic segment.
          This is a nested route that inherits the layout from /blog/layout.js.
        </p>
      </div>
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "post-3" },
  ];
}
