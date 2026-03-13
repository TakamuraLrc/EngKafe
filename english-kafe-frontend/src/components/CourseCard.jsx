function CourseCard({ image, title, description, price, rating, reviews }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex gap-3 p-3">
      {/* Image Container - Left */}
      <div className="relative w-64 bg-gray-300 overflow-hidden shrink-0 rounded-lg">
        <img 
          src={image} 
          alt="IELTS SPEAKING" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container - Right */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title as Badge */}
        <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full mb-1 w-fit">
          {title}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="text-xl font-bold text-gray-900 mb-1">
          {price}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(rating) ? "text-yellow-400 text-sm" : "text-gray-300 text-sm"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-600 text-xs">({reviews})</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-1.5 border-2 border-pink-400 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors">
            View details
          </button>
          <button className="flex-1 px-4 py-1.5 bg-pink-300 text-gray-900 font-semibold text-sm rounded-lg hover:bg-pink-400 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
