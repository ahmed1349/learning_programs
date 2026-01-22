import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button/Button'
import './Article.css'

function ReactAdvancedProject() {
  const navigate = useNavigate()
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React Advanced Project</h1>
        <p className="article-subtitle">Mini E-Commerce Frontend (2 Weeks)</p>
      </div>

      <div className="article-body">
        <section className="project-section">
          <div className="project-intro">
            <p className="intro-text">
              Still simple. Just one level deeper.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🎯 Project Goal</h3>
            <p className="details-text">
              Teach advanced React thinking:
            </p>
            <ul className="requirements-list">
              <li>Global state</li>
              <li>Performance awareness</li>
              <li>Better architecture</li>
              <li>Real UI flow</li>
            </ul>
            <p className="details-text">
              No backend. No Redux overload. Just good React.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">📌 Project Description</h3>
            <p className="details-text">
              A mini store where users can:
            </p>
            <ul className="requirements-list">
              <li>View products</li>
              <li>Add/remove items to cart</li>
              <li>Update quantities</li>
              <li>See total price</li>
              <li>Persist cart state</li>
            </ul>
            <p className="details-text">
              This is React in the real world.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧩 Core Features (Must Have)</h3>
            <ul className="requirements-list">
              <li>Product list</li>
              <li>Product details</li>
              <li>Cart system</li>
              <li>Quantity update</li>
              <li>Cart persistence</li>
              <li>Loading & error states</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧠 Skills Applied (Advanced)</h3>
            <ul className="requirements-list">
              <li>useContext</li>
              <li>useReducer</li>
              <li>useMemo</li>
              <li>useCallback</li>
              <li>Custom hooks</li>
              <li>Separation of concerns</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🗂️ Suggested Folder Structure</h3>
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{`src/
 ├── components/
 │   ├── ProductCard.jsx
 │   ├── CartItem.jsx
 ├── context/
 │   └── CartContext.jsx
 ├── hooks/
 │   └── useCart.js
 ├── pages/
 │   ├── ProductsPage.jsx
 │   └── CartPage.jsx
 ├── services/
 │   └── productsService.js
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
                <li>UI & structure</li>
                <li>Static products</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 2–3</strong>
              <ul className="nested-list">
                <li>Cart logic with useReducer</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 4</strong>
              <ul className="nested-list">
                <li>Context integration</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 5</strong>
              <ul className="nested-list">
                <li>Cart persistence</li>
              </ul>
            </div>

            <h4 className="subsection-title">Week 2</h4>
            <div className="timeline-item">
              <strong>Day 6–7</strong>
              <ul className="nested-list">
                <li>Performance optimization hooks</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 8</strong>
              <ul className="nested-list">
                <li>Custom hooks refactor</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 9</strong>
              <ul className="nested-list">
                <li>Error handling & empty states</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 10</strong>
              <ul className="nested-list">
                <li>Final polish & documentation</li>
              </ul>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">✅ Success Criteria (Non-Negotiable)</h3>
            <ul className="requirements-list">
              <li>No prop drilling chaos</li>
              <li>Reducer logic is pure</li>
              <li>Components are small</li>
              <li>Performance hooks used correctly (not blindly)</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This advanced project will test your understanding of React's advanced features including context, 
              reducers, and performance optimization. Focus on clean architecture, proper state management, and 
              performance-aware code. Build something that demonstrates real-world React expertise!
            </p>
          </div>

          <div className="project-navigation">
            <Button 
              onClick={() => navigate('/react')}
              variant="primary"
              size="large"
            >
              ← Back to React Track
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReactAdvancedProject
