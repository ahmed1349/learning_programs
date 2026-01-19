import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import jsLogo from '../../assets/js.png'
import './JsIntermediate.css'

function JsIntermediate() {
  const navigate = useNavigate()

  const topics = [
    {
      id: 1,
      emoji: '1️⃣',
      title: 'Scope, Execution Context & Closures',
      summary: 'This topic explains where variables live, when they are created, and when they die. Closures are not magic—they\'re simply functions remembering their environment. If you don\'t understand this, you\'ll write bugs that feel "random" and impossible to debug.',
      learnPoints: [
        'Global vs function vs block scope',
        'Execution context & call stack',
        'Why closures are everywhere (React hooks, callbacks, event handlers)'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=iLWTnMzWtj4', title: 'Akshay Saini – JS Scope & Closures' },
        { url: 'https://www.youtube.com/watch?v=1JsJx1x35c0', title: 'Traversy Media – Closures Explained' },
        { url: 'https://www.youtube.com/watch?v=3a0I8ICR1Vg', title: 'Fun Fun Function – Closures' }
      ]
    },
    {
      id: 2,
      emoji: '2️⃣',
      title: 'The this Keyword (And Why People Hate It)',
      summary: 'this is not confusing—misuse is. It\'s determined by how a function is called, not where it\'s written.',
      learnPoints: [
        'this in global scope',
        'this in methods',
        'call, apply, bind',
        'Arrow functions vs regular functions'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=gvicrj31JOM', title: 'Akshay Saini – this keyword' },
        { url: 'https://www.youtube.com/watch?v=PIkA60I0dKU', title: 'Traversy Media – this explained' },
        { url: 'https://www.youtube.com/watch?v=YOlr79NaAtQ', title: 'Web Dev Simplified – this keyword' }
      ],
      note: 'Master this once, and you stop guessing forever.'
    },
    {
      id: 3,
      emoji: '3️⃣',
      title: 'Asynchronous JavaScript (The Right Mental Model)',
      summary: 'JavaScript is single-threaded—but not simple. Async code is about waiting without blocking.',
      learnPoints: [
        'Call stack, Web APIs, Event Loop',
        'Callbacks → Promises → async/await',
        'Why setTimeout doesn\'t behave how you expect'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ', title: 'Philip Roberts – Event Loop' },
        { url: 'https://www.youtube.com/watch?v=PoRJizFvM7s', title: 'Akshay Saini – Async JS' },
        { url: 'https://www.youtube.com/watch?v=vn3tm0quoqE', title: 'Web Dev Simplified – async/await' }
      ],
      note: 'This topic decides whether you can work with APIs confidently—or not.'
    },
    {
      id: 4,
      emoji: '4️⃣',
      title: 'Promises Deep Dive & Error Handling',
      summary: 'Promises are contracts: either I give you data, or I fail clearly. Most developers use them—but don\'t truly understand chaining and error flow.',
      learnPoints: [
        'Promise states',
        'Chaining vs nesting',
        'Proper error handling',
        'Promise.all, Promise.race, Promise.allSettled'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=DHvZLI7Db8E', title: 'Traversy Media – Promises' },
        { url: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c', title: 'Akshay Saini – Promises' },
        { url: 'https://www.youtube.com/watch?v=V_Kr9OSfDeU', title: 'Web Dev Simplified – Promise patterns' }
      ],
      note: 'This is where clean async code is born.'
    },
    {
      id: 5,
      emoji: '5️⃣',
      title: 'Objects, References & Immutability',
      summary: 'Objects don\'t behave like primitives—and that\'s intentional. Understanding references vs values prevents silent data corruption.',
      learnPoints: [
        'Shallow vs deep copy',
        'Mutation vs immutability',
        'Spread operator limitations',
        'Why frameworks care about immutability'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=9ooYYRLdg_g', title: 'Fireship – Object References' },
        { url: 'https://www.youtube.com/watch?v=fD0t_DKREbE', title: 'Web Dev Simplified – Reference Types' },
        { url: 'https://www.youtube.com/watch?v=-hBJz2PPIVE', title: 'Academind – Immutability' }
      ],
      note: 'This topic saves you from hours of "why did this change?"'
    },
    {
      id: 6,
      emoji: '6️⃣',
      title: 'Array Methods as Thinking Tools',
      summary: 'map, filter, reduce are not syntax tricks—they are ways of thinking. Once you stop writing loops everywhere, your code becomes readable and predictable.',
      learnPoints: [
        'When to use each method',
        'Chaining correctly',
        'Avoiding unreadable logic',
        'Replacing imperative code with declarative logic'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=rRgD1yVwIvE', title: 'Web Dev Simplified – Array Methods' },
        { url: 'https://www.youtube.com/watch?v=dpw9EHDh2bM', title: 'Fun Fun Function – Functional Arrays' },
        { url: 'https://www.youtube.com/watch?v=UXiYii0Y7Nw', title: 'Traversy Media – Reduce explained' }
      ],
      note: 'Professional JS lives here.'
    },
    {
      id: 7,
      emoji: '7️⃣',
      title: 'Modules & Code Organization',
      summary: 'Big files kill projects. Modules teach you how to separate responsibilities and scale logic safely.',
      learnPoints: [
        'ES Modules (import / export)',
        'Default vs named exports',
        'Folder structure thinking',
        'Avoiding circular dependencies'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s', title: 'Traversy Media – ES Modules' },
        { url: 'https://www.youtube.com/watch?v=OJjQvYQZg8Y', title: 'Web Dev Simplified – Modules' },
        { url: 'https://www.youtube.com/watch?v=V0wS4zR0O1g', title: 'Academind – JS Modules' }
      ],
      note: 'This prepares learners for React, Vite, and real codebases.'
    },
    {
      id: 8,
      emoji: '8️⃣',
      title: 'JavaScript & the Browser (Events & State)',
      summary: 'JavaScript doesn\'t live alone—it reacts to users. Events are how users talk to your code.',
      learnPoints: [
        'Event bubbling & capturing',
        'Event delegation',
        'Managing UI state manually',
        'Why frameworks abstract this'
      ],
      videos: [
        { url: 'https://www.youtube.com/watch?v=XF1_MlZ5l6M', title: 'Web Dev Simplified – Event Delegation' },
        { url: 'https://www.youtube.com/watch?v=1sJYzVfGxEc', title: 'Traversy Media – DOM Events' },
        { url: 'https://www.youtube.com/watch?v=QE1YQnhntgw', title: 'Academind – Event Flow' }
      ],
      note: 'Once this clicks, React suddenly makes sense.'
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
          <h1 className="level-title">JavaScript Intermediate</h1>
          <p className="level-subtitle">
            Below is a clean, professional list of intermediate topics, each with a title, clear summary, and solid YouTube resources.
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
                <h3 className="learn-label">You'll learn:</h3>
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
          <h2 className="advice-title">Final Advice (Blunt but Fair)</h2>
          <p className="advice-text">
            If learners understand these topics, React becomes a tool—not a mystery.
          </p>
          <p className="advice-text emphasis">
            This list is enough. Anything more is noise.
          </p>
        </div>

        <div className="level-actions">
          <Button onClick={() => navigate('/javascript')} variant="outline">
            ← Back to JavaScript Track
          </Button>
          <Button onClick={() => navigate('/javascript/advanced')} variant="primary">
            Next: Advanced →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JsIntermediate

