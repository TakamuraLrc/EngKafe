import { Trash2, Edit2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function BlogCard({ blog, onDelete, onEdit }) {
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/blog/edit/${blog.id}`)
  }

  const handleDelete = () => {
    onDelete(blog.id)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Blog Image */}
      <div className="relative w-full h-40 overflow-hidden bg-gray-200">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        {/* Footer with Author, Date and Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          {/* Author Logo and Date */}
          <div className="flex items-center gap-2">
            <img
              src="/images/eklogo.png"
              alt="English Kafe"
              className="w-5 h-5"
            />
            <div className="flex flex-col gap-0">
              <span className="text-xs font-semibold text-gray-900">{blog.author}</span>
              <span className="text-xs text-gray-500">{blog.date}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleEdit}
              className="flex items-center justify-center bg-gray-100 text-gray-700 p-1.5 rounded hover:bg-gray-200 transition-colors"
              title="Edit blog"
            >
              <Edit2 size={14} />
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center justify-center bg-gray-200 text-gray-700 p-1.5 rounded hover:bg-gray-300 transition-colors"
              title="Delete blog"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
