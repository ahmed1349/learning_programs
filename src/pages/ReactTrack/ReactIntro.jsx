import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import reactLogo from '../../assets/react.webp'
import './ReactIntro.css'

function ReactIntro() {
  const navigate = useNavigate()

  const qaData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces. It focuses on rendering UI based on state, not on manually manipulating the DOM. React does not replace JavaScript—it organizes it around UI logic. React encourages thinking in terms of components and data flow, making complex interfaces predictable.',
      code: `function App() {
  return <h1>Hello React</h1>;
}`
    },
    {
      question: 'Why was React created?',
      answer: 'As applications grew, manually updating the DOM became error-prone and hard to maintain. React was created to reduce DOM manipulation, make UI updates predictable, and tie UI directly to application state. Instead of telling the browser how to update, you tell React what the UI should look like.',
      code: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  {count}
</button>`
    },
    {
      question: 'Is React a framework?',
      answer: 'No. React is a library, not a framework. It only solves the UI layer: rendering, components, and state updates. Everything else (routing, data fetching, architecture) is optional and chosen by the developer.',
      code: `function Button() {
  return <button>Click me</button>;
}`
    },
    {
      question: 'What problem does React actually solve?',
      answer: 'React solves the problem of UI inconsistency. When data changes in many places, keeping the UI in sync becomes difficult. React ensures the UI is always a function of state.',
      code: `function Status({ isOnline }) {
  return <p>{isOnline ? "Online" : "Offline"}</p>;
}`
    },
    {
      question: 'What is a Component?',
      answer: 'A component is a reusable, self-contained unit of UI and logic. Components accept inputs (props), return UI, and can manage their own state. They are the foundation of React applications.',
      code: `function UserCard({ name }) {
  return <h2>{name}</h2>;
}`
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension that lets you write HTML-like code inside JavaScript. It is not HTML. It is syntax sugar for React.createElement(). JSX exists to make UI logic readable, not magical.',
      code: `<h1>Hello</h1>

// Compiles to:
React.createElement("h1", null, "Hello");`
    },
    {
      question: 'What is State?',
      answer: 'State is data that changes over time and affects what the user sees. When state changes, React re-renders the component and the UI updates automatically. State represents the current condition of the UI.',
      code: `const [count, setCount] = useState(0);`
    },
    {
      question: 'What are Props?',
      answer: 'Props are inputs passed from a parent component to a child component. Props are read-only, passed top-down, and used to configure components. They help make components reusable.',
      code: `<UserCard name="Ahmed" />

function UserCard({ name }) {
  return <h2>{name}</h2>;
}`
    },
    {
      question: 'What is the difference between State and Props?',
      answer: 'State is owned and managed by the component. Props are received from the parent. A component can change its state, but cannot change its props.',
      code: `function Parent() {
  const [name] = useState("Ahmed");
  return <Child name={name} />;
}`
    },
    {
      question: 'Why does React use a Virtual DOM?',
      answer: 'Updating the real DOM is slow and expensive. React creates a virtual representation of the UI, compares changes (diffing), and updates only what changed. This makes UI updates faster and more efficient.',
      code: `setCount(count + 1);`
    },
    {
      question: 'When does React re-render a component?',
      answer: 'React re-renders when state changes, props change, or a parent component re-renders. Re-rendering is normal and expected.',
      code: `setCount(prev => prev + 1);`
    },
    {
      question: 'What are Hooks?',
      answer: 'Hooks are functions that let you use React features inside function components. They replaced the need for class components and lifecycle methods. Hooks enforce clear rules to keep behavior predictable.',
      code: `useState();
useEffect();`
    },
    {
      question: 'What is useState?',
      answer: 'useState allows a component to remember values between renders. It returns the current state value and a function to update it.',
      code: `const [isOpen, setIsOpen] = useState(false);`
    },
    {
      question: 'What is useEffect?',
      answer: 'useEffect is used for side effects. It runs after rendering, keeping rendering pure and predictable. Common uses include data fetching, subscriptions, and timers.',
      code: `useEffect(() => {
  console.log("Component mounted");
}, []);`
    },
    {
      question: 'What are Side Effects?',
      answer: 'Side effects are operations that affect something outside the component\'s render output. Examples include API calls, event listeners, and logging. React separates rendering from side effects intentionally.',
      code: `useEffect(() => {
  fetch("/api/data");
}, []);`
    },
    {
      question: 'What is Lifting State Up?',
      answer: 'When multiple components need the same data, state is moved to their closest common parent. This prevents duplication and inconsistencies.',
      code: `function Parent() {
  const [value, setValue] = useState("");
  return <Child value={value} />;
}`
    },
    {
      question: 'What is Context?',
      answer: 'Context allows data to be shared without passing props through every level. It is best used for global concerns like themes, authentication, and user settings.',
      code: `const ThemeContext = createContext("light");

useContext(ThemeContext);`
    },
    {
      question: 'What is Prop Drilling?',
      answer: 'Prop drilling happens when props are passed through components that don\'t need them. It increases coupling and reduces readability.',
      code: `<A>
  <B>
    <C data={data} />
  </B>
</A>`
    },
    {
      question: 'Why are Keys important in lists?',
      answer: 'Keys help React identify which elements changed, moved, or were removed. Without keys, React must guess—and guesses cause bugs.',
      code: `items.map(item => (
  <li key={item.id}>{item.name}</li>
));`
    },
    {
      question: 'Controlled vs Uncontrolled Components?',
      answer: 'Controlled components are managed by React state. Uncontrolled components rely on the DOM. Controlled components are predictable and preferred.',
      code: `<input
  value={name}
  onChange={e => setName(e.target.value)}
/>`
    },
    {
      question: 'How does React handle performance?',
      answer: 'React assumes rendering is cheap and optimizes only when necessary. Performance tools exist—but should be used after measuring, not by default.',
      code: `const MemoComponent = React.memo(Component);`
    },
    {
      question: 'How does React fit into a full application?',
      answer: 'React controls the view layer only. It works with APIs (Django, Node), routers, and state management tools. The flow is: Backend → State → React → UI',
      code: null
    },
    {
      question: 'When should you NOT use React?',
      answer: 'When the UI is static or simple. Using React where it isn\'t needed adds unnecessary complexity.',
      code: `<h1>Static Page</h1>`
    },
    {
      question: 'What makes someone good at React?',
      answer: 'Not memorizing hooks—but understanding state flow, side effects, and component responsibility. React rewards clear thinking and punishes shortcuts.',
      code: `UI = f(state)`
    }
  ]

  return (
    <div className="app">
      <Navbar />
      <div className="level-page-container">
        <div className="level-header">
          <div className="level-logo">
            <img src={reactLogo} alt="React logo" className="level-logo-image" />
          </div>
          <h1 className="level-title">React.js Track — Introduction</h1>
        </div>

        <div className="level-content">
          {qaData.map((qa, index) => (
            <div key={index} className="qa-section">
              <div className="qa-question">
                <span className="question-icon">❓</span>
                <h2 className="question-text">{qa.question}</h2>
              </div>
              
              <div className="qa-answer">
                <h3 className="answer-label">Answer:</h3>
                <p className="answer-text">{qa.answer}</p>
              </div>

              {qa.code && (
                <div className="qa-code">
                  <pre className="code-block">
                    <code>{qa.code}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}

          <div className="final-thought">
            <h2 className="final-title">Final Thought</h2>
            <p className="final-text">
              React doesn't hide complexity. It forces you to deal with it honestly.
            </p>
          </div>
        </div>

        <div className="level-actions">
          <Button onClick={() => navigate('/react')} variant="outline">
            ← Back to React Track
          </Button>
          <Button onClick={() => navigate('/react/intermediate')} variant="primary">
            Next: Intermediate →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReactIntro
