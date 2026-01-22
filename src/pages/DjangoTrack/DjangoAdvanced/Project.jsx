import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button/Button'
import './Article.css'

function DjangoAdvancedProject() {
  const navigate = useNavigate()
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Advanced Project</h1>
        <p className="article-subtitle">Production-Ready Order & Inventory System (2 Weeks)</p>
      </div>

      <div className="article-body">
        <section className="project-section">
          <div className="project-intro">
            <p className="intro-text">
              This is where developers earn respect.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🎯 Project Goal</h3>
            <p className="details-text">
              Build a real backend system with:
            </p>
            <ul className="requirements-list">
              <li>Business rules</li>
              <li>Performance considerations</li>
              <li>Background tasks</li>
              <li>Clean architecture</li>
              <li>React + Django integration done right</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">📌 Project Description</h3>
            <p className="details-text">
              An Order & Inventory Management System where:
            </p>
            <ul className="requirements-list">
              <li>Admins manage products & stock</li>
              <li>Users place orders</li>
              <li>Stock updates automatically</li>
              <li>Notifications are handled asynchronously</li>
            </ul>
            <p className="details-text">
              This simulates real production logic.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧩 Core Features (Must Have)</h3>
            
            <h4 className="subsection-title">Backend (Django Advanced)</h4>
            
            <h5 className="subsubsection-title">Models</h5>
            <div className="model-list">
              <div className="model-item">
                <strong>Product</strong>
                <ul className="nested-list">
                  <li>name</li>
                  <li>price</li>
                  <li>stock</li>
                </ul>
              </div>
              <div className="model-item">
                <strong>Order</strong>
                <ul className="nested-list">
                  <li>user</li>
                  <li>status</li>
                  <li>total_price</li>
                </ul>
              </div>
              <div className="model-item">
                <strong>OrderItem</strong>
                <ul className="nested-list">
                  <li>product</li>
                  <li>quantity</li>
                </ul>
              </div>
            </div>

            <h5 className="subsubsection-title">Business Rules</h5>
            <ul className="requirements-list">
              <li>Stock cannot go negative</li>
              <li>Order total is calculated server-side</li>
              <li>Order creation is atomic (transaction)</li>
              <li>Orders fail if stock is insufficient</li>
            </ul>

            <h5 className="subsubsection-title">Advanced Backend Requirements</h5>
            <ul className="requirements-list">
              <li>Custom Managers & QuerySets</li>
              <li>Object-level permissions</li>
              <li>Database transactions</li>
              <li>Indexing</li>
              <li>Celery background tasks</li>
              <li>Redis caching</li>
              <li>Optimized queries (select_related)</li>
            </ul>

            <h4 className="subsection-title">Frontend (React)</h4>
            <ul className="requirements-list">
              <li>Product listing</li>
              <li>Order creation</li>
              <li>Order history</li>
              <li>Loading states</li>
              <li>Error states</li>
              <li>Token-based auth</li>
            </ul>
            <p className="details-text">
              No Redux required — but architecture matters.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧠 Skills Applied (Advanced Level)</h3>
            <ul className="requirements-list">
              <li>Django architecture</li>
              <li>Business logic isolation</li>
              <li>Performance optimization</li>
              <li>Background processing</li>
              <li>Secure API design</li>
              <li>Production mindset</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🗂️ Suggested Structure</h3>
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{`backend/
 ├── apps/
 │   ├── users/
 │   ├── products/
 │   ├── orders/
 │   ├── notifications/
 ├── config/
 ├── celery.py`}</code>
              </pre>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">⏱️ Timeline (2 Weeks)</h3>
            
            <h4 className="subsection-title">Week 1</h4>
            <div className="timeline-item">
              <strong>Day 1</strong>
              <ul className="nested-list">
                <li>System design</li>
                <li>Data modeling</li>
                <li>API contracts</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 2–3</strong>
              <ul className="nested-list">
                <li>Core models</li>
                <li>Custom managers</li>
                <li>Permissions</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 4</strong>
              <ul className="nested-list">
                <li>Order logic</li>
                <li>Transactions</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 5</strong>
              <ul className="nested-list">
                <li>API testing</li>
                <li>Query optimization</li>
              </ul>
            </div>

            <h4 className="subsection-title">Week 2</h4>
            <div className="timeline-item">
              <strong>Day 6</strong>
              <ul className="nested-list">
                <li>React setup</li>
                <li>Auth integration</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 7–8</strong>
              <ul className="nested-list">
                <li>Product & order UI</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 9</strong>
              <ul className="nested-list">
                <li>Celery tasks (email/logging)</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Day 10</strong>
              <ul className="nested-list">
                <li>Caching</li>
                <li>Final refactor</li>
                <li>Documentation</li>
              </ul>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">✅ Evaluation Criteria (Strict)</h3>
            <ul className="requirements-list">
              <li>No logic in views</li>
              <li>Atomic order creation</li>
              <li>Correct permission enforcement</li>
              <li>Optimized queries</li>
              <li>Clean folder structure</li>
              <li>Clear README explaining decisions</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This project will test everything you've learned about advanced Django development. 
              Focus on clean architecture, proper business logic placement, and production-ready practices. 
              Take your time, follow the timeline, and build something you can be proud of!
            </p>
          </div>

          <div className="project-navigation">
            <Button 
              onClick={() => navigate('/django')}
              variant="primary"
              size="large"
            >
              ← Back to Django Track
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DjangoAdvancedProject
