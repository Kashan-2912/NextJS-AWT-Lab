"use client";

import { useEffect, useState } from "react";

export default function Template({ children }) {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(new Date().toLocaleTimeString());
  }, []);

  return (
    <div>
      <div className="bg-purple-100 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mb-6">
        <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">
          Template Wrapper (template.js)
        </h4>
        <p className="text-sm text-purple-800 dark:text-purple-300">
          This template re-renders on every navigation. Mounted at: {timestamp}
        </p>
        <p className="text-xs text-purple-700 dark:text-purple-400 mt-1">
          Navigate away and back to see the timestamp update. Layouts persist, templates don't!
        </p>
      </div>
      {children}
    </div>
  );
}
