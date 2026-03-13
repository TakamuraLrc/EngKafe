import logo from "../assets/Nav/EnglishkafeLogo-Transparent.png"
import { useNavigate, useLocation } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-2 bg-white shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="English Kafe Logo" className="h-12 w-auto" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li 
          onClick={() => navigate('/')}
          className="text-black px-4 py-2 rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all" 
          style={{backgroundColor: isActive('/') ? "#CDEAFA" : "transparent"}}
        >
          Home
        </li>
        <li 
          onClick={() => navigate('/courses')}
          className="text-black px-4 py-2 rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all"
          style={{backgroundColor: isActive('/courses') ? "#CDEAFA" : "transparent"}}
        >
          Courses
        </li>
        <li 
          onClick={() => navigate('/blog')}
          className="text-black px-4 py-2 rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all"
          style={{backgroundColor: isActive('/blog') ? "#CDEAFA" : "transparent"}}
        >
          Blogs
        </li>
        <li className="text-black px-4 py-2 cursor-pointer hover:opacity-70 transition-opacity">Services</li>
      </ul>

      {/* Login */}
      <button 
        onClick={() => navigate('/login')}
        className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        login
      </button>

    </nav>
  )
}

export default Navbar