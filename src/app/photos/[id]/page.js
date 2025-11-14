import Link from "next/link";

export default async function PhotoPage({ params }) {
  const { id } = await params;

  const photos = {
    "1": { title: "Mountain Landscape", color: "from-blue-400 to-blue-600", description: "Majestic peaks covered in snow" },
    "2": { title: "Ocean Sunset", color: "from-orange-400 to-pink-600", description: "Golden hour by the sea" },
    "3": { title: "Forest Path", color: "from-green-400 to-green-600", description: "Winding trail through ancient trees" },
    "4": { title: "City Lights", color: "from-purple-400 to-purple-600", description: "Urban landscape at night" },
  };

  const photo = photos[id] || { title: "Photo Not Found", color: "from-gray-400 to-gray-600", description: "This photo does not exist" };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/gallery"
          className="inline-block mb-6 text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Back to Gallery
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className={`w-full h-96 bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
            <span className="text-white text-9xl font-bold opacity-50">
              {id}
            </span>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {photo.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {photo.description}
            </p>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Photo Details
              </h3>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-gray-600 dark:text-gray-400">Photo ID</dt>
                  <dd className="text-gray-900 dark:text-white font-medium">{id}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 dark:text-gray-400">Route</dt>
                  <dd className="text-gray-900 dark:text-white font-medium">/photos/{id}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
          <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">
            Full Page View
          </h4>
          <p className="text-sm text-amber-800 dark:text-amber-300">
            You're viewing the full photo page at photos/[id]/page.js.
            This is what users see when they access the URL directly or refresh the page.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ];
}
