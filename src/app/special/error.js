"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Something went wrong!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {error.message || "An unexpected error occurred"}
            </p>

            <button
              onClick={() => reset()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>

          <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">
              Error Boundary (error.js)
            </h4>
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              This is an error.js file that catches errors in this route segment.
            </p>
            <ul className="text-sm text-red-800 dark:text-red-300 space-y-1">
              <li>• Must be a Client Component ("use client")</li>
              <li>• Receives error and reset props</li>
              <li>• Wraps page in an Error Boundary automatically</li>
              <li>• Reset function attempts to re-render the segment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
