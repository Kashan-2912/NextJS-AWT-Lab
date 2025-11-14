import Link from "next/link";

// Example: Single dynamic segment [slug]
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const products = {
    laptop: {
      name: "Professional Laptop",
      price: "$1,299",
      description: "High-performance laptop for developers",
    },
    keyboard: {
      name: "Mechanical Keyboard",
      price: "$149",
      description: "Premium mechanical keyboard with RGB lighting",
    },
    mouse: {
      name: "Wireless Mouse",
      price: "$79",
      description: "Ergonomic wireless mouse with precision tracking",
    },
  };

  const product = products[slug] || {
    name: "Product Not Found",
    price: "N/A",
    description: "This product does not exist.",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Home
        </Link>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
            {product.price}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.description}
          </p>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Try other products:
            </h3>
            <div className="flex gap-3">
              <Link
                href="/products/laptop"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Laptop
              </Link>
              <Link
                href="/products/keyboard"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Keyboard
              </Link>
              <Link
                href="/products/mouse"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Mouse
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">
            Route Pattern: /products/[slug]
          </h4>
          <p className="text-sm text-purple-800 dark:text-purple-300 mb-2">
            Current slug: <code className="bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded">{slug}</code>
          </p>
          <p className="text-sm text-purple-800 dark:text-purple-300">
            This is a single dynamic segment. The [slug] matches one path segment.
            Examples: /products/laptop, /products/keyboard
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "laptop" },
    { slug: "keyboard" },
    { slug: "mouse" },
  ];
}
