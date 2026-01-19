import Button from '../../ui/Button/Button'
import './LevelCard.css'

function LevelCard({ level, icon, description, onStart, gradient, color }) {
  return (
    <div className="level-card" style={{ '--card-gradient': gradient, '--card-color': color }}>
      <div className="level-icon-wrapper">
        <div className="level-icon-bg"></div>
        <div className="level-icon">{icon}</div>
      </div>
      <h3 className="level-name">{level}</h3>
      <p className="level-description">{description}</p>
      <Button onClick={onStart} variant="primary" size="medium">
        Start Learning
      </Button>
    </div>
  )
}

export default LevelCard

