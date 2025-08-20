'use client'
// components/BlogCard.jsx
import { motion } from "framer-motion";

export default function BlogCard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
    >
      {/* Date */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {data.date}
      </p>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
        {data.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        {data.description}
      </p>

      {/* Content preview */}
      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">
        {data.content}
      </p>

      {/* Read more */}
      <div className="mt-auto">
        <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Read more →
        </button>
      </div>
    </motion.div>
  );
}
