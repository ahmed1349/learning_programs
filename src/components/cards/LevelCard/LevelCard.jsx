import Button from '../../ui/Button/Button'
import './LevelCard.css'

function LevelCard({ level, icon, description, onStart, gradient, color }) {
  const handleCardClick = (e) => {
    // Only trigger if the click is not on the button
    if (e.target.closest('.btn')) {
      return
    }
    onStart()
  }

  const handleButtonClick = (e) => {
    e.stopPropagation() // Prevent card click from firing
    onStart()
  }

  return (
    <div 
      className="level-card" 
      style={{ '--card-gradient': gradient, '--card-color': color }}
      onClick={handleCardClick}
    >
      <div className="level-icon-wrapper">
        <div className="level-icon-bg"></div>
        <div className="level-icon">{icon}</div>
      </div>
      <h3 className="level-name">{level}</h3>
      <p className="level-description">{description}</p>
      <Button onClick={handleButtonClick} variant="primary" size="medium">
        Start Learning
      </Button>
    </div>
  )
}

export default LevelCard

