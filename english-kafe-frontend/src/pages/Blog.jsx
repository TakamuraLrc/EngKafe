import Navbar from '../components/Navbar'
import logo from '../assets/Nav/EnglishkafeLogo-Transparent.png'

function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Featured Blog Article Section */}
      <div className="px-4 md:px-10 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Main Article - Left Side (2 cols) */}
            <div className="md:col-span-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                How to Build Real English Confidence Without Memorizing Grammar Rules
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Many learners believe fluency comes from memorizing grammar charts — but real confidence develops when grammar becomes a practical tool, not a rigid rulebook. When learners shift their focus from perfection to communication, English starts to feel natural instead of ........
              </p>

              {/* Author Info and Read More Button */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img 
                    src={logo}
                    alt="English Kafe" 
                    className="h-10 w-auto"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">English Kafe</p>
                    <p className="text-gray-600 text-sm">2/3/2025</p>
                  </div>
                </div>
                <button className="bg-pink-300 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-400 transition-colors flex items-center gap-2">
                  Read More
                  <span>↓</span>
                </button>
              </div>

              {/* Featured Image */}
              <div className="mt-8">
                <img 
                  src="/src/assets/courses/daily english.jpg" 
                  alt="Featured article"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Recent Articles Sidebar - Right Side (1 col) */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recents</h2>
              
              <div className="space-y-6">
                {/* Recent Article 1 */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Why Most English Learners Plateau — And How to Break Through
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Progress often slows when learners repeat the same study habits. Discover smarter practice techniques that help you move beyond the intermediate stage with
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <img 
                          src={logo}
                          alt="English Kafe" 
                          className="h-5 w-auto"
                        />
                        <span className="text-sm font-semibold text-gray-900">English Kafe</span>
                      </div>
                      <p className="text-gray-600 text-xs">2/3/2025</p>
                    </div>
                    <a href="#" className="text-gray-600 text-sm hover:text-gray-900">read more</a>
                  </div>
                </div>

                {/* Recent Article 2 */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Speaking English Smoothly: Training Your Brain, Not Just Your Vocabulary
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Fluency is about processing speed and comfort. Learn exercises that retrain your thinking patterns for more natural speech.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <img 
                          src={logo}
                          alt="English Kafe" 
                          className="h-5 w-auto"
                        />
                        <span className="text-sm font-semibold text-gray-900">English Kafe</span>
                      </div>
                      <p className="text-gray-600 text-xs">2/3/2025</p>
                    </div>
                    <a href="#" className="text-gray-600 text-sm hover:text-gray-900">read more</a>
                  </div>
                </div>

                {/* Recent Article 3 */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Common Grammar Mistakes That Quietly Hurt Your Communication
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Small grammar errors can change meaning and clarity. Here are the most important fixes that instantly improve your English.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <img 
                          src={logo}
                          alt="English Kafe" 
                          className="h-5 w-auto"
                        />
                        <span className="text-sm font-semibold text-gray-900">English Kafe</span>
                      </div>
                      <p className="text-gray-600 text-xs">2/3/2025</p>
                    </div>
                    <a href="#" className="text-gray-600 text-sm hover:text-gray-900">read more</a>
                  </div>
                </div>

                {/* Recent Article 4 */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Study Smarter: How Short Daily Practice Beats Long Study Sessions
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Consistency builds stronger language memory than occasional long sessions. This guide shows how to structure smarter daily learning.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <img 
                          src={logo}
                          alt="English Kafe" 
                          className="h-5 w-auto"
                        />
                        <span className="text-sm font-semibold text-gray-900">English Kafe</span>
                      </div>
                      <p className="text-gray-600 text-xs">2/3/2025</p>
                    </div>
                    <a href="#" className="text-gray-600 text-sm hover:text-gray-900">read more</a>
                  </div>
                </div>

                {/* Recent Article 5 */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    What Are Effective Ways to Remember and Use New English Vocabulary Daily?
                  </h3>
                  <div className="flex items-center gap-2">
                    <img 
                      src={logo}
                      alt="English Kafe" 
                      className="h-5 w-auto"
                    />
                    <span className="text-sm font-semibold text-gray-900">English Kafe</span>
                  </div>
                  <p className="text-gray-600 text-xs">2/3/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

