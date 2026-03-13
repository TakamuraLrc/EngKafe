import CourseCard from "./CourseCard"

function Courses() {
  return (
    <section className="px-4 md:px-10 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 pb-3 border-b-4 border-black">
            Our Courses
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CourseCard
            image="/src/assets/courses/ielts speaking.jpg"
            title="IELTS Speaking"
            description="Build confidence with guided speaking practice and real exam-style questions."
            price="3000 บาท "
            rating={4.5}
            reviews="4.5"
          />
          <CourseCard
            image="/src/assets/courses/ielts writing.jpg"
            title="IELTS WRITING"
            description="Clear structure, grammar guidance, and scoring strategies for stronger essays."
            price="4500 บาท "
            rating={4.5}
            reviews="4.5"
          />
          <CourseCard
            image="/src/assets/courses/daily english.jpg"
            title="Everyday English"
            description="Practice real-life conversations and vocabulary for daily communication."
            price="3500 บาท "
            rating={5}
            reviews="5.0"
          />
          <CourseCard
            image="/src/assets/courses/grammer.jpg"
            title="Grammar Essentials"
            description="Understand grammar simply and apply it confidently in speaking and writing."
            price="2500 บาท "
            rating={4.5}
            reviews="4.5"
          />
        </div>

        {/* View All Courses Button */}
        <div className="flex justify-center mt-8">
          <button className="font-semibold px-6 py-3 rounded-xl hover:opacity-80 transition-opacity flex items-center gap-2" style={{backgroundColor: "#B5E0F8"}}>
            View All Courses
            <span className="text-lg text-black">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses
