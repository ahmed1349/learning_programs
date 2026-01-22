import { Outlet } from 'react-router-dom'
import './Article.css'

function ReactAdvancedArticle() {
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React Advanced Concepts</h1>
      </div>

      <div className="article-body">
        <h2>Advanced React Patterns and Techniques</h2>
        
        <p>
          This article covers advanced React concepts that will help you build more sophisticated and performant applications.
        </p>

        <h3>1. Higher-Order Components (HOCs)</h3>
        <p>
          HOCs are functions that take a component and return a new component with additional functionality:
        </p>
        <pre><code>{`function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

const UserListWithLoading = withLoading(UserList);`}</code></pre>

        <h3>2. Render Props Pattern</h3>
        <p>
          Render props allow components to share code through a prop that is a function:
        </p>
        <pre><code>{`function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse position: {x}, {y}</p>
)} />`}</code></pre>

        <h3>3. Custom Hooks for Logic Reuse</h3>
        <p>
          Extract component logic into reusable custom hooks:
        </p>
        <pre><code>{`function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
const [name, setName] = useLocalStorage('name', '');`}</code></pre>

        <h3>4. Performance Optimization</h3>
        <p>
          Use React.memo, useMemo, and useCallback strategically:
        </p>
        <pre><code>{`const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);

  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <div onClick={handleClick}>{processedData}</div>;
});`}</code></pre>

        <h3>5. Error Boundaries</h3>
        <p>
          Catch JavaScript errors anywhere in the component tree:
        </p>
        <pre><code>{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`}</code></pre>

        <h3>6. Context API for Global State</h3>
        <p>
          Use Context API for state that needs to be shared across many components:
        </p>
        <pre><code>{`const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}`}</code></pre>

        <h3>7. Code Splitting and Lazy Loading</h3>
        <p>
          Split your code to reduce initial bundle size:
        </p>
        <pre><code>{`import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}</code></pre>

        <h3>Best Practices</h3>
        <ul>
          <li>Keep components small and focused</li>
          <li>Use custom hooks to extract logic</li>
          <li>Optimize re-renders with memoization</li>
          <li>Implement error boundaries</li>
          <li>Use code splitting for large applications</li>
          <li>Follow the single responsibility principle</li>
        </ul>
      </div>
    </div>
  )
}

export default ReactAdvancedArticle



