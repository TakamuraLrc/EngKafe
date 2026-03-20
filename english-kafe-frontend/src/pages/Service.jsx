import Navbar from "../components/Navbar"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import ServiceComponent from "../components/Service"
import lineIcon from "../assets/logo/Line.svg"
import coachImage from "../assets/service/medium-shot-smiley-teacher-with-whiteboard.jpg"

function Service() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Personal English Coaching — Learn With Real Guidance, Not Guesswork
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Get one-on-one support to improve speaking, grammar, and confidence with practical, guided practice you can use in daily life, exams, or work.
            </p>

            {/* Contact via LINE Button */}
            <div className="pt-4">
              <button className="flex items-center gap-3 bg-pink-300 hover:bg-pink-400 transition-colors px-8 py-4 rounded-2xl font-semibold text-lg">
                <img src={lineIcon} alt="LINE" className="w-8 h-8" />
                Contact vai LINE
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <img 
              src={coachImage} 
              alt="Personal English Coaching" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Service Component */}
      <ServiceComponent />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Service
