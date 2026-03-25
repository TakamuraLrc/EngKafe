import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getCourseById } from '../services/courseService'

function Payment() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1) // 1: Payment, 2: Upload Receipt, 3: Verification

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

  const handleUploadReceipt = () => {
    setCurrentStep(3)
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />

      {/* Back Link */}
      <div className="px-4 md:px-10 pt-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
          >
            <span className="text-2xl">←</span>
            Back To Order Summary
          </button>
        </div>
      </div>

      {/* Payment Section */}
      <div className="px-4 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Complete Your Enrollment
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Course Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex flex-col">
                {/* Course Image */}
                <div className="mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>

                {/* Course Info */}
                <div>
                  {/* Badge and Price Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {course.title.split(' ').slice(0, 2).join(' ')}
                    </div>
                    <span className="text-3xl font-bold text-gray-900">
                      {course.price}
                    </span>
                  </div>

                  {/* Lesson Count */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">📄</span>
                    <span className="text-gray-700 font-semibold">
                      {course.lessons} lessons
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3">
                    {renderStars(course.rating)}
                    <span className="text-gray-600 font-semibold">
                      ({course.rating.toFixed(1)})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Payment Section */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              {/* Payment Section Header */}
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Payment Section
              </h3>

              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white mb-2 ${
                      currentStep >= 1 ? 'bg-pink-400' : 'bg-gray-300'
                    }`}>
                      {currentStep > 1 ? '✓' : '1'}
                    </div>
                    <span className="text-xs font-semibold text-gray-700 text-center">Payment</span>
                  </div>

                  {/* Connector Line 1 */}
                  <div className="flex-1 mx-2 h-1 bg-gray-300 mb-6"></div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white mb-2 ${
                      currentStep >= 2 ? 'bg-pink-400' : 'bg-gray-300'
                    }`}>
                      {currentStep > 2 ? '✓' : '2'}
                    </div>
                    <span className="text-xs font-semibold text-gray-700 text-center">Upload Receipt</span>
                  </div>

                  {/* Connector Line 2 */}
                  <div className="flex-1 mx-2 h-1 bg-gray-300 mb-6"></div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white mb-2 ${
                      currentStep >= 3 ? 'bg-pink-400' : 'bg-gray-300'
                    }`}>
                      {currentStep > 3 ? '✓' : '3'}
                    </div>
                    <span className="text-xs font-semibold text-gray-700 text-center">Verification</span>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 font-semibold mb-4">
                      Step 1. Scan the QR code to complete your payment.
                    </p>
                    <p className="text-sm text-gray-600 mb-6">
                      Next step: Upload your payment receipt.
                    </p>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="bg-gray-100 p-8 rounded-xl flex items-center justify-center">
                    <div className="border-4 border-gray-300 p-4 bg-white rounded-lg">
                      <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h8v8H3V3zm10 10h8v8h-8v-8zM7 7h4v4H7V7zm8-4h4v4h-4V3zm4 12h4v4h-4v-4zM3 13h4v4H3v-4z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/courses/${courseId}`)}
                      className="flex-1 border-2 border-gray-300 text-gray-900 font-bold py-3 px-4 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Go Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 bg-pink-300 hover:bg-pink-400 text-gray-900 font-bold py-3 px-4 rounded-full transition-colors"
                    >
                      Upload Receipt
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    Your payment will be verified within 24 hours. You will receive a notification once approved.
                  </p>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 font-semibold mb-4">
                      Step 2. Upload your payment receipt.
                    </p>
                    <p className="text-sm text-gray-600 mb-6">
                      Please upload a clear image or screenshot of your payment confirmation.
                    </p>
                  </div>

                  {/* File Upload */}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-pink-400 transition-colors cursor-pointer">
                    <div className="text-4xl mb-3">📄</div>
                    <p className="text-gray-700 font-semibold mb-1">
                      Click to upload receipt
                    </p>
                    <p className="text-sm text-gray-600">
                      PNG, JPG or PDF (Max. 5MB)
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 border-2 border-gray-300 text-gray-900 font-bold py-3 px-4 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleUploadReceipt}
                      className="flex-1 bg-pink-300 hover:bg-pink-400 text-gray-900 font-bold py-3 px-4 rounded-full transition-colors"
                    >
                      Submit Payment
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 text-center">
                    Your payment will be verified within 24 hours. You will receive a notification once approved.
                  </p>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      ⏳ Payment Under Review
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Your payment is under review.<br/>
                      You will be notified once your enrollment is approved.
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="bg-gray-50 rounded-xl p-12 flex items-center justify-center min-h-48">
                    <svg className="w-40 h-40 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>

                  <button
                    onClick={() => navigate('/my-course-order')}
                    className="w-full bg-pink-300 hover:bg-pink-400 text-gray-900 font-bold py-3 px-4 rounded-full transition-colors"
                  >
                    View My Course Orders
                  </button>

                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    If you need assistance, please contact our support team via LINE: <span className="underline font-semibold">Contact - English Kafe</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Payment
