import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button/Button'
import './Article.css'

function ReactIntroProject() {
  const navigate = useNavigate()
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React Intro Project</h1>
        <p className="article-subtitle">Todo List App (1 Week)</p>
      </div>

      <div className="article-body">
        <section className="project-section">
          <div className="project-intro">
            <p className="intro-text">
              Your first real React project. Simple, but foundational.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🎯 Project Goal</h3>
            <p className="details-text">
              Build a simple Todo List application using React. This project will help you practice 
              the fundamental concepts of React including:
            </p>
            <ul className="requirements-list">
              <li>Functional components</li>
              <li>State management with hooks</li>
              <li>Event handling</li>
              <li>Component structure</li>
              <li>Basic user interactions</li>
            </ul>
            <p className="details-text">
              Master this, and you'll have a solid foundation for intermediate React concepts.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">📌 Project Description</h3>
            <p className="details-text">
              A Todo List App where users can:
            </p>
            <ul className="requirements-list">
              <li>Add new todos</li>
              <li>Mark todos as complete</li>
              <li>Delete todos</li>
              <li>See all todos in a list</li>
            </ul>
            <p className="details-text">
              Simple idea. Essential skills.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧩 Core Features (Must Have)</h3>
            <ul className="requirements-list">
              <li>Input field to add new todos</li>
              <li>Display list of todos</li>
              <li>Checkbox to mark todos as complete</li>
              <li>Delete button for each todo</li>
              <li>Unique ID for each todo</li>
              <li>Clean and user-friendly UI</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧠 Skills Applied (Intro Level)</h3>
            <ul className="requirements-list">
              <li>Functional components</li>
              <li>useState hook</li>
              <li>Event handlers (onClick, onChange)</li>
              <li>Array methods (map, filter)</li>
              <li>Conditional rendering</li>
              <li>Basic CSS styling</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🗂️ Suggested Folder Structure</h3>
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{`src/
 ├── components/
 │   ├── TodoList.jsx
 │   ├── TodoItem.jsx
 │   └── AddTodo.jsx
 ├── App.jsx
 ├── main.jsx
 └── styles.css`}</code>
              </pre>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">⏱️ Timeline (1 Week)</h3>
            
            <h4 className="subsection-title">Day 1</h4>
            <div className="timeline-item">
              <strong>Project Setup</strong>
              <ul className="nested-list">
                <li>Create a new React app using <code>create-react-app</code> or Vite</li>
                <li>Set up your project structure with components folder</li>
                <li>Create basic component files</li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 2</h4>
            <div className="timeline-item">
              <strong>Create TodoList Component</strong>
              <ul className="nested-list">
                <li>Create a functional component called <code>TodoList</code></li>
                <li>Use <code>useState</code> to manage the list of todos</li>
                <li>Initialize state with an empty array</li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 3</h4>
            <div className="timeline-item">
              <strong>Add Todo Functionality</strong>
              <ul className="nested-list">
                <li>Create an input field to add new todos</li>
                <li>Add a button to submit new todos</li>
                <li>Each todo should have a unique ID and text</li>
                <li>Handle form submission</li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 4</h4>
            <div className="timeline-item">
              <strong>Display & Complete Todos</strong>
              <ul className="nested-list">
                <li>Map through the todos array and display each todo</li>
                <li>Show the todo text in a list item</li>
                <li>Add a checkbox to mark todos as complete</li>
                <li>Update state when checkbox is clicked</li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 5</h4>
            <div className="timeline-item">
              <strong>Delete & Polish</strong>
              <ul className="nested-list">
                <li>Add a delete button for each todo</li>
                <li>Implement the delete function to remove todos from state</li>
                <li>Style your components using CSS</li>
                <li>Add hover effects and transitions</li>
                <li>Make it visually appealing and user-friendly</li>
              </ul>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">✅ Success Criteria</h3>
            <ul className="requirements-list">
              <li>✅ Use functional components only</li>
              <li>✅ Use React hooks (useState)</li>
              <li>✅ Handle user input and events correctly</li>
              <li>✅ Update state correctly</li>
              <li>✅ Clean and readable code</li>
              <li>✅ No console errors</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">⭐ Bonus Challenges</h3>
            <ul className="bonus-list">
              <li>Add local storage to persist todos</li>
              <li>Add edit functionality for existing todos</li>
              <li>Add filtering (All, Active, Completed)</li>
              <li>Add a counter showing total and completed todos</li>
              <li>Add animations for adding/removing todos</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This project will solidify your understanding of React basics. Take your time, 
              experiment, and don't hesitate to refer back to the Q&A section if you get stuck! 
              Remember, every expert was once a beginner. Start building!
            </p>
          </div>

          <div className="project-navigation">
            <Button 
              onClick={() => navigate('/react/intermediate')}
              variant="primary"
              size="large"
            >
              Next Lesson: Intermediate →
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReactIntroProject
