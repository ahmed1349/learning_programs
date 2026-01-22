import './Article.css'

function DjangoRestFramework() {
  const qaData = [
    {
      question: 'What is a serializer really in DRF?',
      answerPoints: [
        'A serializer is not just a JSON converter.',
        'At an advanced level, a serializer is responsible for:',
        '  • Data validation',
        '  • Data transformation',
        '  • Controlling API contracts',
        '  • Protecting your models from bad input',
        'Think of it as the firewall between the outside world and your database.',
        'If bad data reaches your model, the serializer failed.'
      ],
      code: null
    },
    {
      question: 'Why are serializers more important than views?',
      answerPoints: [
        'Answer (strong opinion): Because views come and go. Serializers define what your API promises.',
        'A bad serializer:',
        '  • Breaks frontend expectations',
        '  • Leaks internal structure',
        '  • Forces hacks later',
        'A good serializer:',
        '  • Makes APIs stable',
        '  • Allows refactoring models safely',
        '  • Keeps frontend/backend decoupled',
        'Views orchestrate. Serializers define truth.'
      ],
      code: null
    },
    {
      question: 'What is the difference between Serializer and ModelSerializer?',
      answerPoints: [
        'Serializer → Full control, more work',
        'ModelSerializer → Faster, opinionated',
        'Beginners overuse ModelSerializer. Professionals know when to stop using it.',
        'Use ModelSerializer when:',
        '  • Mapping directly to models',
        '  • CRUD endpoints',
        '  • Internal APIs',
        'Use Serializer when:',
        '  • Aggregated data',
        '  • External APIs',
        '  • Non-model input',
        '  • Complex validation'
      ],
      code: null
    },
    {
      question: 'Why can ModelSerializer be dangerous?',
      answerPoints: [
        'Because it exposes:',
        '  • All model fields by default',
        '  • Database structure unintentionally',
        '  • Fields that should be read-only',
        'It\'s easy. Too easy.',
        'Rule: If you didn\'t explicitly choose a field, you probably shouldn\'t expose it.'
      ],
      code: null
    },
    {
      question: 'How do you control exposed fields properly?',
      answerPoints: [
        'By explicitly defining fields and using read_only_fields.'
      ],
      code: `class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "username"]
        read_only_fields = ["id"]

# Never rely on __all__ in serious systems.`
    },
    {
      question: 'What is serializer validation order?',
      answerPoints: [
        'Understanding this prevents subtle bugs.',
        'Validation runs in this order:',
        '  1. Field-level validation',
        '  2. validate_<field>()',
        '  3. validate() (object-level)',
        '  4. create() / update()',
        'If you don\'t know this order, you\'re guessing.'
      ],
      code: null
    },
    {
      question: 'When should you use field-level validation?',
      answerPoints: [
        'When a field can be validated in isolation.',
        'Examples:',
        '  • Price ≥ 0',
        '  • Email format',
        '  • Length constraints'
      ],
      code: `def validate_price(self, value):
    if value < 0:
        raise serializers.ValidationError("Price cannot be negative")
    return value`
    },
    {
      question: 'When should you use object-level validation?',
      answerPoints: [
        'When validation depends on multiple fields together.',
        'Examples:',
        '  • Start date < end date',
        '  • Discount < price',
        '  • Role + permission combinations'
      ],
      code: `def validate(self, data):
    if data["start_date"] > data["end_date"]:
        raise serializers.ValidationError("Invalid date range")
    return data`
    },
    {
      question: 'What is the biggest validation mistake developers make?',
      answerPoints: [
        'Putting validation in views.',
        'That leads to:',
        '  • Duplicated logic',
        '  • Inconsistent behavior',
        '  • Security holes',
        'Validation belongs in serializers and models — never views.'
      ],
      code: null
    },
    {
      question: 'What are read-only vs write-only fields?',
      answerPoints: [
        'read_only → Sent to client, ignored on input',
        'write_only → Accepted on input, never returned',
        'Critical for:',
        '  • Passwords',
        '  • Tokens',
        '  • Internal flags'
      ],
      code: `password = serializers.CharField(write_only=True)

# If you ever return passwords — stop everything.`
    },
    {
      question: 'How do nested serializers work?',
      answerPoints: [
        'Nested serializers allow representing related objects in one response.',
        'Useful for:',
        '  • Read-heavy endpoints',
        '  • Detail views',
        'Dangerous for:',
        '  • Writes',
        '  • Performance',
        'Rule: Nested reads are fine. Nested writes require discipline.'
      ],
      code: null
    },
    {
      question: 'Example of nested read serializer',
      answerPoints: [
        'This is clean and safe.'
      ],
      code: `class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["bio"]

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ["id", "username", "profile"]`
    },
    {
      question: 'Why are nested writes dangerous?',
      answerPoints: [
        'Because they:',
        '  • Hide database complexity',
        '  • Cause partial failures',
        '  • Complicate transactions',
        'Most production bugs happen here.'
      ],
      code: null
    },
    {
      question: 'When should you allow nested writes?',
      answerPoints: [
        'Only when:',
        '  • You control the client',
        '  • You wrap logic in transactions',
        '  • You fully understand failure cases',
        'Otherwise — don\'t.'
      ],
      code: null
    },
    {
      question: 'How do you handle nested writes safely?',
      answerPoints: [
        'By overriding create() or update() explicitly.'
      ],
      code: `def create(self, validated_data):
    profile_data = validated_data.pop("profile")
    user = User.objects.create(**validated_data)
    Profile.objects.create(user=user, **profile_data)
    return user

# Explicit beats clever.`
    },
    {
      question: 'What is the difference between source and normal fields?',
      answerPoints: [
        'source lets you map serializer fields to:',
        '  • Model properties',
        '  • Related fields',
        '  • Methods',
        'It decouples API shape from database shape.'
      ],
      code: null
    },
    {
      question: 'Why is source powerful?',
      answerPoints: [
        'Because APIs should not break when models change.'
      ],
      code: `full_name = serializers.CharField(source="get_full_name", read_only=True)

# Frontend stays stable. Backend evolves.`
    },
    {
      question: 'What are SerializerMethodFields?',
      answerPoints: [
        'They compute values dynamically.',
        'Use sparingly.',
        'They are:',
        '  • Flexible',
        '  • Easy',
        '  • Potentially slow'
      ],
      code: null
    },
    {
      question: 'Example of SerializerMethodField',
      answerPoints: [
        'If logic grows → move it to the model.'
      ],
      code: `is_expensive = serializers.SerializerMethodField()

def get_is_expensive(self, obj):
    return obj.price > 1000`
    },
    {
      question: 'How do serializers affect performance?',
      answerPoints: [
        'Bad serializers cause:',
        '  • N+1 queries',
        '  • Slow endpoints',
        '  • Memory spikes',
        'Serialization is not free.'
      ],
      code: null
    },
    {
      question: 'How do you optimize serializer performance?',
      answerPoints: [
        '  • Use select_related / prefetch_related',
        '  • Avoid deep nesting',
        '  • Avoid SerializerMethodField loops',
        '  • Split read/write serializers'
      ],
      code: null
    },
    {
      question: 'Why should you split read and write serializers?',
      answerPoints: [
        'Because reading and writing have different concerns.',
        'Read serializers:',
        '  • Rich',
        '  • Nested',
        '  • Computed fields',
        'Write serializers:',
        '  • Strict',
        '  • Flat',
        '  • Validation-heavy',
        'Trying to use one serializer for both is laziness.'
      ],
      code: null
    },
    {
      question: 'Example: Read vs Write serializers',
      answerPoints: [
        'This scales cleanly.'
      ],
      code: `class ProductWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["name", "price"]

class ProductReadSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ["id", "name", "price", "category"]`
    },
    {
      question: 'What is the professional serializer mindset?',
      answerPoints: [
        '  • Serializers protect your system',
        '  • Explicit is better than automatic',
        '  • Validation is non-negotiable',
        '  • Performance matters',
        '  • API contracts outlive code'
      ],
      code: null
    },
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django REST Framework</h1>
        <p className="article-subtitle">Serializers Deep Dive</p>
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
          <h2 className="final-title">Master DRF Serializers</h2>
          <p className="final-text">
            Serializers are the foundation of robust Django REST Framework APIs. They protect your data, 
            define your API contracts, and enable safe evolution of your backend. Master these concepts, 
            and you'll build APIs that are secure, performant, and maintainable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DjangoRestFramework

