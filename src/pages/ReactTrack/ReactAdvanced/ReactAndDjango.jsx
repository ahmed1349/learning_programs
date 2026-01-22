import { Outlet } from 'react-router-dom'
import './Article.css'

function ReactAndDjango() {
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React and Django</h1>
      </div>

      <div className="article-body">
        <h2>Connecting React Frontend with Django Backend</h2>
        
        <p>
          When building full-stack applications, React handles the frontend while Django provides the backend API. 
          This combination is powerful and widely used in production applications.
        </p>

        <h3>Architecture Overview</h3>
        <p>
          The typical architecture follows this pattern:
        </p>
        <ul>
          <li><strong>Django</strong> serves as the REST API backend</li>
          <li><strong>React</strong> consumes the API and renders the UI</li>
          <li>Communication happens via HTTP requests (GET, POST, PUT, DELETE)</li>
          <li>Data is exchanged in JSON format</li>
        </ul>

        <h3>Setting Up Django REST Framework</h3>
        <p>
          First, install Django REST Framework in your Django project:
        </p>
        <pre><code>{`pip install djangorestframework

# settings.py
INSTALLED_APPS = [
    ...
    'rest_framework',
]`}</code></pre>

        <h3>Creating API Endpoints</h3>
        <p>
          In Django, create serializers and viewsets for your models:
        </p>
        <pre><code>{`# serializers.py
from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

# views.py
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer`}</code></pre>

        <h3>Connecting React to Django API</h3>
        <p>
          In your React application, use fetch or axios to communicate with Django:
        </p>
        <pre><code>{`// services/api.js
const API_BASE_URL = 'http://localhost:8000/api';

export const fetchProducts = async () => {
  const response = await fetch(\`\${API_BASE_URL}/products/\`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

// Component usage
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}`}</code></pre>

        <h3>Handling CORS</h3>
        <p>
          Django and React run on different ports, so you need to configure CORS:
        </p>
        <pre><code>{`# Install django-cors-headers
pip install django-cors-headers

# settings.py
INSTALLED_APPS = [
    ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite default port
    "http://localhost:3000",  # Create React App default
]`}</code></pre>

        <h3>Best Practices</h3>
        <ul>
          <li>Keep API logic in separate service files</li>
          <li>Handle loading and error states in React</li>
          <li>Use environment variables for API URLs</li>
          <li>Implement proper error handling</li>
          <li>Consider using React Query or SWR for data fetching</li>
        </ul>

        <h3>Authentication</h3>
        <p>
          For authenticated requests, include tokens in headers:
        </p>
        <pre><code>{`const fetchWithAuth = async (url, token) => {
  const response = await fetch(url, {
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};`}</code></pre>
      </div>
    </div>
  )
}

export default ReactAndDjango



