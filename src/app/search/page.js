import Link from "next/link";

// Example of using PageProps with searchParams
export default async function SearchPage({ searchParams }) {
  // In Next.js 15+, searchParams is a Promise
  const params = await searchParams;
  const query = params.q || "";
  const category = params.category || "all";
  const sort = params.sort || "relevance";
  const page = params.page || "1";

  // Mock search results
  const results = [
    { id: 1, title: "Next.js Routing Guide", category: "routing", relevance: 95 },
    { id: 2, title: "Server Components Tutorial", category: "components", relevance: 88 },
    { id: 3, title: "API Routes Best Practices", category: "routing", relevance: 82 },
    { id: 4, title: "Static Generation vs SSR", category: "rendering", relevance: 90 },
    { id: 5, title: "Next.js Performance Tips", category: "optimization", relevance: 87 },
  ];

  // Filter by category if specified
  const filteredResults = category === "all"
    ? results
    : results.filter(r => r.category === category);

  // Sort results
  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sort === "relevance") return b.relevance - a.relevance;
    if (sort === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Home
        </Link>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow mb-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Search Results
          </h1>

          {/* Search Form */}
          <form method="GET" className="mb-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Query
                </label>
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Enter search term..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Categories</option>
                  <option value="routing">Routing</option>
                  <option value="components">Components</option>
                  <option value="rendering">Rendering</option>
                  <option value="optimization">Optimization</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  name="sort"
                  defaultValue={sort}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="relevance">Relevance</option>
                  <option value="title">Title</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Page
                </label>
                <input
                  type="number"
                  name="page"
                  defaultValue={page}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Current Search Params Display */}
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
              Current Search Parameters (from PageProps)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div>
                <span className="text-blue-700 dark:text-blue-300 font-medium">q:</span>{" "}
                <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                  {query || "(empty)"}
                </code>
              </div>
              <div>
                <span className="text-blue-700 dark:text-blue-300 font-medium">category:</span>{" "}
                <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                  {category}
                </code>
              </div>
              <div>
                <span className="text-blue-700 dark:text-blue-300 font-medium">sort:</span>{" "}
                <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                  {sort}
                </code>
              </div>
              <div>
                <span className="text-blue-700 dark:text-blue-300 font-medium">page:</span>{" "}
                <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                  {page}
                </code>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Found {sortedResults.length} results
              {query && ` for "${query}"`}
            </h2>

            {sortedResults.map((result) => (
              <div
                key={result.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {result.title}
                </h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Category: {result.category}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    Relevance: {result.relevance}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links to Test Different Params */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Try these search variations:
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/search?q=nextjs"
                className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
              >
                ?q=nextjs
              </Link>
              <Link
                href="/search?q=routing&category=routing"
                className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
              >
                ?q=routing&category=routing
              </Link>
              <Link
                href="/search?q=components&sort=title"
                className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
              >
                ?q=components&sort=title
              </Link>
              <Link
                href="/search?category=optimization&page=2"
                className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
              >
                ?category=optimization&page=2
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
          <h4 className="font-semibold text-violet-900 dark:text-violet-200 mb-2">
            PageProps: searchParams
          </h4>
          <p className="text-sm text-violet-800 dark:text-violet-300 mb-2">
            This page demonstrates using searchParams from PageProps helper type.
          </p>
          <ul className="text-sm text-violet-800 dark:text-violet-300 space-y-1">
            <li>• PageProps provides type-safe access to params and searchParams</li>
            <li>• searchParams is a Promise in Next.js 15+ (must await it)</li>
            <li>• Perfect for filtering, pagination, and search functionality</li>
            <li>• URL parameters are accessible as an object</li>
            <li>• Changes to search params cause re-renders automatically</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
