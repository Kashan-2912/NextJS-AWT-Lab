import Link from "next/link";

export default function GalleryPage() {
  const photos = [
    { id: "1", title: "Mountain Landscape", color: "from-blue-400 to-blue-600" },
    { id: "2", title: "Ocean Sunset", color: "from-orange-400 to-pink-600" },
    { id: "3", title: "Forest Path", color: "from-green-400 to-green-600" },
    { id: "4", title: "City Lights", color: "from-purple-400 to-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Photo Gallery
          </h1>
          <Link
            href="/"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Home
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Click any photo to see it in a modal (intercepted route).
          Right-click and "Open in new tab" to see the full page.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              href={`/photos/${photo.id}`}
              className="group relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
                <span className="text-white text-6xl font-bold opacity-50">
                  {photo.id}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm font-medium">{photo.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
          <h4 className="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">
            Intercepted Routes Demo
          </h4>
          <p className="text-sm text-cyan-800 dark:text-cyan-300 mb-2">
            This demonstrates intercepted routes - a powerful pattern for modals:
          </p>
          <ul className="text-sm text-cyan-800 dark:text-cyan-300 space-y-1">
            <li>• Click a photo → Opens in a modal (gallery/(..)photos/[id])</li>
            <li>• Direct URL visit → Shows full page (photos/[id])</li>
            <li>• The (..) means "intercept parent level route"</li>
            <li>• Perfect for keeping context while showing details</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
