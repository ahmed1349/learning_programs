import { useNavigate, useLocation } from 'react-router-dom'
import { COURSES } from '../../../utils/constants'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogoClick = () => {
    navigate('/topics')
  }

  const handleTopicClick = (path) => {
    navigate(path)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <span className="logo-text">Origin Learning</span>
        </div>
        
        <div className="navbar-links">
          {COURSES.map((course) => {
            const isActive = location.pathname.startsWith(course.path)
            return (
              <button
                key={course.id}
                className={`navbar-link ${isActive ? 'active' : ''}`}
                onClick={() => handleTopicClick(course.path)}
              >
                {typeof course.logo === 'string' && !course.logo.includes('.') ? (
                  <span className="navbar-link-emoji">{course.logo}</span>
                ) : (
                  <img 
                    src={course.logo} 
                    alt={`${course.name} logo`} 
                    className="navbar-link-icon"
                  />
                )}
                <span className="navbar-link-text">{course.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

