import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import reactLogo from '../../assets/react.webp'
import './ReactIntermediate.css'

function ReactIntermediate() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <Navbar />
      <div className="level-page-container">
        <div className="level-header">
          <div className="level-logo">
            <img src={reactLogo} alt="React logo" className="level-logo-image" />
          </div>
          <h1 className="level-title">React.js Track — Intermediate</h1>
        </div>

        <div className="level-content">
          <section className="content-section">
            <h2 className="section-title">Coming Soon</h2>
            <p className="section-text">
              The React Intermediate content is being prepared. Check back soon!
            </p>
          </section>
        </div>

        <div className="level-actions">
          <Button onClick={() => navigate('/react')} variant="outline">
            ← Back to React Track
          </Button>
          <Button onClick={() => navigate('/react/advanced')} variant="primary">
            Next: Advanced →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReactIntermediate

