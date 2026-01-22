import { Outlet } from 'react-router-dom'
import './Article.css'

function ReactAndDjangoQA() {
  const qaData = [
    {
      question: 'What does "React + Django architecture" actually mean?',
      answerPoints: [
        'It means separating concerns properly:',
        '  • React → Frontend (UI, UX, state, interactions)',
        '  • Django → Backend (business logic, database, auth, security)',
        'Communication happens via HTTP APIs, not templates',
        'Django does not render React',
        'React does not talk to the database',
        'Anything else is technical debt in disguise'
      ],
      code: `User → React → API request → Django → Database`
    },
    {
      question: 'How do React and Django communicate?',
      answerPoints: [
        'Through REST APIs (most common) or GraphQL',
        'Standard setup:',
        '  • Django REST Framework (DRF)',
        '  • JSON request & response',
        '  • HTTP status codes',
        'This keeps both sides independent and scalable'
      ],
      code: `{
  "id": 1,
  "name": "Product A",
  "price": 99.99
}`
    },
    {
      question: 'Why NOT render React inside Django templates?',
      answerPoints: [
        'Because mixing them:',
        '  • Breaks scalability',
        '  • Complicates deployment',
        '  • Makes frontend developers miserable',
        '  • Makes backend logic leaky',
        'Old-school server rendering ≠ modern frontend architecture',
        'Correct mindset:',
        '  • Django is a data provider, React is a consumer'
      ],
      code: `<!-- Django template rendering React -->
<script src="react.js"></script>

Don't do this unless you enjoy pain.`
    },
    {
      question: 'What is the recommended folder structure?',
      answerPoints: [
        'Keep them fully separated',
        'Independent repos are even better for large teams'
      ],
      code: `project-root/
 ├── backend/
 │   ├── manage.py
 │   ├── config/
 │   └── apps/
 └── frontend/
     ├── src/
     ├── public/
     └── package.json`
    },
    {
      question: 'What backend stack is required for React integration?',
      answerPoints: [
        'Minimum Django backend stack:',
        '  • Django',
        '  • Django REST Framework',
        '  • django-cors-headers',
        '  • Authentication system (JWT or Session)',
        'This is non-negotiable'
      ],
      code: `pip install djangorestframework django-cors-headers`
    },
    {
      question: 'What is CORS and why does it matter?',
      answerPoints: [
        'CORS (Cross-Origin Resource Sharing) controls who can call your API',
        'React runs on: localhost:5173',
        'Django runs on: localhost:8000',
        'Different origins = blocked unless configured'
      ],
      code: `INSTALLED_APPS = [
    "corsheaders",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
]

CORS_ALLOW_ALL_ORIGINS = True`
    },
    {
      question: 'How does authentication work between React and Django?',
      answerPoints: [
        'Two real-world options:',
        '1️⃣ JWT Authentication (Most common)',
        '  • React stores token',
        '  • Token sent in headers',
        '  • Stateless & scalable',
        '2️⃣ Session Authentication',
        '  • Cookies',
        '  • CSRF protection',
        '  • Used when React & Django share domain',
        'JWT wins for mobile + SPAs'
      ],
      code: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
    },
    {
      question: 'Where should authentication logic live?',
      answerPoints: [
        'Django → Authentication rules, validation, permissions',
        'React → UI state (logged in / logged out)',
        'React NEVER decides who is authorized',
        'It only reacts to backend truth'
      ],
      code: `from rest_framework.permissions import IsAuthenticated

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]`
    },
    {
      question: 'How does React fetch data from Django?',
      answerPoints: [
        'Using:',
        '  • fetch',
        '  • axios',
        '  • react-query / tanstack-query (recommended)',
        'Never hardcode URLs everywhere — centralize them'
      ],
      code: `axios.get("http://localhost:8000/api/products/")
  .then(res => setProducts(res.data));`
    },
    {
      question: 'How should APIs be structured in Django?',
      answerPoints: [
        'Clear, predictable, RESTful',
        'React developers should not guess endpoints'
      ],
      code: `GET    /api/products/
POST   /api/products/
GET    /api/products/:id/
PUT    /api/products/:id/
DELETE /api/products/:id/

# DRF View
class ProductList(APIView):
    def get(self, request):
        return Response(ProductSerializer(Product.objects.all(), many=True).data)`
    },
    {
      question: 'How is state managed in React for Django data?',
      answerPoints: [
        'Use:',
        '  • Local state for UI',
        '  • Global state for auth/user',
        '  • Server state libraries for API data',
        'Recommended stack:',
        '  • React Query',
        '  • Context API (auth only)',
        'Redux for everything = overengineering'
      ],
      code: `useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts
})`
    },
    {
      question: 'How are errors handled?',
      answerPoints: [
        'Django returns proper HTTP status codes',
        'React interprets them and reacts',
        'Never hide backend errors'
      ],
      code: `# Django
return Response({"detail": "Unauthorized"}, status=401)

# React
if (error.response.status === 401) logout();`
    },
    {
      question: 'How is file upload handled?',
      answerPoints: [
        'React sends multipart/form-data',
        'Django handles files via serializers',
        'Never Base64 images unless forced'
      ],
      code: `const formData = new FormData();
formData.append("image", file);`
    },
    {
      question: 'How do environments work (Dev / Prod)?',
      answerPoints: [
        'React:',
        '  • .env.development',
        '  • .env.production',
        'Django:',
        '  • environment variables',
        '  • different settings modules',
        'Never hardcode URLs or secrets'
      ],
      code: `const API_URL = import.meta.env.VITE_API_URL;`
    },
    {
      question: 'How is deployment handled?',
      answerPoints: [
        'They deploy separately:',
        '  • React → Static build (Netlify, Vercel, Nginx)',
        '  • Django → API server (Gunicorn + Nginx)',
        'They only meet at runtime via HTTP'
      ],
      code: `npm run build
python manage.py collectstatic`
    },
    {
      question: 'What are common architectural mistakes?',
      answerPoints: [
        'Avoid these sins:',
        '  • ❌ Django rendering React',
        '  • ❌ React calling database directly',
        '  • ❌ Business logic in React',
        '  • ❌ No API versioning',
        '  • ❌ No authentication strategy',
        '  • ❌ Mixing frontend & backend repos without reason',
        'Classic mistakes. Expensive to fix later'
      ],
      code: null
    },
    {
      question: 'What does a clean production architecture look like?',
      answerPoints: [
        'Simple. Predictable. Boring.',
        'React (SPA) → API Gateway → Django REST → PostgreSQL',
        'Add when needed:',
        '  • Redis (caching)',
        '  • Celery (background jobs)',
        '  • Nginx (reverse proxy)',
        'When needed — not before'
      ],
      code: null
    }
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React → Django Integration Architecture (Q&A)</h1>
      </div>

      <div className="article-body">
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
          <h2 className="final-title">Final Straight Talk</h2>
          <p className="final-text">
            React + Django works because:
          </p>
          <ul className="final-list">
            <li>Django enforces structure</li>
            <li>React owns user experience</li>
            <li>APIs keep boundaries clean</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReactAndDjangoQA



