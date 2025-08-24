'use client'
import { motion } from "framer-motion";
import "../styles/BlogCard.css"; // import css

export default function BlogCard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="blog-card"
    >
      {/* Date */}
      <p className="blog-date">{data.date}</p>

      {/* Title */}
      <h2 className="blog-title">{data.title}</h2>

      {/* Description */}
      <p className="blog-description">{data.description}</p>

      {/* Content preview */}
      <p className="blog-content">{data.content}</p>

      {/* Read more */}
      <div className="blog-footer">
        <button className="read-more">Read more →</button>
      </div>
    </motion.div>
  );
}
