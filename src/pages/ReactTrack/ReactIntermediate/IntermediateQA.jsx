import './Article.css'

function IntermediateQA() {
  const qaData = [
    {
      question: 'Why does the public/ folder exist, and what belongs there?',
      answerPoints: [
        'The public folder is for static assets that should not be processed by React or the build tool',
        'Files are served as-is, available at the root path, and do not go through bundling, hashing, or imports',
        'Only put files here that must be globally accessible and untouched',
        'The public folder exists because some files need to be referenced by their exact path (like favicons referenced in HTML meta tags)',
        'Some files need to be accessible to external services (like robots.txt for search engines)',
        'Files in public are copied directly to the build output without modification',
        'They won\'t benefit from code splitting, optimization, or cache busting',
        'Typical contents include:',
        '  • index.html (the entry point)',
        '  • favicons (referenced in HTML head)',
        '  • static images used outside React components',
        '  • SEO files (robots.txt, sitemap.xml)',
        '  • web app manifest files',
        'Bad practice: importing everything from public',
        'Instead, use src/assets for images and assets that should be processed by the bundler'
      ],
      code: `public/
├── index.html
├── favicon.ico
├── robots.txt
├── manifest.json
├── logo192.png
└── logo512.png

// ❌ Bad: Importing from public
import logo from '/public/logo.png';

// ✅ Good: Use src/assets
import logo from '../assets/logo.png';`
    },
    {
      question: 'How should the src/ folder be structured in a real React project?',
      answerPoints: [
        'The src folder contains everything React owns',
        'Intermediate-level projects should be structured by responsibility, not file type',
        'This keeps features isolated and scalable',
        'Key principle: organize by feature/domain rather than by technical type',
        'This structure encourages separation of concerns, prevents god-components, and scales with team size',
        'Each folder has a clear purpose:',
        '  • app/ - handles application-wide setup (routing, providers, global state)',
        '  • pages/ - contains route-level components that represent full pages',
        '  • components/ - holds reusable UI pieces organized by purpose',
        '    - layout/ for structural components (Navbar, Footer)',
        '    - ui/ for basic elements (Button, Input)',
        '    - common/ for shared utilities',
        '  • features/ - groups related business logic together (each feature can have its own components, hooks, and services)',
        '  • hooks/ - contains custom hooks used across features',
        '  • services/ - handles external API communication',
        '  • utils/ - provides pure helper functions',
        '  • styles/ - contains global styles and theme variables',
        'This structure makes it easy to find code, prevents circular dependencies, and allows teams to work on different features without conflicts'
      ],
      code: `src/
├── app/              # App bootstrap & providers
│   ├── App.jsx       # Root component
│   ├── router.jsx    # Route definitions
│   └── providers.jsx # Context providers
│
├── pages/            # Route-level components
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── Topics/
│   └── ReactTrack/
│
├── components/       # Reusable UI components
│   ├── layout/      # Layout components (Navbar, Footer)
│   ├── ui/          # Basic UI elements (Button, Input)
│   └── common/      # Shared components
│
├── features/         # Business logic per feature
│   ├── auth/
│   │   ├── AuthPage.jsx
│   │   ├── useAuth.js
│   │   └── authService.js
│   └── progress/
│
├── hooks/            # Custom hooks (useNavigation, useApi)
├── services/         # API calls (api.js, apiClient.js)
├── utils/            # Helpers (constants.js, helpers.js)
├── styles/           # Global styles
│   ├── global.css
│   └── variables.css
└── main.jsx          # Entry point`
    },
    {
      question: 'Where do configuration and JSON files belong?',
      answerPoints: [
        'Configuration depends on who consumes the data',
        'Rules of thumb:',
        '  • Build-time config → root',
        '  • Runtime config → src',
        '  • Static data → src/data',
        'Never hardcode configuration inside components - that\'s technical debt with a timer',
        'Build-time configuration files (like vite.config.js, package.json, .env files) belong in the root because:',
        '  • They are consumed by the build tool before the application runs',
        '  • These files configure how your app is built, not how it behaves',
        'Runtime configuration (like API endpoints, feature flags, route definitions) belongs in src/config/ because:',
        '  • It\'s imported and used by your React code during execution',
        '  • It changes how the app behaves at runtime',
        'Static data files (like mock data, initial state, content) belong in src/data/ and should be imported as modules',
        'Environment variables from .env files are accessed via import.meta.env in Vite',
        'Key principle: if it changes how the app is built, it goes in root. If it changes how the app behaves, it goes in src',
        'This separation makes it clear what can change at build time vs runtime, and prevents accidentally exposing sensitive build configuration to the client bundle'
      ],
      code: `/
├── package.json      # Dependencies & scripts
├── vite.config.js   # Build tool config
├── .env              # Environment variables (build-time)
└── .env.local        # Local overrides

src/
├── config/
│   ├── routes.js     # Route definitions
│   ├── constants.js  # App constants
│   └── api.js        # API endpoints
│
├── data/
│   ├── topics.json   # Static content
│   └── mockData.js   # Test data

// ❌ Bad: Hardcoded in component
function ApiCall() {
  fetch('https://api.example.com/data');
}

// ✅ Good: From config
import { API_BASE_URL } from '../config/api';
function ApiCall() {
  fetch(\`\${API_BASE_URL}/data\`);
}`
    },
    {
      question: 'What is useEffect really for?',
      answerPoints: [
        'useEffect synchronizes your component with external systems',
        'It is not a lifecycle replacement or a place for random logic',
        'Use it only when something outside React must be involved',
        'useEffect is React\'s way of handling side effects—operations that affect something outside the component\'s render output',
        'Think of it as a bridge between React\'s pure rendering world and the impure external world',
        'Common use cases include:',
        '  • Setting up subscriptions (WebSocket connections, event listeners)',
        '  • Fetching data from APIs',
        '  • Manually changing the DOM (when React can\'t handle it)',
        '  • Setting up timers',
        '  • Cleaning up resources',
        'The dependency array controls when the effect runs:',
        '  • Empty array [] means run once on mount',
        '  • No array means run on every render',
        '  • Specific dependencies mean run when those values change',
        'The cleanup function (returned from useEffect) runs before the effect runs again or when the component unmounts, preventing memory leaks',
        'Remember: useEffect runs after the browser has painted the screen, so it won\'t block rendering',
        'If you need to run something before paint, use useLayoutEffect instead'
      ],
      code: `// Synchronizing with external API
useEffect(() => {
  const controller = new AbortController();
  
  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    });

  return () => controller.abort();
}, []);

// Setting up event listeners
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  
  return () => window.removeEventListener('resize', handleResize);
}, []);

// Timer example
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);`
    },
    {
      question: 'When should useEffect NOT be used?',
      answerPoints: [
        'When logic can be derived from state or props - if data can be calculated during render, do it there',
        'useEffect should not be used for:',
        '  • Transforming data that can be computed during render',
        '  • Updating state based on props (use derived state or lift state up instead)',
        '  • Handling events (use event handlers)',
        '  • Resetting state when a prop changes (this often indicates a design problem)',
        'Key principle: if you can calculate it during render, calculate it during render',
        'useEffect adds complexity, can cause unnecessary re-renders, and makes the code harder to reason about',
        'Common mistakes include:',
        '  • Using useEffect to sync state with props (causes bugs and performance issues)',
        '  • Calculating derived values in useEffect (should be done during render)',
        '  • Using useEffect for event handling (should use onClick, onChange, etc.)',
        'If you find yourself using useEffect to update state based on other state or props, consider if that value should be derived instead',
        'Derived values are computed fresh on every render, ensuring they\'re always in sync and eliminating the need for effect synchronization'
      ],
      code: `// ❌ Wrong: Syncing state with props
useEffect(() => {
  setFullName(first + " " + last);
}, [first, last]);

// ✅ Right: Derive during render
const fullName = \`\${first} \${last}\`;

// ❌ Wrong: Calculating derived value
useEffect(() => {
  setTotal(items.reduce((sum, i) => sum + i.price, 0));
}, [items]);

// ✅ Right: Calculate during render
const total = items.reduce((sum, i) => sum + i.price, 0);

// ❌ Wrong: Event handling in useEffect
useEffect(() => {
  document.addEventListener('click', handleClick);
  return () => document.removeEventListener('click', handleClick);
}, []);

// ✅ Right: Use event handler
<button onClick={handleClick}>Click</button>

// ❌ Wrong: Resetting state when prop changes
useEffect(() => {
  setValue(initialValue);
}, [initialValue]);

// ✅ Right: Use key prop or controlled component
<Component key={id} initialValue={value} />`
    },
    {
      question: 'What is useMemo and when is it justified?',
      answer: 'useMemo caches expensive calculations, not values. Use it when calculation is heavy and inputs change infrequently. If computation is cheap—skip it.',
      code: `const total = useMemo(() => {
  return items.reduce((sum, i) => sum + i.price, 0);
}, [items]);`
    },
    {
      question: 'What is useCallback actually solving?',
      answer: 'It memoizes function references, not execution. Useful when passing callbacks to memoized children and preventing unnecessary re-renders. Do not wrap every function. That\'s superstition.',
      code: `const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);`
    },
    {
      question: 'What is useRef used for beyond DOM access?',
      answer: 'useRef stores mutable values that don\'t trigger re-renders. It\'s perfect for previous values, timers, and instance variables. This is controlled mutability—use wisely.',
      code: `const renderCount = useRef(0);
renderCount.current += 1;`
    },
    {
      question: 'What is useContext good for—and bad at?',
      answer: 'useContext shares global-like data. Good for: Auth, Theme, Locale. Bad for: High-frequency updates, Complex state logic. Context is a distribution mechanism, not a state manager.',
      code: `const user = useContext(AuthContext);`
    },
    {
      question: 'What is the biggest mistake in React project structure?',
      answer: 'Organizing by file type instead of responsibility. Bad: components/, hooks/, services/. Good: features/ with auth/ containing AuthPage.jsx, authService.js, and useAuth.js. Features scale. File types don\'t.',
      code: `features/
  └── auth/
      ├── AuthPage.jsx
      ├── authService.js
      └── useAuth.js`
    },
    {
      question: 'Where should business logic live?',
      answer: 'Never inside UI components. Logic belongs in custom hooks, services, and feature folders. This keeps components readable and testable.',
      code: `// UI consumes logic
const { user, login } = useAuth();`
    },
    {
      question: 'How deep should folders go?',
      answer: 'As shallow as possible, as deep as necessary. If you\'re nesting 6 levels deep, something is wrong. Rule: If you can\'t explain the folder in one sentence—refactor.',
      code: null
    },
    {
      question: 'How do you know your structure is good?',
      answer: 'When: New features don\'t break old ones, Files are easy to find, Components stay small, You rarely rename folders. Good structure disappears. Bad structure screams.',
      code: null
    }
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React.js Track — Intermediate</h1>
      </div>

      <div className="article-body">
        <section className="intro-section">
          <h2 className="section-title">React Intermediate — Q&A</h2>
          <p className="section-text">
            Master intermediate React concepts including project structure, hooks, and best practices.
          </p>
        </section>

        {qaData.map((qa, index) => (
          <div key={index} className="qa-section">
            <div className="qa-question">
              <span className="question-icon">❓</span>
              <h2 className="question-text">{qa.question}</h2>
            </div>
            
            <div className="qa-answer">
              <h3 className="answer-label">Answer:</h3>
              {qa.answerPoints ? (
                <ul className="answer-points">
                  {qa.answerPoints.map((point, idx) => {
                    const isNested = point.startsWith('  •');
                    return (
                      <li 
                        key={idx} 
                        className="answer-point"
                        data-nested={isNested}
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="answer-text">{qa.answer}</p>
              )}
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
          <h2 className="final-title">Final Opinion (Unfiltered)</h2>
          <p className="final-text">
            React doesn't fail projects. Bad structure does.
          </p>
          <p className="final-text">
            If your structure is solid: Hooks feel obvious, Bugs are local, Refactoring is safe.
          </p>
          <p className="final-text emphasis">
            That's professional React.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IntermediateQA



