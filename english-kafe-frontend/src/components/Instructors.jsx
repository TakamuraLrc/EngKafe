function Instructors() {
  return (
    <section className="relative px-4 md:px-10 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn English with supportive instructors<br />
            who guide you step by step.
          </h2>
          <p className="text-sm md:text-lg max-w-4xl mx-auto whitespace-nowrap" style={{color: "#8B6F61"}}>
            Friendly teaching, real conversations, and confidence-building lessons — all designed to help you grow.
          </p>
        </div>

        {/* Our Instructors Label */}
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Our Instructors :</h3>
        </div>

        {/* Instructors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16 justify-items-center">
          
          {/* Instructor 1 - Pink Card */}
          <div className="relative group w-full md:w-96 rounded-3xl overflow-hidden">
            <div className="h-80 md:h-96" style={{backgroundColor: "#D4899B"}}>
              <img 
                src="/src/assets/instructors/instructor1.jpg" 
                alt="Ms.Patiln Jintanawong" 
                className="w-full h-full object-cover"
              />
              {/* Name and Credential */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end items-center p-6">
                <h4 className="text-white font-semibold text-lg text-center">Ms.Patiln Jintanawong</h4>
                <p className="text-white/90 text-sm text-center">MA:ENGLISH</p>
              </div>
            </div>
          </div>

          {/* Instructor 2 - Gray Card */}
          <div className="relative group w-full md:w-96 rounded-3xl overflow-hidden">
            <div className="h-80 md:h-96" style={{backgroundColor: "#C0C0C0"}}>
              <img 
                src="/src/assets/instructors/instructor2.jpg" 
                alt="Ms.Panida Mounjoy" 
                className="w-full h-full object-cover"
              />
              {/* Name and Credential */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end items-center p-6">
                <h4 className="text-white font-semibold text-lg text-center">Ms.Panida Mounjoy</h4>
                <p className="text-white/90 text-sm text-center">MA:ENGLISH</p>
              </div>
            </div>
          </div>

        </div>

        {/* What Will You Get Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-8">
            What will you get:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor: "#FCDCE2"}}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"/>
                  <polyline points="12 5 19 5 19 12"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Clear grammar explained in a simple way
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor: "#FCDCE2"}}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"/>
                  <polyline points="12 5 19 5 19 12"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Ask questions and grow your confidence
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor: "#FCDCE2"}}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"/>
                  <polyline points="12 5 19 5 19 12"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Step-by-step guidance from supportive instructors
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor: "#FCDCE2"}}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"/>
                  <polyline points="12 5 19 5 19 12"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Learn in a friendly, pressure-free environment
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Instructors
