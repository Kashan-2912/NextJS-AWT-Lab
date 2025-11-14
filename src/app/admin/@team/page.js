export default function TeamSlot() {
  const teamMembers = [
    { name: "Alice Johnson", role: "Admin", status: "online" },
    { name: "Bob Smith", role: "Editor", status: "online" },
    { name: "Carol Davis", role: "Viewer", status: "offline" },
    { name: "David Wilson", role: "Editor", status: "away" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Team Members
        </h3>
        <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
          @team slot
        </span>
      </div>

      <div className="space-y-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {member.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  member.status === "online"
                    ? "bg-green-500"
                    : member.status === "away"
                    ? "bg-yellow-500"
                    : "bg-gray-400"
                }`}
              ></span>
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          This content is from admin/@team/page.js
        </p>
      </div>
    </div>
  );
}
