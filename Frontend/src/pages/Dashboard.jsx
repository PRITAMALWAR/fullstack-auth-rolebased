export default function Dashboard({ user }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full border border-indigo-100">
        <h1 className="text-3xl font-extrabold text-indigo-600 mb-4">
          Welcome, {user?.username || "Guest"} 👋
        </h1>
        <p className="text-gray-700 text-lg">
          <span className="font-medium">Role:</span> {user?.role || "Not logged in"}
        </p>
        {!user && (
          <p className="mt-4 text-sm text-gray-500">
            Please log in to access your personalized dashboard.
          </p>
        )}
      </div>
    </div>
  );
}
