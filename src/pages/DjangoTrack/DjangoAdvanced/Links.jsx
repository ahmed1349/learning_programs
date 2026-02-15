import '../DjangoIntro/Article.css'
import '../DjangoIntro/Links.css'

function DjangoAdvancedLinks() {
  const sessions = [
    {
      id: 1,
      title: 'Session 1',
      description: 'Add your session description and links below.',
      pdfUrl: 'https://drive.google.com/',
      recordingUrl: 'https://example.com/session1',
    },
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Links</h1>
        <p className="links-subtitle">Resources for the Django Advanced section</p>
      </div>

      <div className="article-body">
        <div className="links-cards">
          {sessions.map((session) => (
            <div key={session.id} className="link-card">
              <h3 className="link-card-title">{session.title}</h3>
              <p className="link-card-line">{session.description}</p>
              <div className="link-card-buttons">
                <a
                  href={session.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-medium link-card-button"
                >
                  PDF
                </a>
                <a
                  href={session.recordingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-medium link-card-button"
                >
                  Recorded
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DjangoAdvancedLinks
