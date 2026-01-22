import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import LevelCard from '../../components/cards/LevelCard/LevelCard'
import Navbar from '../../components/layout/Navbar/Navbar'
import djangoLogo from '../../assets/django.png'
import './DjangoTrack.css'

function DjangoTrack() {
  const navigate = useNavigate()

  const levels = [
    {
      id: 1,
      level: 'Django Intro',
      icon: '🐍',
      description: 'Learn the fundamentals of Django including models, views, templates, and URLs. Perfect for beginners starting with Django web development.',
      gradient: 'linear-gradient(135deg, #092E20 0%, #0D4A35 100%)',
      color: '#092E20',
    },
    {
      id: 2,
      level: 'Django Intermediate',
      icon: '⚙️',
      description: 'Dive deeper into Django with forms, authentication, admin customization, and REST APIs. Build more complex web applications.',
      gradient: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
      color: '#2E7D32',
    },
    {
      id: 3,
      level: 'Django Advanced',
      icon: '🏗️',
      description: 'Master advanced Django patterns, deployment, performance optimization, testing, and building scalable Django applications.',
      gradient: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)',
      color: '#1B5E20',
    },
  ]

  const handleLevelStart = (levelId) => {
    const routes = {
      1: '/django/intro/django-basics',
      2: '/django/intermediate/intermediate-qa',
      3: '/django/advanced/advanced-qa',
    }
    navigate(routes[levelId] || '/django')
  }

  return (
    <div className="app">
      <Navbar />
      <div className="track-container">
        <div className="track-header">
          <div className="track-header-content">
            <div className="track-logo">
              <img src={djangoLogo} alt="Django logo" className="track-logo-image" />
            </div>
            <h1 className="track-title">Django Track</h1>
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

export default DjangoTrack

