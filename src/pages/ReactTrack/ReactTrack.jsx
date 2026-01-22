import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import LevelCard from '../../components/cards/LevelCard/LevelCard'
import Navbar from '../../components/layout/Navbar/Navbar'
import reactLogo from '../../assets/react.webp'
import './ReactTrack.css'

function ReactTrack() {
  const navigate = useNavigate()

  const levels = [
    {
      id: 1,
      level: 'React Intro',
      icon: '⚛️',
      description: 'Learn the fundamentals of React including components, JSX, props, and state. Perfect for beginners starting with React.',
      gradient: 'linear-gradient(135deg, #61DAFB 0%, #4A90E2 100%)',
      color: '#61DAFB',
    },
    {
      id: 2,
      level: 'React Intermediate',
      icon: '🚀',
      description: 'Dive deeper into React with hooks, context API, routing, and state management. Build more complex applications.',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
      color: '#FF6B6B',
    },
    {
      id: 3,
      level: 'React Advanced',
      icon: '🎯',
      description: 'Master advanced React patterns, performance optimization, testing, and building scalable React applications.',
      gradient: 'linear-gradient(135deg, #9D50BB 0%, #6E48AA 100%)',
      color: '#9D50BB',
    },
  ]

  const handleLevelStart = (levelId) => {
    const routes = {
      1: '/react/intro/react-basics',
      2: '/react/intermediate/intermediate-qa',
      3: '/react/advanced/react-and-django',
    }
    navigate(routes[levelId] || '/react')
  }

  return (
    <div className="app">
      <Navbar />
      <div className="track-container">
        <div className="track-header">
          <div className="track-header-content">
            <div className="track-logo">
              <img src={reactLogo} alt="React logo" className="track-logo-image" />
            </div>
            <h1 className="track-title">React.js Track</h1>
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

export default ReactTrack

