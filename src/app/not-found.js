// src/app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
