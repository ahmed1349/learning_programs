import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import reactLogo from '../../assets/react.webp'
import './ReactTrack.css'

function ReactTrack() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <div className="track-container">
        <div className="track-header">
          <div className="track-logo">
            <img src={reactLogo} alt="React logo" className="track-logo-image" />
          </div>
          <h1 className="track-title">React.js Track</h1>
        </div>
        <p className="track-description">
          Welcome to the React.js learning track! Here you'll learn everything about React,
          from the basics to advanced concepts.
        </p>
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

