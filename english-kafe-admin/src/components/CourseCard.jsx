import { Star, Trash2, Edit2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function CourseCard({ course, onEdit, onDelete }) {
  const navigate = useNavigate()

  const handleAddLesson = () => {
    navigate(`/courses/${course.id}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex gap-4 p-4">
        {/* Course Image - Left Side */}
        <div className="w-48 h-40 shrink-0 rounded-lg overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Course Info - Right Side */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Category Badge (using title as label) */}
          <div>
            <div className="inline-block bg-blue-200 text-blue-900 text-xs font-bold px-4 py-1 rounded-full mb-3">
              {course.title}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-900 mb-3 line-clamp-2">
              {course.description}
            </p>

            {/* Price */}
            <p className="text-lg font-bold text-gray-900 mb-3">
              {course.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({course.reviews})</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAddLesson}
              className="flex items-center justify-center gap-2 bg-pink-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-pink-400 transition-colors font-medium text-sm flex-1"
            >
              Add Lesson
            </button>
            <button
              onClick={() => onEdit(course.id)}
              className="flex items-center justify-center bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
              title="Edit course"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDelete(course.id)}
              className="flex items-center justify-center bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition-colors"
              title="Delete course"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
