function MotivationBanner() {
  return (
    <section className="relative px-4 md:px-10 py-8 md:py-12" style={{backgroundColor: "#F5D4DC"}}>
      <div className="max-w-6xl mx-auto relative">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Left - Logo */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/src/assets/moti/EnglishkafeLogo-Transparent.png" 
              alt="English Kafé Logo" 
              className="w-40 h-40 md:w-48 md:h-48"
            />
          </div>

          {/* Center - Main Message */}
          <div className="md:col-span-2 md:pl-8 relative">
            {/* Top Left Icon - Open */}
            <div className="absolute -left-16 top-0">
              <img 
                src="/src/assets/moti/open.svg" 
                alt="Open Icon" 
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
            
            <div>
              {/* Top line */}
              <div className="w-32 h-1 bg-black mb-4"></div>
              
              {/* Message container */}
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight max-w-2xl">
                  Every small effort you make in learning English<br />
                  today builds the confidence and fluency you<br />
                  will proudly use tomorrow.
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-xl">
                  Learn smarter, progress quicker, and speak with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right Icon - Close */}
          <div className="absolute bottom-0 right-0 md:bottom-4 md:right-4">
            <img 
              src="/src/assets/moti/close.svg" 
              alt="Close Icon" 
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default MotivationBanner
