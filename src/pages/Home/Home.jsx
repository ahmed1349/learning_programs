import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="app home-page">
      <div className="home-container">
        <h1 className="main-title">Learning programs</h1>
        <p className="subtitle">Master Programming Skills at Your Own Pace</p>
        <Button onClick={() => navigate('/topics')} variant="primary" size="large">
          Start to Learn
        </Button>
      </div>
    </div>
  )
}

export default Home

