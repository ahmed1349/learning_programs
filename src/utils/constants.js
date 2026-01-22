import reactLogo from '../assets/react.webp'
import jsLogo from '../assets/js.png'
import djangoLogo from '../assets/django.png'

export const COURSES = [
  {
    id: 1,
    name: 'JavaScript',
    logo: jsLogo,
    description: 'Learn JavaScript - The programming language of the web',
    path: '/javascript',
    color: '#F7DF1E',
  },
  {
    id: 2,
    name: 'React.js',
    logo: reactLogo,
    description: 'Learn React - A JavaScript library for building user interfaces',
    path: '/react',
    color: '#61DAFB',
  },
  {
    id: 3,
    name: 'Django',
    logo: djangoLogo,
    description: 'Learn Django - A high-level Python web framework',
    path: '/django',
    color: '#092E20',
  },
]

export const ROUTES = {
  HOME: '/',
  TOPICS: '/topics',
  REACT: '/react',
  JAVASCRIPT: '/javascript',
  DJANGO: '/django',
}

