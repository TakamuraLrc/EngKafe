function Hero() {
  return (
    <section className="relative px-4 md:px-10 py-10 md:py-20 bg-white overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto relative">

        {/* Decorative Pink Shape on Left */}
        <div className="absolute -left-100 -bottom-40 w-full md:w-165 h-full md:h-160 rounded-full pointer-events-none z-0" style={{backgroundColor: "#FCDCE2"}}></div>

        {/* Left Content */}
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
            Speak English with Confidence<br />
            Master Grammar at <span className="text-pink-500">English Kafé</span>
          </h1>

          <p className="text-gray-600 mt-4 md:mt-6 text-sm md:text-base leading-relaxed">
            Where English learning feels relaxed, practical, and enjoyable.
          </p>

          <button className="mt-6 md:mt-8 bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm md:text-base">
            Explore Courses →
          </button>

          <div className="mt-8 md:mt-10 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-sm md:text-base">What we offer:</h3>
              <ul className="space-y-2 text-gray-700 text-xs md:text-sm">
                <li>• One-on-One English Coaching</li>
                <li>• IELTS Preparation Guidance</li>
                <li>• Conversational English Training</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-gray-800 mb-3 text-sm md:text-base">Contact us via:</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src="/src/assets/logo/Line.svg" alt="LINE" className="w-6 md:w-8 h-6 md:h-8" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src="/src/assets/logo/facebook.svg" alt="Facebook" className="w-6 md:w-8 h-6 md:h-8" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src="/src/assets/logo/instagram.svg" alt="Instagram" className="w-6 md:w-8 h-6 md:h-8" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Images Section */}
        <div className="relative h-80 md:h-full flex items-center justify-center mt-10 md:mt-50">
          
          {/* Large Pink Circular Background (behind girl with book) */}
          {/* <div className="absolute w-80 h-80 bg-pink-300 rounded-full opacity-60 bottom-0 -z-10"></div> */}
          
          {/* Center Image - Girl with Book */}
          <div className="relative z-30 md:-ml-110 w-full md:w-auto">
            <img
              src="/src/assets/hero/landing0.png"
              alt="student learning"
              className="rounded-2xl md:rounded-4xl w-full h-full object-cover"
            />
          </div>

          {/* Top Right Image - Girl with Headphones (Blue Background) */}
          <div className="hidden md:block absolute top-15 right-0 z-20 transform -translate-y-1/2 translate-x-8">
            <div className="bg-blue-300 shadow-lg rounded-2xl overflow-hidden" style={{width: "405px", height: "350px"}}>
              <img
                src="/src/assets/hero/landing.jpg"
                alt="girl with headphones"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/*  Right Course Card - Grammar */}
          <div className="hidden md:block absolute -top-40 left-10 z-30 rounded-xl shadow-lg p-3 w-75" style={{backgroundColor: "#FCDCE2"}}>
            <div className="flex items-start gap-2">
              <span className="text-xl">✏️</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm leading-tight">Grammar Foundations for Writing</h4>
                <p className="text-xs text-gray-500 mt-1">12 LESSONS • 60 MINUTES</p>
              </div>
            </div>
          </div>

          {/* Bottom Right Course Card - Communication */}
          <div className="hidden md:block absolute bottom-47 right-10 z-30 rounded-xl shadow-lg p-3 w-70" style={{backgroundColor: "#DDF1FC"}}>
            <div className="flex items-start gap-2">
              <span className="text-xl">🎤</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm leading-tight">Master English Communication</h4>
                <p className="text-xs text-gray-500 mt-1">15 LESSONS • 50 MINUTES</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero