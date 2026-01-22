import './Article.css'

function DjangoProduction() {
  const qaData = [
    {
      question: 'What does "production-ready Django" actually mean?',
      answerPoints: [
        'Production-ready does not mean:',
        '  • App runs without errors',
        '  • API responds correctly',
        '  • Tests pass locally',
        'Production-ready means:',
        '  • Secure by default',
        '  • Predictable under load',
        '  • Observable when it fails',
        '  • Recoverable when it breaks',
        '  • Maintainable by people who didn\'t write it',
        'If your app works but panics at 2 a.m., it\'s not production-ready.'
      ],
      code: null
    },
    {
      question: 'Why is Django\'s default setup NOT production-ready?',
      answerPoints: [
        'Because Django is honest.',
        'By default:',
        '  • Debug is enabled',
        '  • Secrets live in code',
        '  • SQLite is used',
        '  • No caching',
        '  • No background workers',
        '  • No rate limiting',
        '  • No monitoring',
        'Django gives you a toolbox, not a factory.'
      ],
      code: null
    },
    {
      question: 'What is the correct way to manage Django settings?',
      answerPoints: [
        'Never use a single settings.py file.',
        'You need:',
        '  • Base settings',
        '  • Environment-specific overrides',
        'This prevents:',
        '  • Leaking secrets',
        '  • Breaking production accidentally',
        '  • Debug flags reaching users'
      ],
      code: null
    },
    {
      question: 'What is the recommended settings structure?',
      answerPoints: [
        'Each environment extends, never copies.'
      ],
      code: `config/
 ├── settings/
 │   ├── __init__.py
 │   ├── base.py
 │   ├── development.py
 │   ├── production.py
 └── urls.py`
    },
    {
      question: 'What belongs in base.py?',
      answerPoints: [
        'Only shared configuration:',
        '  • Installed apps',
        '  • Middleware',
        '  • Templates',
        '  • Default database config (without credentials)',
        '  • Logging structure',
        'No secrets. No debug flags.'
      ],
      code: `INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "rest_framework",
]`
    },
    {
      question: 'What belongs in production.py?',
      answerPoints: [
        'Anything that can break or leak:',
        '  • DEBUG = False',
        '  • Allowed hosts',
        '  • Database credentials',
        '  • Cache backend',
        '  • Security flags',
        '  • Email backend'
      ],
      code: `DEBUG = False
ALLOWED_HOSTS = ["api.myapp.com"]`
    },
    {
      question: 'How should secrets be handled?',
      answerPoints: [
        'Answer (strong opinion): Secrets NEVER belong in Git. Ever.',
        'Use:',
        '  • Environment variables',
        '  • Secret managers',
        '  • .env files (ignored by Git)',
        'If it leaks once, rotate it. No exceptions.'
      ],
      code: null
    },
    {
      question: 'How do you access environment variables safely?',
      answerPoints: [
        'If the app crashes without it — good. Fail fast.'
      ],
      code: `import os

SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]`
    },
    {
      question: 'What database should be used in production?',
      answerPoints: [
        'PostgreSQL. Period.',
        'Why:',
        '  • Transactions',
        '  • Indexing',
        '  • JSON support',
        '  • Concurrency',
        '  • Reliability',
        'SQLite is for learning. MySQL is acceptable. Postgres is professional.'
      ],
      code: null
    },
    {
      question: 'How should database connections be configured?',
      answerPoints: [
        'You must consider:',
        '  • Connection pooling',
        '  • Timeouts',
        '  • Max connections'
      ],
      code: `DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ["DB_NAME"],
        "USER": os.environ["DB_USER"],
        "PASSWORD": os.environ["DB_PASSWORD"],
    }
}`
    },
    {
      question: 'What is Gunicorn and why is it required?',
      answerPoints: [
        'Gunicorn is the application server.',
        'Django:',
        '  • Is not a web server',
        '  • Should never face the internet directly',
        'Gunicorn:',
        '  • Manages workers',
        '  • Handles concurrency',
        '  • Talks to Nginx'
      ],
      code: null
    },
    {
      question: 'What is Nginx\'s role?',
      answerPoints: [
        'Nginx is the front door.',
        'It handles:',
        '  • HTTPS',
        '  • Static files',
        '  • Reverse proxy',
        '  • Load balancing',
        '  • Rate limiting',
        'Django never touches raw traffic.'
      ],
      code: null
    },
    {
      question: 'What does a correct request flow look like?',
      answerPoints: [
        'This separation is non-negotiable.'
      ],
      code: `User
 ↓
Nginx (SSL, static, security)
 ↓
Gunicorn (workers)
 ↓
Django
 ↓
PostgreSQL`
    },
    {
      question: 'How should static files be handled?',
      answerPoints: [
        'Django should not serve static files in production.',
        'Use:',
        '  • Nginx',
        '  • CDN (recommended)'
      ],
      code: `STATIC_ROOT = BASE_DIR / "staticfiles"

# Then:
python manage.py collectstatic`
    },
    {
      question: 'Why do you need Redis in production?',
      answerPoints: [
        'Redis is your performance backbone.',
        'Used for:',
        '  • Caching',
        '  • Sessions',
        '  • Rate limiting',
        '  • Background tasks',
        'If your app scales without Redis, it won\'t for long.'
      ],
      code: null
    },
    {
      question: 'What is Celery and why does production need it?',
      answerPoints: [
        'Celery handles background work.',
        'Anything slow does NOT belong in requests:',
        '  • Emails',
        '  • Reports',
        '  • Notifications',
        '  • File processing',
        'Requests must return fast. Always.'
      ],
      code: null
    },
    {
      question: 'Example: Celery task',
      answerPoints: [
        'Trigger it:'
      ],
      code: `@shared_task
def send_email(user_id):
    send_mail(...)

# Trigger it:
send_email.delay(user.id)`
    },
    {
      question: 'How do you secure Django in production?',
      answerPoints: [
        'Security is layers, not a feature.',
        'Must-have:',
        '  • HTTPS only',
        '  • Secure cookies',
        '  • CSRF protection',
        '  • Rate limiting',
        '  • Permission enforcement'
      ],
      code: null
    },
    {
      question: 'Critical Django security settings',
      answerPoints: [
        'If these are off — you\'re exposed.'
      ],
      code: `SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True`
    },
    {
      question: 'What about authentication security?',
      answerPoints: [
        'Use:',
        '  • Token expiration',
        '  • Refresh tokens',
        '  • Rotation',
        '  • Revocation',
        'Never issue infinite tokens.'
      ],
      code: null
    },
    {
      question: 'Why logging is mandatory in production?',
      answerPoints: [
        'Because users don\'t report bugs correctly.',
        'Logs tell you:',
        '  • What happened',
        '  • When',
        '  • Why',
        '  • To whom',
        'No logs = blind system.'
      ],
      code: null
    },
    {
      question: 'What should be logged?',
      answerPoints: [
        'Log:',
        '  • Errors',
        '  • Warnings',
        '  • Auth failures',
        '  • External service failures',
        'Never log:',
        '  • Passwords',
        '  • Tokens',
        '  • Personal data'
      ],
      code: null
    },
    {
      question: 'Example: Logging config',
      answerPoints: [],
      code: `LOGGING = {
    "version": 1,
    "handlers": {
        "file": {
            "class": "logging.FileHandler",
            "filename": "django.log",
        },
    },
    "root": {
        "handlers": ["file"],
        "level": "INFO",
    },
}`
    },
    {
      question: 'What is health monitoring?',
      answerPoints: [
        'Knowing the app is alive before users complain.',
        'Includes:',
        '  • Health check endpoint',
        '  • Error tracking',
        '  • Performance metrics'
      ],
      code: null
    },
    {
      question: 'What tools are commonly used?',
      answerPoints: [
        '  • Sentry (errors)',
        '  • Prometheus (metrics)',
        '  • Grafana (dashboards)',
        'If you can\'t observe it, you can\'t scale it.'
      ],
      code: null
    },
    {
      question: 'How should deployments be handled?',
      answerPoints: [
        'Never deploy manually.',
        'Use:',
        '  • CI/CD pipelines',
        '  • Automated tests',
        '  • Rollbacks',
        'Manual deploys = human error waiting to happen.'
      ],
      code: null
    },
    {
      question: 'What is the production mindset?',
      answerPoints: [
        '  • Expect failure',
        '  • Fail safely',
        '  • Recover fast',
        '  • Protect data',
        '  • Keep systems boring'
      ],
      code: null
    },
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Production Architecture</h1>
        <p className="article-subtitle">Deep Dive</p>
      </div>

      <div className="article-body">
        {qaData.map((qa, index) => (
          <section key={index} className="qa-section">
            <div className="qa-question">
              <span className="question-icon">❓</span>
              <h2 className="question-text">{qa.question}</h2>
            </div>

            <div className="qa-answer">
              <div className="answer-label">Answer:</div>
              <div className="answer-text">
                {qa.answerPoints.map((point, pointIndex) => {
                  // Check if point starts with bullet or is a nested item
                  if (point.trim().startsWith('•') || point.trim().startsWith('→') || point.trim().startsWith('❌')) {
                    return (
                      <div key={pointIndex} className="answer-point">
                        {point}
                      </div>
                    )
                  }
                  // Check if point is a sub-item (starts with spaces or numbers)
                  if (point.trim().length > 0 && (point.startsWith(' ') || /^\d+\./.test(point.trim()))) {
                    return (
                      <div key={pointIndex} className="answer-point nested">
                        {point}
                      </div>
                    )
                  }
                  // Regular paragraph
                  return (
                    <p key={pointIndex} className="answer-paragraph">
                      {point}
                    </p>
                  )
                })}
              </div>
            </div>

            {qa.code && (
              <div className="qa-code">
                <div className="code-label">Code Example:</div>
                <pre className="code-block">
                  <code>{qa.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}

        <div className="final-thought">
          <h2 className="final-title">Production Excellence</h2>
          <p className="final-text">
            Production-ready Django is not about features—it's about reliability, security, and observability. 
            Build systems that fail gracefully, recover quickly, and protect your users' data. 
            Remember: boring systems that work are better than exciting systems that break.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DjangoProduction

