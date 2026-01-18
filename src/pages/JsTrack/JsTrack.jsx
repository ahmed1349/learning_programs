import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import LevelCard from '../../components/cards/LevelCard/LevelCard'
import jsLogo from '../../assets/js.png'
import './JsTrack.css'

function JsTrack() {
  const navigate = useNavigate()

  const levels = [
    {
      id: 1,
      level: 'JavaScript Intro',
      icon: '',
      description: 'Learn the basics of JavaScript including variables, functions, and control structures. Perfect for beginners.',
    },
    {
      id: 2,
      level: 'JavaScript Intermediate',
      icon: '',
      description: 'Dive deeper into JavaScript with objects, arrays, DOM manipulation, and modern ES6+ features.',
    },
    {
      id: 3,
      level: 'JavaScript Advanced',
      icon: '',
      description: 'Master advanced concepts like async/await, closures, design patterns, and performance optimization.',
    },
  ]

  const handleLevelStart = (levelId) => {
    // TODO: Navigate to specific level content
    console.log(`Starting level ${levelId}`)
  }

  return (
    <div className="app">
      <div className="track-container">
        <div className="track-header">
          <div className="track-logo">
            <img src={jsLogo} alt="JavaScript logo" className="track-logo-image" />
          </div>
          <h1 className="track-title">JavaScript Track</h1>
        </div>
        <p className="track-description">
          Choose your learning level and start your JavaScript journey. Progress from basics to advanced concepts.
        </p>
        
        <div className="levels-grid">
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              level={level.level}
              icon={level.icon}
              description={level.description}
              onStart={() => handleLevelStart(level.id)}
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

