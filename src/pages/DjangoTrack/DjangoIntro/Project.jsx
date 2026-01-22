import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button/Button'
import './Article.css'

function DjangoIntroProject() {
  const navigate = useNavigate()
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Intro Project</h1>
        <p className="article-subtitle">Personal Blog (1 Week)</p>
      </div>

      <div className="article-body">
        <section className="project-section">
          <div className="project-intro">
            <p className="intro-text">
              Your first real Django project. Simple, but foundational.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🎯 Project Goal</h3>
            <p className="details-text">
              Build a simple personal blog using Django. This project will help you practice 
              the fundamental concepts of Django including:
            </p>
            <ul className="requirements-list">
              <li>Models and database structure</li>
              <li>Views and URL routing</li>
              <li>Templates and template inheritance</li>
              <li>Django admin panel</li>
              <li>Basic CRUD operations</li>
            </ul>
            <p className="details-text">
              Master this, and you'll have a solid foundation for intermediate Django concepts.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">📌 Project Description</h3>
            <p className="details-text">
              A Personal Blog where users can:
            </p>
            <ul className="requirements-list">
              <li>View all blog posts</li>
              <li>Read individual blog posts</li>
              <li>Create posts through admin panel</li>
              <li>See post creation dates</li>
            </ul>
            <p className="details-text">
              Simple idea. Essential skills.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧩 Core Features (Must Have)</h3>
            <ul className="requirements-list">
              <li>Post model with title, content, and created_at fields</li>
              <li>Django admin panel setup</li>
              <li>View to list all blog posts</li>
              <li>View to display a single post</li>
              <li>URL routing for posts</li>
              <li>Base template with navigation</li>
              <li>Template to list all posts</li>
              <li>Template to display a single post</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🧠 Skills Applied (Intro Level)</h3>
            <ul className="requirements-list">
              <li>Django project and app creation</li>
              <li>Model definition and fields</li>
              <li>Migrations and database setup</li>
              <li>Function-based views</li>
              <li>URL patterns and routing</li>
              <li>Django template system</li>
              <li>Template tags and filters</li>
              <li>Admin panel configuration</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">🗂️ Suggested Folder Structure</h3>
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{`myblog/
 ├── blog/
 │   ├── migrations/
 │   ├── templates/
 │   │   └── blog/
 │   │       ├── base.html
 │   │       ├── post_list.html
 │   │       └── post_detail.html
 │   ├── models.py
 │   ├── views.py
 │   ├── urls.py
 │   └── admin.py
 ├── myblog/
 │   ├── settings.py
 │   ├── urls.py
 │   └── wsgi.py
 └── manage.py`}</code>
              </pre>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">⏱️ Timeline (1 Week)</h3>
            
            <h4 className="subsection-title">Day 1</h4>
            <div className="timeline-item">
              <strong>Project Setup</strong>
              <ul className="nested-list">
                <li>Create a virtual environment and install Django</li>
                <li>Create a new Django project using <code>django-admin startproject</code></li>
                <li>Create a new app called <code>blog</code> using <code>python manage.py startapp blog</code></li>
                <li>Add the blog app to <code>INSTALLED_APPS</code></li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 2</h4>
            <div className="timeline-item">
              <strong>Create the Post Model</strong>
              <ul className="nested-list">
                <li>Create a <code>Post</code> model in <code>models.py</code></li>
                <li>Add fields: title (CharField), content (TextField), created_at (DateTimeField)</li>
                <li>Add <code>__str__</code> method to return the title</li>
                <li>Run migrations: <code>python manage.py makemigrations</code> and <code>python manage.py migrate</code></li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 3</h4>
            <div className="timeline-item">
              <strong>Set Up Admin Panel</strong>
              <ul className="nested-list">
                <li>Register the Post model in <code>admin.py</code></li>
                <li>Create a superuser using <code>python manage.py createsuperuser</code></li>
                <li>Test creating posts through the admin panel</li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 4</h4>
            <div className="timeline-item">
              <strong>Create Views & URLs</strong>
              <ul className="nested-list">
                <li>Create a view to list all blog posts</li>
                <li>Create a view to display a single post</li>
                <li>Create <code>urls.py</code> in your blog app</li>
                <li>Include blog URLs in the main project's <code>urls.py</code></li>
                <li>Create routes for listing posts and viewing individual posts</li>
              </ul>
            </div>

            <h4 className="subsection-title">Day 5</h4>
            <div className="timeline-item">
              <strong>Create Templates & Polish</strong>
              <ul className="nested-list">
                <li>Create a base template with navigation</li>
                <li>Create a template to list all posts</li>
                <li>Create a template to display a single post</li>
                <li>Use Django template tags and filters</li>
                <li>Style your blog with CSS</li>
                <li>Test all functionality</li>
              </ul>
            </div>
          </div>

          <div className="project-details">
            <h3 className="details-title">✅ Success Criteria</h3>
            <ul className="requirements-list">
              <li>✅ Use Django models to define data structure</li>
              <li>✅ Set up and use the Django admin panel</li>
              <li>✅ Create views and URL routing</li>
              <li>✅ Use Django templates for rendering</li>
              <li>✅ Follow Django best practices</li>
              <li>✅ No errors when running the server</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">⭐ Bonus Challenges</h3>
            <ul className="bonus-list">
              <li>Add categories or tags to posts</li>
              <li>Add pagination to the post list</li>
              <li>Add a search functionality</li>
              <li>Add author field to posts</li>
              <li>Add image upload functionality</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This project will help you understand Django's core concepts. Take your time, 
              experiment with the admin panel, and refer back to the Q&A section when needed! 
              Remember, every expert was once a beginner. Start building!
            </p>
          </div>

          <div className="project-navigation">
            <Button 
              onClick={() => navigate('/django/intermediate')}
              variant="primary"
              size="large"
            >
              Next Lesson: Intermediate →
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DjangoIntroProject
