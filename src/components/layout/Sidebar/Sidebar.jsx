import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../../ui/Button/Button'
import './Sidebar.css'

function Sidebar({ 
  title, 
  logo, 
  articles, 
  globalArticles = [],
  backPath, 
  backLabel,
  color = '#61DAFB',
  trackType = 'react' // 'react' or 'django'
}) {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get navbar height and set as CSS variable
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        const height = navbar.offsetHeight
        document.documentElement.style.setProperty('--navbar-height', `${height}px`)
      }
    }

    updateNavbarHeight()
    window.addEventListener('resize', updateNavbarHeight)
    return () => window.removeEventListener('resize', updateNavbarHeight)
  }, [])
  
  // Check if mobile on mount and set initial state
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth > 1024
    }
    return true
  })

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 1024
    }
    return false
  })

  // Update state when window resizes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)
      if (mobile) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Group articles by level
  const groupedArticles = articles.reduce((acc, article) => {
    const levelMatch = article.title.match(/^(Intro|Intermediate|Advanced):\s*(.+)/)
    if (levelMatch) {
      const level = levelMatch[1]
      const lessonTitle = levelMatch[2]
      
      if (!acc[level]) {
        acc[level] = []
      }
      acc[level].push({
        ...article,
        lessonTitle
      })
    }
    return acc
  }, {})

  // Define level order with Intro first
  const levelOrder = ['Intro', 'Intermediate', 'Advanced']

  // Get level class based on level and track type
  const getLevelClass = (level) => {
    if (level === 'Intro') {
      return trackType === 'react' ? 'intro-level-react' : 'intro-level-django'
    } else if (level === 'Intermediate') {
      return trackType === 'react' ? 'intermediate-level-react' : 'intermediate-level-django'
    } else {
      return trackType === 'react' ? 'advanced-level-react' : 'advanced-level-django'
    }
  }

  return (
    <>
      {isOpen && isMobile && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <button 
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <FontAwesomeIcon 
          icon={isOpen ? faAngleLeft : faAngleRight} 
          className="toggle-icon"
        />
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`} style={{ '--sidebar-color': color }}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">{title}</h2>
        </div>
      
      <nav className="sidebar-nav">
        {globalArticles.length > 0 && (
          <ul className="level-list global-articles-list">
            <li className="level-group">
              <ul className="article-list">
                {globalArticles.map((article) => {
                  const isActive = location.pathname === article.path
                  return (
                    <li key={article.id} className="article-item">
                      <button
                        className={`article-link ${isActive ? 'active' : ''} global-article-link`}
                        onClick={() => navigate(article.path)}
                      >
                        {article.title}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        )}
        <ul className="level-list">
          {levelOrder.map((level) => {
            if (!groupedArticles[level]) return null
            
            return (
              <li key={level} className="level-group">
                <div className={`level-header ${getLevelClass(level)}`}>
                  {level}
                </div>
                <ul className="article-list">
                  {groupedArticles[level].map((article) => {
                    const isActive = location.pathname === article.path
                    return (
                      <li key={article.id} className="article-item">
                        <button
                          className={`article-link ${isActive ? 'active' : ''}`}
                          onClick={() => navigate(article.path)}
                        >
                          {article.lessonTitle}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>

      {backPath && (
        <div className="sidebar-footer">
          <Button 
            onClick={() => navigate(backPath)} 
            variant="outline"
            size="small"
          >
            {backLabel || '← Back'}
          </Button>
        </div>
      )}
      </aside>
    </>
  )
}

export default Sidebar



