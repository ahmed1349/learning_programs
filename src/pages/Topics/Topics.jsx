import { useNavigate } from 'react-router-dom'
import CourseCard from '../../components/cards/CourseCard/CourseCard'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import { COURSES } from '../../utils/constants'
import './Topics.css'

function Topics() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <Navbar />
      <div className="courses-container">
        <h2 className="courses-title">Choose Your Learning Path</h2>
        <div className="courses-grid">
          {COURSES.map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              logo={course.logo}
              description={course.description}
              onStart={() => navigate(course.path)}
            />
          ))}
        </div>
        <Button onClick={() => navigate('/')} variant="outline">
          ← Back to Home
        </Button>
      </div>
    </div>
  )
}

export default Topics

