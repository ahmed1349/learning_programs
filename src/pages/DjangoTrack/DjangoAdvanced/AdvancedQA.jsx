import './Article.css'

function AdvancedQA() {
  const qaData = [
    {
      question: 'What separates advanced Django from intermediate Django?',
      answerPoints: [
        'Advanced Django is about control.',
        'At this level, you stop:',
        '  • Writing logic in views',
        '  • Repeating query patterns',
        '  • Scattering permission checks everywhere',
        'And start:',
        '  • Centralizing logic',
        '  • Designing expressive APIs',
        '  • Enforcing rules at the correct layer',
        'If intermediate Django is "it works", advanced Django is "it scales and stays sane".'
      ],
      code: null
    },
    {
      question: 'What is a Django Manager really?',
      answerPoints: [
        'A Django Manager is not just a query entry point.',
        'It is a domain-specific query API.',
        'Managers answer questions like:',
        '  • "What is an active user?"',
        '  • "What is a published product?"',
        '  • "What records are visible to this role?"',
        'If your code keeps repeating the same filters, you need a manager.'
      ],
      code: null
    },
    {
      question: 'Why are default managers often a mistake?',
      answerPoints: [
        'Because objects.all() is too generic.',
        'It exposes:',
        '  • Soft-deleted records',
        '  • Drafts',
        '  • Invalid states',
        'Real systems rarely want everything.',
        'Rule: If calling .all() is dangerous, your model needs a custom manager.'
      ],
      code: null
    },
    {
      question: 'How do custom managers improve code quality?',
      answerPoints: [
        'They:',
        '  • Reduce duplication',
        '  • Improve readability',
        '  • Prevent invalid queries',
        '  • Encode business meaning',
        'Compare these two:',
        'Bad: Product.objects.filter(is_active=True, is_deleted=False)',
        'Good: Product.objects.active()',
        'One leaks implementation. The other communicates intent.'
      ],
      code: null
    },
    {
      question: 'How do you create a custom manager?',
      answerPoints: [
        'By extending models.Manager and defining meaningful methods.'
      ],
      code: `class ActiveProductManager(models.Manager):
    def active(self):
        return self.filter(is_active=True, is_deleted=False)

# Attach it to the model:
class Product(models.Model):
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)

    objects = ActiveProductManager()

# Now your queries speak English.`
    },
    {
      question: 'What is the difference between Managers and QuerySets?',
      answerPoints: [
        'Manager → Entry point',
        'QuerySet → Chainable logic',
        'Managers answer what kind of data exists.',
        'QuerySets answer how it can be combined.',
        'Advanced Django uses custom QuerySets + custom Managers together.'
      ],
      code: null
    },
    {
      question: 'Why should you create custom QuerySets?',
      answerPoints: [
        'Because chaining matters.',
        'This is bad: Product.objects.active().filter(price__gt=100)',
        'But this is better: Product.objects.active().expensive()',
        'Custom QuerySets allow composable logic.'
      ],
      code: null
    },
    {
      question: 'How do you implement a custom QuerySet correctly?',
      answerPoints: [
        'By extending models.QuerySet.'
      ],
      code: `class ProductQuerySet(models.QuerySet):
    def active(self):
        return self.filter(is_active=True, is_deleted=False)

    def expensive(self):
        return self.filter(price__gt=1000)

# Attach it via a manager:
class ProductManager(models.Manager):
    def get_queryset(self):
        return ProductQuerySet(self.model, using=self._db)

    def active(self):
        return self.get_queryset().active()

# Usage:
Product.objects.active().expensive()

# Clean. Predictable. Powerful.`
    },
    {
      question: 'Where should business rules live: View, Serializer, or Model?',
      answerPoints: [
        'Answer (Strong opinion): Business rules belong as close to the data as possible.',
        'Correct order:',
        '  1. Model / QuerySet (core rules)',
        '  2. Serializer (request-specific rules)',
        '  3. View (orchestration only)',
        'If your views contain if logic, you\'re leaking domain rules.'
      ],
      code: null
    },
    {
      question: 'What is a "fat model, thin view" approach?',
      answerPoints: [
        'It means:',
        '  • Models know how to behave',
        '  • Views only coordinate',
        'Views should:',
        '  • Authenticate',
        '  • Authorize',
        '  • Call model logic',
        '  • Return response',
        'Nothing more.',
        'If your view is long, it\'s lying to you.'
      ],
      code: null
    },
    {
      question: 'What are Django Permissions beyond IsAuthenticated?',
      answerPoints: [
        'Permissions are policy, not logic.',
        'They answer:',
        '  • Who can do what?',
        '  • Under which conditions?',
        'Advanced systems use:',
        '  • Object-level permissions',
        '  • Role-based permissions',
        '  • Context-aware permissions'
      ],
      code: null
    },
    {
      question: 'What is wrong with checking permissions inside views?',
      answerPoints: [
        'Because it:',
        '  • Duplicates logic',
        '  • Is easy to forget',
        '  • Does not scale',
        'Permissions must be enforced automatically.',
        'If a developer forgets to add a permission check, that\'s a system failure — not a human failure.'
      ],
      code: null
    },
    {
      question: 'How do custom permissions work in Django?',
      answerPoints: [
        'Django permissions are boolean checks that run before the view logic.',
        'They decide:',
        '  • Allow',
        '  • Deny',
        'They don\'t care how the response is built.'
      ],
      code: null
    },
    {
      question: 'How do you create a custom permission in DRF?',
      answerPoints: [
        'By extending BasePermission.'
      ],
      code: `from rest_framework.permissions import BasePermission

class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in ["GET", "HEAD"]:
            return True
        return request.user.is_staff

# Use it:
permission_classes = [IsAdminOrReadOnly]`
    },
    {
      question: 'What are object-level permissions?',
      answerPoints: [
        'They answer:',
        '"Can THIS user access THIS object?"',
        'Not all users should access all records.'
      ],
      code: null
    },
    {
      question: 'When do object-level permissions matter?',
      answerPoints: [
        'Anytime data ownership exists:',
        '  • User profiles',
        '  • Orders',
        '  • Medical records',
        '  • Financial data',
        'If ownership exists and object permissions don\'t — you have a security bug.'
      ],
      code: null
    },
    {
      question: 'How are object-level permissions implemented?',
      answerPoints: [
        'Using has_object_permission.'
      ],
      code: `class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user

# DRF enforces this automatically when retrieving objects.`
    },
    {
      question: 'What is the correct permission strategy?',
      answerPoints: [
        '  1. Authentication → Who are you?',
        '  2. Permission → Are you allowed?',
        '  3. Validation → Is the data valid?',
        '  4. Business logic → What happens?',
        'Never mix these layers.'
      ],
      code: null
    },
    {
      question: 'What mistakes do developers make at this level?',
      answerPoints: [
        '  ❌ Business logic in views',
        '  ❌ Repeating filters everywhere',
        '  ❌ Hardcoding permission checks',
        '  ❌ Ignoring object-level permissions',
        '  ❌ Treating ORM as SQL replacement, not a tool',
        'Classic mistakes. Expensive later.'
      ],
      code: null
    },
    {
      question: 'What mindset should you have now?',
      answerPoints: [
        'You are no longer "writing endpoints".',
        'You are:',
        '  • Designing rules',
        '  • Protecting data',
        '  • Creating abstractions others depend on',
        'Your code must be boring, predictable, and hard to misuse.'
      ],
      code: null
    },
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Advanced Q&A</h1>
        <p className="article-subtitle">Managers, QuerySets, Custom Permissions</p>
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
          <h2 className="final-title">Master Advanced Django</h2>
          <p className="final-text">
            Advanced Django is about building systems that scale, maintain themselves, and protect data by design. 
            Master custom managers, QuerySets, and permissions, and you'll be building enterprise-grade Django applications 
            that are both powerful and maintainable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdvancedQA
