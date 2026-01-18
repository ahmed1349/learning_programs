import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import './DjangoTrack.css'

function DjangoTrack() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <div className="track-container">
        <div className="track-header">
          <div className="track-logo">🐍</div>
          <h1 className="track-title">Django Track</h1>
        </div>
        <p className="track-description">
          Welcome to the Django learning track! Learn how to build powerful web applications
          using Django, a high-level Python web framework.
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

export default DjangoTrack

