import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { getCourseById } from '../services/courseService'

function CourseDetail() {
  const { courseId } = useParams()
  const navigate = useNavigate()

  const course = getCourseById(courseId)

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-600">Course not found</p>
        </div>
      </div>
    )
  }

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    )
  }

  const courseFeatures = [
    'Simple, step-by-step lessons',
    'Real-life examples for practical use',
    'Guided practice in every video',
    'Improve speaking and writing accuracy',
    'Build a strong foundation',
    'No confusing rules or memorization'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Course Detail Section */}
      <div className="px-4 md:px-10 py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Header with title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Online Video Courses
            </h1>
            <p className="text-gray-600 text-lg">
              Browse a curated collection of self-paced English video courses designed to improve your speaking, grammar, and real-world communication skills.
            </p>
          </div>

          {/* Course Detail Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left - Image */}
              <div className="flex items-center justify-center">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>

              {/* Right - Course Details */}
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {course.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {course.fullDescription}
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What you'll learn:</h3>
                  <ul className="space-y-3">
                    {courseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <span className="text-pink-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Info Bar */}
                <div className="flex items-center gap-6 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-semibold uppercase text-sm">
                      {course.title.split(' ')[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    📄
                    <span className="text-gray-700 font-semibold">{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(course.rating)}
                    <span className="text-gray-700 font-semibold">({course.rating.toFixed(1)}/5)</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-6">
                  <div className="text-4xl font-bold text-gray-900">
                    {course.price}
                  </div>
                  <button className="bg-pink-300 hover:bg-pink-400 text-gray-900 font-bold py-4 px-12 rounded-full transition-colors text-lg">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CourseDetail
