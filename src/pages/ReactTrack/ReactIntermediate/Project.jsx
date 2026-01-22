import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button/Button'
import './Article.css'

function ReactIntermediateProject() {
  const navigate = useNavigate()
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React Intermediate Project</h1>
        <p className="article-subtitle">Personal Notes Dashboard (2 Weeks)</p>
      </div>

      <div className="article-body">
        <section className="project-section">
          <div className="project-details">
            <h3 className="details-title">🎯 Project Goal</h3>
            <p className="details-text">
              Teach real React fundamentals:
            </p>
            <ul className="requirements-list">
              <li>Component thinking</li>
              <li>State management</li>
              <li>Hooks</li>
              <li>API integration</li>
              <li>Clean folder structure</li>
            </ul>
            <p className="details-text">
              If someone can't build this cleanly, "advanced React" is fantasy.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">📌 Project Description</h3>
            <p className="details-text">
              A Notes App where users can:
            </p>
            <ul className="requirements-list">
              <li>Create notes</li>
              <li>Edit notes</li>
              <li>Delete notes</li>
              <li>Search notes</li>
              <li>Persist data using a fake API or local storage</li>
            </ul>
            <p className="details-text">
              Simple idea. Real execution.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧩 Core Features (Must Have)</h3>
            <ul className="requirements-list">
              <li>Notes list</li>
              <li>Create / edit note</li>
              <li>Delete note</li>
              <li>Search by title</li>
              <li>Save notes (LocalStorage or JSON server)</li>
              <li>Reusable components</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧠 Skills Applied (Intermediate)</h3>
            <ul className="requirements-list">
              <li>useState</li>
              <li>useEffect</li>
              <li>Controlled inputs</li>
              <li>Lifting state up</li>
              <li>Component reuse</li>
              <li>Basic folder structure</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🗂️ Suggested Folder Structure</h3>
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{`src/
 ├── components/
 │   ├── NoteCard.jsx
 │   ├── NoteForm.jsx
 │   └── SearchBar.jsx
 ├── pages/
 │   └── NotesPage.jsx
 ├── hooks/
 │   └── useNotes.js
 ├── services/
 │   └── notesService.js
 ├── App.jsx
 └── main.jsx`}</code>
              </pre>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">⏱️ Timeline (2 Weeks)</h3>
            
            <h4 className="subsection-title">Week 1</h4>
            <div className="timeline-item">
              <strong>Day 1</strong>
              <ul className="nested-list">
                <li>Project setup</li>
                <li>Layout & components</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 2–3</strong>
              <ul className="nested-list">
                <li>Notes CRUD</li>
                <li>State management</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 4</strong>
              <ul className="nested-list">
                <li>Search feature</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 5</strong>
              <ul className="nested-list">
                <li>Save to LocalStorage</li>
              </ul>
            </div>

            <h4 className="subsection-title">Week 2</h4>
            <div className="timeline-item">
              <strong>Day 6–7</strong>
              <ul className="nested-list">
                <li>Refactor into reusable components</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 8</strong>
              <ul className="nested-list">
                <li>Custom hook (useNotes)</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 9</strong>
              <ul className="nested-list">
                <li>UI polish & edge cases</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 10</strong>
              <ul className="nested-list">
                <li>Code cleanup & README</li>
              </ul>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">✅ Success Criteria</h3>
            <ul className="requirements-list">
              <li>No duplicated logic</li>
              <li>Clean components</li>
              <li>State flows correctly</li>
              <li>Readable code</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This intermediate project will solidify your understanding of React fundamentals including hooks, 
              state management, and component architecture. Focus on clean code, reusable components, and proper 
              state flow. Master this, and you'll be ready for advanced React concepts!
            </p>
          </div>

          <div className="project-navigation">
            <Button 
              onClick={() => navigate('/react/advanced')}
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

export default ReactIntermediateProject
