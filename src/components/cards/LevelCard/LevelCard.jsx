import Button from '../../ui/Button/Button'
import './LevelCard.css'

function LevelCard({ level, icon, description, onStart }) {
  return (
    <div className="level-card">
      <div className="level-icon">{icon}</div>
      <h3 className="level-name">{level}</h3>
      <p className="level-description">{description}</p>
      <Button onClick={onStart} variant="primary" size="medium">
        Start Learning
      </Button>
    </div>
  )
}

export default LevelCard

