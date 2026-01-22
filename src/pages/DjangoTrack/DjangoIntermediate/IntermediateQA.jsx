import './Article.css'

function IntermediateQA() {
  const qaData = [
    {
      question: 'What are Django Models beyond "tables"?',
      answerPoints: [
        'At the intermediate level, Django models are business rules, not just database schemas.',
        'A model:',
        '  • Represents data',
        '  • Enforces constraints',
        '  • Defines relationships',
        '  • Encapsulates domain logic',
        'If your models are "dumb" and all logic is in views, your project will age badly.'
      ],
      code: `class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def is_expensive(self):
        return self.price > 1000`
    },
    {
      question: 'What are model relationships and why do they matter?',
      answerPoints: [
        'Relationships define how data connects, not just how it\'s stored.',
        'Django supports:',
        '  • OneToOne → exclusive relationship',
        '  • ForeignKey → many-to-one',
        '  • ManyToMany → many-to-many',
        'Bad relationships = slow queries + messy APIs.'
      ],
      code: `class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)`
    },
    {
      question: 'When should I use related_name?',
      answerPoints: [
        'Always.',
        'It makes reverse access readable and avoids naming conflicts.',
        'If you don\'t define it, Django guesses — and Django guesses poorly.'
      ],
      code: `class Order(models.Model):
    user = models.ForeignKey(
        User,
        related_name="orders",
        on_delete=models.CASCADE
    )

# Usage:
user.orders.all()`
    },
    {
      question: 'What is on_delete and why is it dangerous?',
      answerPoints: [
        'on_delete controls data survival when a parent is deleted.',
        'Common options:',
        '  • CASCADE → delete everything (dangerous)',
        '  • SET_NULL → preserve data',
        '  • PROTECT → block deletion',
        'Defaulting to CASCADE is lazy engineering.'
      ],
      code: `category = models.ForeignKey(
    Category,
    on_delete=models.PROTECT
)`
    },
    {
      question: 'What are Django Signals?',
      answerPoints: [
        'Signals let you react to events in your system:',
        '  • Model saved',
        '  • Model deleted',
        '  • User created',
        'They decouple side effects from core logic.',
        'Used well → clean architecture',
        'Used badly → debugging nightmare',
        'Rule: Signals are for side effects, not business logic.'
      ],
      code: null
    },
    {
      question: 'When should I use signals?',
      answerPoints: [
        'Use signals when:',
        '  • You need automatic behavior',
        '  • Logic should not live in views',
        '  • Multiple parts of the app depend on the event',
        'Avoid signals for:',
        '  • Core validation',
        '  • Critical business rules'
      ],
      code: `@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)`
    },
    {
      question: 'Where should signals live?',
      answerPoints: [
        'Never inside models.py.',
        'Correct structure:',
        '  app/',
        '   ├── signals.py',
        '   ├── apps.py'
      ],
      code: `# apps.py
def ready(self):
    import app.signals`
    },
    {
      question: 'What are Class-Based Views (CBVs)?',
      answerPoints: [
        'CBVs turn repeated patterns into reusable components.',
        'Instead of: Writing the same CRUD logic again and again',
        'You: Configure behavior through inheritance',
        'They reduce duplication — if you understand them.'
      ],
      code: null
    },
    {
      question: 'Why do beginners struggle with CBVs?',
      answerPoints: [
        'Because they skip the mental model.',
        'CBVs are:',
        '  • Python classes',
        '  • With lifecycle methods',
        '  • Overridable behavior',
        'They are not magic.'
      ],
      code: null
    },
    {
      question: 'What is the difference between FBVs and CBVs?',
      answerPoints: [
        'FBVs vs CBVs:',
        '  • Simple vs Scalable',
        '  • Explicit vs Configurable',
        '  • Fast to write vs Fast to maintain',
        'Use FBVs for: Small endpoints',
        'Use CBVs for:',
        '  • APIs',
        '  • CRUD',
        '  • Complex permissions'
      ],
      code: null
    },
    {
      question: 'What are the most important CBVs to know?',
      answerPoints: [
        'At minimum:',
        '  • ListView',
        '  • DetailView',
        '  • CreateView',
        '  • UpdateView',
        '  • DeleteView',
        '  • APIView (DRF)',
        'Master these, and Django feels smaller.'
      ],
      code: null
    },
    {
      question: 'How does APIView differ from Django views?',
      answerPoints: [
        'APIView:',
        '  • Handles JSON',
        '  • Supports HTTP methods',
        '  • Integrates authentication & permissions',
        'It\'s the backbone of Django REST Framework.'
      ],
      code: `class ProductView(APIView):
    def get(self, request):
        return Response({"message": "Hello"})`
    },
    {
      question: 'Where should validation live: serializer or model?',
      answerPoints: [
        'Both — but for different reasons.',
        '  • Model validation → data integrity',
        '  • Serializer validation → request-specific rules',
        'Never trust frontend validation alone.'
      ],
      code: `def validate_price(self, value):
    if value < 0:
        raise serializers.ValidationError("Invalid price")`
    },
    {
      question: 'How do permissions work in CBVs?',
      answerPoints: [
        'Permissions are rules, not checks.',
        'They live outside business logic and scale well.'
      ],
      code: `class ProductView(APIView):
    permission_classes = [IsAuthenticated]`
    },
    {
      question: 'What is queryset optimization and why should I care?',
      answerPoints: [
        'Because slow APIs kill products.',
        'Learn:',
        '  • select_related',
        '  • prefetch_related',
        'ORM misuse is the #1 Django performance bug.'
      ],
      code: `Order.objects.select_related("user").all()`
    },
    {
      question: 'What is the intermediate Django mindset?',
      answerPoints: [
        '  • Models hold intelligence',
        '  • Views orchestrate, not decide',
        '  • Signals handle side effects',
        '  • CBVs reduce repetition',
        '  • Performance is not optional'
      ],
      code: null
    },
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Intermediate Q&A</h1>
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
                  if (point.trim().startsWith('•') || point.trim().startsWith('→')) {
                    return (
                      <div key={pointIndex} className="answer-point">
                        {point}
                      </div>
                    )
                  }
                  // Check if point is a sub-item (starts with spaces)
                  if (point.trim().length > 0 && point.startsWith(' ')) {
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
          <h2 className="final-title">Keep Learning!</h2>
          <p className="final-text">
            These intermediate concepts form the foundation of professional Django development. 
            Practice building projects that use models intelligently, leverage CBVs effectively, 
            and optimize your queries. Master these, and you'll be building scalable Django applications!
          </p>
        </div>
      </div>
    </div>
  )
}

export default IntermediateQA
