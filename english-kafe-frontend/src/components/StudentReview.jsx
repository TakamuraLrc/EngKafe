import TestimonialVideo from "./TestimonialVideo"
import student1 from "../assets/review/its-you-congratulations-smiling-asian-corporate-woman-ceo-manager-suit-glasses-pointing-finge.jpg"
import student2 from "../assets/review/young-chinese-woman-standing-white-background-showing-palm-hand-doing-ok-gesture-with-thumbs-up-smiling-happy-cheerful.jpg"

function StudentReview() {
  return (
    <section className="px-4 md:px-10 py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear real experiences from learners who improved their skills and confidence with our courses.
          </p>
        </div>

        {/* Testimonial Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialVideo
            image={student1}
            backgroundColor="bg-gray-200"
          />
          <TestimonialVideo
            image={student2}
            backgroundColor="bg-pink-300"
          />
        </div>
      </div>
    </section>
  )
}

export default StudentReview
