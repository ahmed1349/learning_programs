import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import LevelCard from '../../components/cards/LevelCard/LevelCard'
import Navbar from '../../components/layout/Navbar/Navbar'
import jsLogo from '../../assets/js.png'
import './JsTrack.css'

function JsTrack() {
  const navigate = useNavigate()

  const levels = [
    {
      id: 1,
      level: 'JavaScript Intro',
      icon: '🌱',
      description: 'Learn the basics of JavaScript including variables, functions, and control structures. Perfect for beginners.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
    },
    {
      id: 2,
      level: 'JavaScript Intermediate',
      icon: '⚡',
      description: 'Dive deeper into JavaScript with objects, arrays, DOM manipulation, and modern ES6+ features.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f5576c',
    },
    {
      id: 3,
      level: 'JavaScript Advanced',
      icon: '💎',
      description: 'Master advanced concepts like async/await, closures, design patterns, and performance optimization.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
    },
  ]

  const handleLevelStart = (levelId) => {
    const routes = {
      1: '/javascript/intro',
      2: '/javascript/intermediate',
      3: '/javascript/advanced',
    }
    navigate(routes[levelId] || '/javascript')
  }

  return (
    <div className="app">
      <Navbar />
      <div className="track-container">
        <div className="track-header">
          <div className="track-header-content">
            <div className="track-logo">
              <img src={jsLogo} alt="JavaScript logo" className="track-logo-image" />
            </div>
            <h1 className="track-title">JavaScript Track</h1>
          </div>
        </div>
        
        
        <div className="levels-grid">
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              level={level.level}
              icon={level.icon}
              description={level.description}
              onStart={() => handleLevelStart(level.id)}
              gradient={level.gradient}
              color={level.color}
            />
          ))}
        </div>

        <div className="track-actions">
          <Button onClick={() => navigate('/topics')} variant="outline">
            ← Back to Topics
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JsTrack

