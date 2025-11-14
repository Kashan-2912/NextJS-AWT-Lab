"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// This is the intercepted route - shows as a modal when navigating from /gallery
export default function PhotoModal({ params }) {
  const router = useRouter();
  const [photoId, setPhotoId] = useState(null);

  useEffect(() => {
    params.then((p) => setPhotoId(p.id));
  }, [params]);

  const photos = {
    "1": { title: "Mountain Landscape", color: "from-blue-400 to-blue-600", description: "Majestic peaks covered in snow" },
    "2": { title: "Ocean Sunset", color: "from-orange-400 to-pink-600", description: "Golden hour by the sea" },
    "3": { title: "Forest Path", color: "from-green-400 to-green-600", description: "Winding trail through ancient trees" },
    "4": { title: "City Lights", color: "from-purple-400 to-purple-600", description: "Urban landscape at night" },
  };

  const photo = photoId ? photos[photoId] : null;

  if (!photo) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => router.back()}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {photo.title}
          </h2>
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className={`w-full h-80 bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
          <span className="text-white text-9xl font-bold opacity-50">
            {photoId}
          </span>
        </div>

        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {photo.description}
          </p>

          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">
              Intercepted Route (Modal)
            </h4>
            <p className="text-sm text-emerald-800 dark:text-emerald-300 mb-2">
              You're viewing the intercepted version from gallery/(..)photos/[id]/page.js
            </p>
            <p className="text-sm text-emerald-800 dark:text-emerald-300">
              The (..) syntax intercepts the parent level route (/photos/{photoId}).
              Click outside or press the X to go back. Refresh the page to see the full page version!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
