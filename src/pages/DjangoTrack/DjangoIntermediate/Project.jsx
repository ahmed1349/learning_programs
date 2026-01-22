import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button/Button'
import './Article.css'

function DjangoIntermediateProject() {
  const navigate = useNavigate()
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Intermediate Project</h1>
        <p className="article-subtitle">Task Manager API + React Dashboard (2 Weeks)</p>
      </div>

      <div className="article-body">
        <section className="project-section">
          <div className="project-details">
            <h3 className="details-title">🎯 Project Goal</h3>
            <p className="details-text">
              Build a clean CRUD system that proves the developer understands:
            </p>
            <ul className="requirements-list">
              <li>React fundamentals</li>
              <li>Django REST basics</li>
              <li>Proper data flow</li>
              <li>Authentication</li>
              <li>Reasonable structure</li>
            </ul>
            <p className="details-text">
              If someone can't finish this well, they're not ready for "advanced".
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">📌 Project Description</h3>
            <p className="details-text">
              A Task Management System where users can:
            </p>
            <ul className="requirements-list">
              <li>Register & login</li>
              <li>Create tasks</li>
              <li>Update task status</li>
              <li>View tasks in a React dashboard</li>
            </ul>
            <p className="details-text">
              No fancy features. Just correct architecture.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧩 Core Features (Must Have)</h3>
            
            <h4 className="subsection-title">Backend (Django + DRF)</h4>
            <ul className="requirements-list">
              <li>User registration & login</li>
              <li>JWT authentication</li>
            </ul>
            
            <h5 className="subsubsection-title">Task model:</h5>
            <ul className="nested-list">
              <li>title</li>
              <li>description</li>
              <li>status (todo / in_progress / done)</li>
              <li>owner</li>
            </ul>
            
            <ul className="requirements-list">
              <li>CRUD APIs</li>
              <li>Permissions: users only see their own tasks</li>
              <li>Pagination</li>
            </ul>

            <h4 className="subsection-title">Frontend (React)</h4>
            <ul className="requirements-list">
              <li>Login / logout</li>
              <li>Task list page</li>
              <li>Create / update task</li>
              <li>Status filter</li>
              <li>Proper API error handling</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧠 Skills Applied (Intermediate Level)</h3>
            <ul className="requirements-list">
              <li>Django models & serializers</li>
              <li>DRF views & permissions</li>
              <li>React state & hooks</li>
              <li>API integration</li>
              <li>Basic project structure</li>
              <li>Authentication flow</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🗂️ Suggested Structure</h3>
            
            <h4 className="subsection-title">Backend</h4>
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{`backend/
 ├── apps/
 │   ├── users/
 │   └── tasks/
 ├── config/
 └── manage.py`}</code>
              </pre>
            </div>

            <h4 className="subsection-title">Frontend</h4>
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{`frontend/
 ├── src/
 │   ├── pages/
 │   ├── components/
 │   ├── services/
 │   └── hooks/`}</code>
              </pre>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">⏱️ Timeline (2 Weeks)</h3>
            
            <h4 className="subsection-title">Week 1</h4>
            <div className="timeline-item">
              <strong>Day 1–2</strong>
              <ul className="nested-list">
                <li>Project setup</li>
                <li>User model & auth</li>
                <li>Basic task model</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 3–4</strong>
              <ul className="nested-list">
                <li>CRUD APIs</li>
                <li>Permissions</li>
                <li>Pagination</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 5</strong>
              <ul className="nested-list">
                <li>API testing (Postman)</li>
              </ul>
            </div>

            <h4 className="subsection-title">Week 2</h4>
            <div className="timeline-item">
              <strong>Day 6–7</strong>
              <ul className="nested-list">
                <li>React setup</li>
                <li>Auth flow</li>
                <li>API service layer</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 8–9</strong>
              <ul className="nested-list">
                <li>Task list & create/edit UI</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 10</strong>
              <ul className="nested-list">
                <li>Error handling</li>
                <li>Code cleanup</li>
              </ul>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">✅ Evaluation Criteria</h3>
            <ul className="requirements-list">
              <li>Clean API structure</li>
              <li>Proper permissions</li>
              <li>No business logic in views</li>
              <li>Clear React components</li>
              <li>Reasonable commits</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This intermediate project will solidify your understanding of Django REST Framework and React integration. 
              Focus on clean code, proper authentication, and correct data flow. Master this, and you'll be ready for advanced challenges!
            </p>
          </div>

          <div className="project-navigation">
            <Button 
              onClick={() => navigate('/django/advanced')}
              variant="primary"
              size="large"
            >
              Next Lesson: Advanced →
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DjangoIntermediateProject
