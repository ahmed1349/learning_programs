import Button from '../../ui/Button/Button'
import './CourseCard.css'

function CourseCard({ name, logo, description, onStart }) {
  // Check if logo is an image path (string ending with image extension) or emoji
  const isImageLogo = typeof logo === 'string' && (logo.endsWith('.png') || logo.endsWith('.webp') || logo.endsWith('.jpg') || logo.endsWith('.jpeg') || logo.endsWith('.svg'))

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
    <div className="course-card" onClick={handleCardClick}>
      <div className="course-logo">
        {isImageLogo ? (
          <img src={logo} alt={`${name} logo`} className="course-logo-image" />
        ) : (
          logo
        )}
      </div>
      <h3 className="course-name">{name}</h3>
      <p className="course-description">{description}</p>
      <Button onClick={handleButtonClick} variant="primary" size="medium">
        Start Now
      </Button>
    </div>
  )
}

export default CourseCard

