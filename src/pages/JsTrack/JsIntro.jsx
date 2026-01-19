import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import jsLogo from '../../assets/js.png'
import './JsIntro.css'

function JsIntro() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <Navbar />
      <div className="level-page-container">
        <div className="level-header">
          <div className="level-logo">
            <img src={jsLogo} alt="JavaScript logo" className="level-logo-image" />
          </div>
          <h1 className="level-title">JavaScript Track — Introduction</h1>
        </div>

        <div className="level-content">
          <section className="content-section">
            <h2 className="section-title">Why JavaScript Exists (And Why You Can't Skip It)</h2>
            <p className="section-text">
              JavaScript is the engine of the modern web.
            </p>
            <div className="highlight-box">
              <p><strong>HTML</strong> describes what exists.</p>
              <p><strong>CSS</strong> decides how it looks.</p>
              <p><strong>JavaScript</strong> decides what happens.</p>
            </div>
            <p className="section-text">
              Every click, form submission, API call, animation, validation, and business rule you touch as a frontend or full-stack developer is powered by JavaScript. Ignore it, and everything else you learn becomes fragile.
            </p>
            <p className="section-text">
              This track treats JavaScript as:
            </p>
            <ul className="feature-list">
              <li>A problem-solving tool</li>
              <li>A decision-making language</li>
              <li>The foundation for React, Node.js, and modern backend workflows</li>
            </ul>
            <p className="section-text emphasis">
              No magic. No shortcuts. Just solid thinking.
            </p>
          </section>

          <section className="content-section">
            <h2 className="section-title">What This Track Is (And Is Not)</h2>
            <div className="two-column">
              <div className="column">
                <h3 className="column-title">This track is:</h3>
                <ul className="check-list">
                  <li>Practical</li>
                  <li>Based on real scenarios</li>
                  <li>Focused on why, not just how</li>
                </ul>
              </div>
              <div className="column">
                <h3 className="column-title">This track is NOT:</h3>
                <ul className="cross-list">
                  <li>A syntax dictionary</li>
                  <li>A "copy–paste and move on" tutorial</li>
                  <li>A race to frameworks</li>
                </ul>
              </div>
            </div>
            <p className="section-text">
              If you already "know JavaScript" but struggle to explain why your code works—or breaks—this track is for you.
            </p>
          </section>

          <section className="content-section">
            <h2 className="section-title">How You Will Learn JavaScript Here</h2>
            <p className="section-text">
              We follow a traditional, proven path:
            </p>
            <ul className="learning-path">
              <li>Think first, code second</li>
              <li>Break problems into steps</li>
              <li>Write simple logic</li>
              <li>Refactor into better logic</li>
              <li>Observe behavior, not assumptions</li>
            </ul>
            <p className="section-text">
              You will:
            </p>
            <ul className="action-list">
              <li>Write imperfect code</li>
              <li>Break things (intentionally)</li>
              <li>Fix them</li>
              <li>Improve them</li>
            </ul>
            <p className="section-text emphasis">
              That's not a bug in the course. That is the course.
            </p>
          </section>

          <section className="content-section">
            <h2 className="section-title">Core Concepts You'll Master</h2>
            <p className="section-text">
              By the end of this track, you will understand, not memorize:
            </p>
            <div className="concepts-grid">
              <div className="concept-card">Variables & data types</div>
              <div className="concept-card">Conditions & decision making</div>
              <div className="concept-card">Functions & scope</div>
              <div className="concept-card">Arrays & objects (and why they matter)</div>
              <div className="concept-card">Loops & iteration patterns</div>
              <div className="concept-card">Events & user interaction</div>
              <div className="concept-card">Asynchronous thinking (the right way)</div>
            </div>
            <p className="section-text emphasis">
              These are not "JS topics." They are engineering fundamentals.
            </p>
          </section>

          <section className="content-section">
            <h2 className="section-title">How This Connects to the Rest of the Platform</h2>
            <ul className="connection-list">
              <li>React depends on JavaScript thinking</li>
              <li>Django APIs expect structured data</li>
              <li>Frontend logic lives and dies by JS decisions</li>
            </ul>
          </section>
        </div>

        <div className="level-actions">
          <Button onClick={() => navigate('/javascript')} variant="outline">
            ← Back to JavaScript Track
          </Button>
          <Button onClick={() => navigate('/javascript/intermediate')} variant="primary">
            Next: Intermediate →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JsIntro

