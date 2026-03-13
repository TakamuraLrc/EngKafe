import { useState } from 'react'
import Navbar from '../components/Navbar'
import CourseCard from '../components/CourseCard'
import TestimonialVideo from '../components/TestimonialVideo'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function Courses() {
  const [currentPage, setCurrentPage] = useState(1)
  
  // Sample course data - replace with actual data
  const allCourses = [
    {
      id: 1,
      image: '/src/assets/courses/IELTS speaking.jpg',
      title: 'IELTS SPEAKING',
      description: 'Build confidence with guided speaking practice and real exam-style questions.',
      price: '3000 ฿ผน',
      rating: 4.5,
      reviews: 1500
    },
    {
      id: 2,
      image: '/src/assets/courses/ielts writing.jpg',
      title: 'IELTS WRITING',
      description: 'Clear structure, grammar guidance, and scoring strategies for stronger essays.',
      price: '4500 ฿ผน',
      rating: 4.5,
      reviews: 1500
    },
    {
      id: 3,
      image: '/src/assets/courses/daily english.jpg',
      title: 'EVERYDAY ENGLISH',
      description: 'Practice real-life conversations and vocabulary for daily communication.',
      price: '3500 ฿ผน',
      rating: 4.5,
      reviews: 1500
    },
    {
      id: 4,
      image: '/src/assets/courses/grammer.jpg',
      title: 'GRAMMAR ESSENTIALS',
      description: 'Understand grammar simply and apply it confidently in speaking and writing.',
      price: '2500 ฿ผน',
      rating: 4.5,
      reviews: 1500
    },
    {
      id: 5,
      image: '/src/assets/courses/master communation.jpg',
      title: 'MASTER ENGLISH COMMUNICATION',
      description: 'Build confidence in real-life conversations through guided video lessons focused on...',
      price: '5500 ฿ผน',
      rating: 4.5,
      reviews: 1500
    },
    {
      id: 6,
      image: '/src/assets/courses/IELTS speaking.jpg',
      title: 'TOEFL PREPARATION',
      description: 'Comprehensive TOEFL exam preparation with practice tests and expert guidance.',
      price: '5000 ฿ผน',
      rating: 4.5,
      reviews: 1600
    },
    {
      id: 7,
      image: '/src/assets/courses/ielts writing.jpg',
      title: 'CONVERSATION FLUENCY',
      description: 'Develop natural conversational English through interactive role-play scenarios.',
      price: '3600 ฿ผน',
      rating: 4.5,
      reviews: 1350
    },
    {
      id: 8,
      image: '/src/assets/courses/daily english.jpg',
      title: 'ADVANCED LISTENING',
      description: 'Improve your listening skills with real-world English from movies and podcasts.',
      price: '3800 ฿ผน',
      rating: 4.5,
      reviews: 1300
    },
    {
      id: 9,
      image: '/src/assets/courses/grammer.jpg',
      title: 'PRONUNCIATION MASTER',
      description: 'Perfect your English pronunciation with detailed audio and video explanations.',
      price: '3200 ฿ผน',
      rating: 4.5,
      reviews: 1100
    },
    {
      id: 10,
      image: '/src/assets/courses/master communation.jpg',
      title: 'VOCABULARY BUILDER',
      description: 'Expand your English vocabulary with context-based learning and memory techniques.',
      price: '2800 ฿ผน',
      rating: 4.5,
      reviews: 1400
    },
    {
      id: 11,
      image: '/src/assets/courses/IELTS speaking.jpg',
      title: 'BUSINESS ENGLISH',
      description: 'Master professional communication for workplace success and international business.',
      price: '4000 ฿ผน',
      rating: 4.5,
      reviews: 1200
    },
    {
      id: 12,
      image: '/src/assets/courses/ielts writing.jpg',
      title: 'ADVANCED CONVERSATION',
      description: 'Develop natural conversational English through interactive role-play scenarios.',
      price: '3600 ฿ผน',
      rating: 4.5,
      reviews: 1350
    },
  ]

  const coursesPerPage = 6
  const totalPages = Math.ceil(allCourses.length / coursesPerPage)
  const startIndex = (currentPage - 1) * coursesPerPage
  const currentCourses = allCourses.slice(startIndex, startIndex + coursesPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="px-4 md:px-10 py-12 text-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Online Video Courses
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse a curated collection of self-paced English video courses designed to improve your speaking, grammar, and real-world communication skills.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="px-4 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCourses.map((course) => (
              <CourseCard
                key={course.id}
                image={course.image}
                title={course.title}
                description={course.description}
                price={course.price}
                rating={course.rating}
                reviews={course.reviews}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  currentPage === index + 1
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="px-4 md:px-10 py-16 text-center bg-pink-100">
        <div className="flex justify-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Master English faster with expert-guided video courses designed for<br />practical speaking, grammar, and everyday communication.
            </h2>
            <div className="h-1 w-32 bg-black mx-auto"></div>
          </div>
        </div>
        <p className="text-gray-700 text-lg mt-6 max-w-3xl mx-auto">
          Learn smarter, progress quicker, and speak with confidence.
        </p>
      </div>

      {/* Free Course Preview Videos Section */}
      <div className="px-4 md:px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free Course Preview Videos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore sample lessons that show how our courses teach step by step.<br />
              Learn practical tips, clear explanations, and real examples
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <span className="font-bold">Speak English with Confidence</span>
                <span className="text-gray-600 font-normal"> (Free to learn)</span>
              </h3>
              <TestimonialVideo 
                image="/src/assets/courses/IELTS speaking.jpg"
                backgroundColor="bg-green-500"
              />
            </div>

            {/* Video 2 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <span className="font-bold">English Basics – Free Starter Course</span>
                <span className="text-gray-600 font-normal"> (Free to learn)</span>
              </h3>
              <TestimonialVideo 
                image="/src/assets/courses/daily english.jpg"
                backgroundColor="bg-yellow-400"
              />
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

export default Courses
