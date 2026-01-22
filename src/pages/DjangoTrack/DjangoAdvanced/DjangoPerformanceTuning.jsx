import './Article.css'

function DjangoPerformanceTuning() {
  const qaData = [
    {
      question: 'What does "performance" really mean in Django?',
      answerPoints: [
        'Performance is response time + resource usage + scalability.',
        'A fast Django app:',
        '  • Responds quickly',
        '  • Uses fewer database queries',
        '  • Consumes less memory',
        '  • Degrades gracefully under load',
        'Performance is not "optimization later". It\'s architecture + discipline.'
      ],
      code: null
    },
    {
      question: 'What is the #1 cause of slow Django applications?',
      answerPoints: [
        'Answer (no debate): Database queries.',
        'Not Python. Not Django. Not serializers.',
        '90% of real-world performance issues are:',
        '  • Too many queries',
        '  • Bad joins',
        '  • N+1 problems',
        '  • Missing indexes',
        'If you don\'t understand your queries, you don\'t control your app.'
      ],
      code: null
    },
    {
      question: 'What is the N+1 query problem?',
      answerPoints: [
        'It happens when Django:',
        '  • Fetches a list of objects (1 query)',
        '  • Fetches related data one query per object (N queries)',
        'Looks harmless. Kills performance.'
      ],
      code: null
    },
    {
      question: 'Example of an N+1 problem',
      answerPoints: [
        'This causes:',
        '  • 1 query for orders',
        '  • N queries for users'
      ],
      code: `# Code Example (Bad):
orders = Order.objects.all()
for order in orders:
    print(order.user.email)`
    },
    {
      question: 'How do you fix N+1 queries?',
      answerPoints: [
        'By telling Django what relationships you need upfront.',
        'Use:',
        '  • select_related → ForeignKey / OneToOne',
        '  • prefetch_related → ManyToMany / reverse relations'
      ],
      code: null
    },
    {
      question: 'When should you use select_related?',
      answerPoints: [
        'Use it for single-valued relationships.',
        'It performs a SQL JOIN.'
      ],
      code: `orders = Order.objects.select_related("user").all()

# One query. Clean. Fast.`
    },
    {
      question: 'When should you use prefetch_related?',
      answerPoints: [
        'Use it for multi-valued relationships.',
        'It runs two queries, then joins in Python.'
      ],
      code: `products = Product.objects.prefetch_related("categories")`
    },
    {
      question: 'Why does Django not do this automatically?',
      answerPoints: [
        'Because:',
        '  • Django avoids unnecessary joins',
        '  • You know your access pattern better than the ORM',
        '  • Automatic optimization would cause hidden performance costs.',
        'Explicit > implicit.'
      ],
      code: null
    },
    {
      question: 'How do serializers contribute to performance problems?',
      answerPoints: [
        'Serializers can silently trigger queries.',
        'Common mistakes:',
        '  • Deep nesting',
        '  • SerializerMethodField with DB access',
        '  • Looping over related objects',
        'Your endpoint might "work" and still be slow.'
      ],
      code: null
    },
    {
      question: 'How do you detect query problems?',
      answerPoints: [
        'You measure, not guess.',
        'Tools:',
        '  • Django Debug Toolbar (dev)',
        '  • django.db.connection.queries',
        '  • Database logs (prod)'
      ],
      code: null
    },
    {
      question: 'How do you inspect queries manually?',
      answerPoints: [
        'If that number surprises you — good. You\'re learning.'
      ],
      code: `from django.db import connection
print(len(connection.queries))`
    },
    {
      question: 'What is queryset evaluation and why does it matter?',
      answerPoints: [
        'QuerySets are lazy.',
        'They execute only when:',
        '  • Iterated',
        '  • Converted to list',
        '  • Serialized',
        '  • Sliced',
        'But once evaluated, they are cached.'
      ],
      code: null
    },
    {
      question: 'Common mistake with queryset evaluation',
      answerPoints: [
        'This triggers:',
        '  • Query execution',
        '  • Potential double evaluation'
      ],
      code: `# Code Example (Bad):
qs = Product.objects.all()
if qs:
    print(qs[0].name)`
    },
    {
      question: 'Correct approach',
      answerPoints: [
        'One evaluation. Predictable behavior.'
      ],
      code: `# Code Example (Good):
qs = list(Product.objects.all())`
    },
    {
      question: 'What is .only() and .defer()?',
      answerPoints: [
        'They limit fields fetched from the database.',
        'Useful when:',
        '  • Models have many columns',
        '  • You need only a subset'
      ],
      code: null
    },
    {
      question: 'Example of .only()',
      answerPoints: [
        'This reduces:',
        '  • Memory usage',
        '  • Network cost'
      ],
      code: `users = User.objects.only("id", "email")`
    },
    {
      question: 'When should you avoid .only()?',
      answerPoints: [
        'When you later access deferred fields — Django will issue extra queries.',
        'Optimization without understanding usage = regression.'
      ],
      code: null
    },
    {
      question: 'What is indexing and why is it critical?',
      answerPoints: [
        'Indexes make queries fast.',
        'Without indexes:',
        '  • Filtering = full table scan',
        '  • Sorting = expensive operations',
        'Indexes are not optional in production systems.'
      ],
      code: null
    },
    {
      question: 'Which fields should be indexed?',
      answerPoints: [
        'Index fields that are:',
        '  • Used in filters',
        '  • Used in joins',
        '  • Used in ordering',
        '  • Used in lookups (email, username, foreign keys)'
      ],
      code: null
    },
    {
      question: 'How do you add an index in Django?',
      answerPoints: [
        'Or advanced:'
      ],
      code: `class User(models.Model):
    email = models.EmailField(db_index=True)

# Or advanced:
class Meta:
    indexes = [
        models.Index(fields=["created_at"]),
    ]`
    },
    {
      question: 'What is the cost of over-indexing?',
      answerPoints: [
        'Indexes:',
        '  • Speed up reads',
        '  • Slow down writes',
        '  • Increase storage',
        'Index what you query, not what looks important.'
      ],
      code: null
    },
    {
      question: 'What is caching and when should you use it?',
      answerPoints: [
        'Caching stores precomputed results to avoid repeated work.',
        'Use caching when:',
        '  • Data changes infrequently',
        '  • Reads >> writes',
        '  • Queries are expensive'
      ],
      code: null
    },
    {
      question: 'What are common caching layers in Django?',
      answerPoints: [
        '  • Per-view caching',
        '  • Low-level caching',
        '  • Template caching',
        '  • External caches (Redis)'
      ],
      code: null
    },
    {
      question: 'Example: Low-level caching',
      answerPoints: [],
      code: `from django.core.cache import cache

data = cache.get("products")
if not data:
    data = expensive_query()
    cache.set("products", data, 300)`
    },
    {
      question: 'What should NOT be cached?',
      answerPoints: [
        'Never cache:',
        '  • User-specific sensitive data',
        '  • Permission-sensitive data (without keys)',
        '  • Highly dynamic data',
        'Caching bugs are worse than slow apps.'
      ],
      code: null
    },
    {
      question: 'What is pagination and why does it matter?',
      answerPoints: [
        'Returning 10,000 records is not "powerful". It\'s irresponsible.',
        'Pagination:',
        '  • Reduces response size',
        '  • Protects database',
        '  • Improves UX'
      ],
      code: null
    },
    {
      question: 'Example: DRF pagination',
      answerPoints: [],
      code: `REST_FRAMEWORK = {
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 20,
}`
    },
    {
      question: 'What is the impact of .count()?',
      answerPoints: [
        '.count() hits the database.',
        'Calling it repeatedly inside loops is a silent performance killer.',
        'Cache counts if needed.'
      ],
      code: null
    },
    {
      question: 'How do background tasks improve performance?',
      answerPoints: [
        'By removing slow operations from request/response cycle.',
        'Examples:',
        '  • Emails',
        '  • Reports',
        '  • File processing',
        '  • Notifications',
        'Use Celery + Redis.'
      ],
      code: null
    },
    {
      question: 'Why is async not a silver bullet in Django?',
      answerPoints: [
        'Because:',
        '  • Database drivers are still sync',
        '  • ORM is sync',
        '  • CPU-bound work doesn\'t benefit',
        'Async helps I/O, not bad architecture.'
      ],
      code: null
    },
    {
      question: 'What is the advanced performance mindset?',
      answerPoints: [
        '  • Measure first',
        '  • Optimize hotspots only',
        '  • Respect the database',
        '  • Design APIs responsibly',
        '  • Performance is a feature',
        'Fast code is a business advantage, not a technical luxury.'
      ],
      code: null
    },
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Performance Tuning</h1>
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
          <h2 className="final-title">Final Truth</h2>
          <p className="final-text">
            A slow system with clean code fails. A fast system with messy code also fails. 
            A fast and clean system wins.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DjangoPerformanceTuning

