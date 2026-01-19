import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import jsLogo from '../../assets/js.png'
import './JsAdvanced.css'

function JsAdvanced() {
  const navigate = useNavigate()

  const topics = [
    {
      id: 1,
      emoji: '1️⃣',
      title: 'JavaScript Engine & Runtime Internals',
      summary: 'This topic explains how JavaScript actually runs. Not theoretically—mechanically.',
      learnPoints: [
        'How the JS engine parses and executes code',
        'Memory heap vs call stack',
        'Garbage collection basics',
        'Why some code is slow even if it "looks fine"'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=V8-Engine-Internals', title: 'JSConf – V8 Internals' },
        { url: 'https://www.youtube.com/watch?v=Z6J1k2dQJ3o', title: 'Akshay Saini – JS Runtime' },
        { url: 'https://www.youtube.com/watch?v=YI8rqwF2a3E', title: 'Fireship – JS Engine Explained' }
      ],
      note: 'Once you see the engine, performance stops being a mystery.'
    },
    {
      id: 2,
      emoji: '2️⃣',
      title: 'Event Loop Deep Dive & Concurrency Model',
      summary: 'This is the real async model—no shortcuts. You\'ll learn why promises behave differently from timers and why UI freezes happen.',
      learnPoints: [
        'Macro vs micro tasks',
        'Rendering cycles',
        'Task prioritization',
        'Predicting execution order without guessing'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ', title: 'Philip Roberts – Event Loop' },
        { url: 'https://www.youtube.com/watch?v=eiC58R16hb8', title: 'Akshay Saini – Event Loop' },
        { url: 'https://www.youtube.com/watch?v=cCOL7MC4Pl0', title: 'Web Dev Simplified – Event Loop' }
      ],
      note: 'This is required knowledge for debugging async bugs.'
    },
    {
      id: 3,
      emoji: '3️⃣',
      title: 'Prototypes & Inheritance (The Real One)',
      summary: 'JavaScript does not use classical inheritance. It uses delegation through prototypes.',
      learnPoints: [
        'Prototype chain',
        '__proto__ vs prototype',
        'How classes are syntactic sugar',
        'Why understanding this prevents framework misuse'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=wstwjQ1yqWQ', title: 'Fun Fun Function – Prototypes' },
        { url: 'https://www.youtube.com/watch?v=9HcxHDS2w1s', title: 'Akshay Saini – Prototypes' },
        { url: 'https://www.youtube.com/watch?v=RZLk1Qp6Akk', title: 'Traversy Media – Prototypes' }
      ],
      note: 'This clarifies objects once and for all.'
    },
    {
      id: 4,
      emoji: '4️⃣',
      title: 'Memory Management & Performance Pitfalls',
      summary: 'Memory leaks are silent killers. Your app works—until it doesn\'t.',
      learnPoints: [
        'Common memory leak patterns',
        'Closures holding references',
        'Detached DOM nodes',
        'Profiling basics in DevTools'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=0ZgqF6tKjtg', title: 'Google Devs – Memory Management' },
        { url: 'https://www.youtube.com/watch?v=K1z5xL6bZzI', title: 'Fireship – Memory Leaks' },
        { url: 'https://www.youtube.com/watch?v=PQzjVh1mGv8', title: 'Chrome DevTools – Performance' }
      ],
      note: 'Advanced devs don\'t guess—they measure.'
    },
    {
      id: 5,
      emoji: '5️⃣',
      title: 'Functional Programming Patterns in JavaScript',
      summary: 'Functional programming is not academic—it\'s defensive coding.',
      learnPoints: [
        'Pure functions',
        'Side effects',
        'Composition',
        'Currying (when it\'s useful, not trendy)'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=e-5obm1G_FY', title: 'Fun Fun Function – FP in JS' },
        { url: 'https://www.youtube.com/watch?v=BMUiFMZr7vk', title: 'Web Dev Simplified – Functional JS' },
        { url: 'https://www.youtube.com/watch?v=HvMemAgOw6I', title: 'Academind – FP Concepts' }
      ],
      note: 'This leads to predictable, testable code—especially in React.'
    },
    {
      id: 6,
      emoji: '6️⃣',
      title: 'Design Patterns in JavaScript (Practical Only)',
      summary: 'Patterns are tools, not decorations. Used correctly, they simplify systems. Used blindly, they ruin them.',
      learnPoints: [
        'Module pattern',
        'Factory pattern',
        'Observer pattern',
        'Singleton (and when to avoid it)'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=tv-_1er1mWI', title: 'Traversy Media – Design Patterns' },
        { url: 'https://www.youtube.com/watch?v=FLmBqI3IKMA', title: 'Fireship – Design Patterns' },
        { url: 'https://www.youtube.com/watch?v=Zt0Zr8ZBz1Q', title: 'Academind – JS Patterns' }
      ],
      note: 'This prepares learners for large codebases.'
    },
    {
      id: 7,
      emoji: '7️⃣',
      title: 'Advanced Asynchronous Patterns',
      summary: 'Not all async problems are solved with async/await.',
      learnPoints: [
        'Retry strategies',
        'Throttling & debouncing',
        'Queues & task scheduling',
        'Cancelable promises'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=F8jZ3tPz8HI', title: 'Web Dev Simplified – Throttle & Debounce' },
        { url: 'https://www.youtube.com/watch?v=Kk_2-9A7N4Y', title: 'Fireship – Async Patterns' },
        { url: 'https://www.youtube.com/watch?v=6x9a0n2B5pE', title: 'Akshay Saini – Advanced Async' }
      ],
      note: 'This is where robustness lives.'
    },
    {
      id: 8,
      emoji: '8️⃣',
      title: 'Security Fundamentals in JavaScript',
      summary: 'Security is not optional. You don\'t need to be paranoid—just informed.',
      learnPoints: [
        'XSS basics',
        'Injection risks',
        'Safe DOM manipulation',
        'Why eval is radioactive ☢️'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=lcO1BTNh8r8', title: 'Fireship – Web Security' },
        { url: 'https://www.youtube.com/watch?v=EoaDgUgS6QA', title: 'OWASP – XSS Explained' },
        { url: 'https://www.youtube.com/watch?v=2B9g5YF0d3M', title: 'Web Dev Simplified – JS Security' }
      ],
      note: 'This topic prevents career-ending mistakes.'
    },
    {
      id: 9,
      emoji: '9️⃣',
      title: 'JavaScript as a System (Preparing for Frameworks)',
      summary: 'This final topic ties everything together.',
      learnPoints: [
        'State management without frameworks',
        'Data flow thinking',
        'Why React, Vue, and Angular exist',
        'When not to use a framework'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=cuHDQhDhvPE', title: 'Fireship – Why Frameworks Exist' },
        { url: 'https://www.youtube.com/watch?v=HnGq0VfY6d8', title: 'Academind – State Management' },
        { url: 'https://www.youtube.com/watch?v=AbC1J8Z3g2M', title: 'JSConf – Architecture Talk' }
      ],
      note: 'This turns learners into engineers, not tool operators.'
    }
  ]

  return (
    <div className="app">
      <Navbar />
      <div className="level-page-container">
        <div className="level-header">
          <div className="level-logo">
            <img src={jsLogo} alt="JavaScript logo" className="level-logo-image" />
          </div>
          <h1 className="level-title">JavaScript Advanced</h1>
          <p className="level-intro">
            Advanced JavaScript is where discipline beats talent. This is not about knowing more—it's about knowing what actually happens when code runs at scale, under pressure, with real users.
          </p>
          <p className="level-subtitle">
            Below is a battle-tested advanced JS curriculum, same format, zero fluff, strong foundations, and directly relevant to React, performance, and backend communication.
          </p>
        </div>

        <div className="topics-container">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <div className="topic-header">
                <span className="topic-emoji">{topic.emoji}</span>
                <h2 className="topic-title">{topic.title}</h2>
              </div>
              
              <div className="topic-summary">
                <h3 className="summary-label">Summary</h3>
                <p className="summary-text">{topic.summary}</p>
              </div>

              <div className="topic-learn">
                <h3 className="learn-label">You'll understand:</h3>
                <ul className="learn-list">
                  {topic.learnPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {topic.note && (
                <div className="topic-note">
                  <p>{topic.note}</p>
                </div>
              )}

              <div className="topic-videos">
                <h3 className="videos-label">YouTube</h3>
                <div className="video-links">
                  {topic.videos.map((video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="video-link"
                    >
                      <span className="video-icon">▶</span>
                      <span className="video-title">{video.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="final-advice">
          <h2 className="advice-title">Final Word (Strong Opinion)</h2>
          <p className="advice-text">
            If someone truly understands these topics,
          </p>
          <ul className="advice-list">
            <li>React becomes easy.</li>
            <li>Debugging becomes calm.</li>
            <li>Code reviews become sharp.</li>
          </ul>
        </div>

        <div className="level-actions">
          <Button onClick={() => navigate('/javascript')} variant="outline">
            ← Back to JavaScript Track
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JsAdvanced

