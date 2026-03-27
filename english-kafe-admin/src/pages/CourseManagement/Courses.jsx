import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CourseCard from '../../components/CourseCard'
import ConfirmationModal from '../../components/ConfirmationModal'
import IeltsSpaking from '../../assets/images/IELTS speaking.jpg'
import IeltsWriting from '../../assets/images/ielts writing.jpg'
import Grammar from '../../assets/images/grammer.jpg'
import DailyEnglish from '../../assets/images/daily english.jpg'
import MasterCommunication from '../../assets/images/master communation.jpg'

function Courses() {
  const navigate = useNavigate()
  
  const defaultCourses = [
    {
      id: 1,
      title: 'IELTS SPEAKING',
      description: 'Build confidence with guided speaking practice and real exam-style questions',
      price: '3000 บาท',
      rating: 4.5,
      reviews: 141,
      image: IeltsSpaking,
    },
    {
      id: 2,
      title: 'IELTS WRITING',
      description: 'Clear structure, grammar guidance, and scarring strategies for stronger essays',
      price: '3000 บาท',
      rating: 4.5,
      reviews: 141,
      image: IeltsWriting,
    },
    {
      id: 3,
      title: 'GRAMMAR ESSENTIAL',
      description: 'Understand grammar simply and apply it confidently in speaking and writing',
      price: '2500 บาท',
      rating: 4.5,
      reviews: 141,
      image: Grammar,
    },
    {
      id: 4,
      title: 'DAILY ENGLISH',
      description: 'Improve your daily English communication skills with practical lessons',
      price: '2000 บาท',
      rating: 4.5,
      reviews: 125,
      image: DailyEnglish,
    },
    {
      id: 5,
      title: 'MASTER COMMUNICATION',
      description: 'Master communication techniques and become a confident speaker',
      price: '2800 บาท',
      rating: 4.5,
      reviews: 156,
      image: MasterCommunication,
    },
  ]

  const [courses, setCourses] = useState(defaultCourses)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [courseToDelete, setCourseToDelete] = useState(null)

  // Load courses from localStorage on mount
  useEffect(() => {
    const savedCourses = localStorage.getItem('courses')
    if (savedCourses) {
      const parsedCourses = JSON.parse(savedCourses)
      setCourses([...defaultCourses, ...parsedCourses])
    }
  }, [])

  const handleDeleteClick = (id) => {
    setCourseToDelete(id)
    setShowConfirmation(true)
  }

  const handleConfirmDelete = () => {
    if (courseToDelete) {
      const updatedCourses = courses.filter(course => course.id !== courseToDelete)
      setCourses(updatedCourses)
      // Update localStorage
      const newCourses = updatedCourses.filter(c => c.id > 5)
      if (newCourses.length > 0) {
        localStorage.setItem('courses', JSON.stringify(newCourses))
      } else {
        localStorage.removeItem('courses')
      }
    }
    setShowConfirmation(false)
    setCourseToDelete(null)
  }

  const handleCancelDelete = () => {
    setShowConfirmation(false)
    setCourseToDelete(null)
  }

  const handleEdit = (id) => {
    navigate(`/courses/edit/${id}`)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Course</h1>
        <button
          onClick={() => navigate('/courses/add')}
          className="flex items-center gap-2 bg-pink-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-pink-400 transition-colors font-medium"
        >
          <Plus size={20} />
          Add Course
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        ))}
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmation}
        title="Delete Course"
        message="Are you sure you want to delete this course? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        isDangerous={true}
      />
    </div>
  )
}

export default Courses
