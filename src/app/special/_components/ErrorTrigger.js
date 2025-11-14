"use client";

export default function ErrorTrigger() {
  return (
    <button
      onClick={() => {
        throw new Error("Test error from special page!");
      }}
      className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded transition-colors"
    >
      Trigger Error
    </button>
  );
}
