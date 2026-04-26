import { useState } from 'react'
import './Article.css'
import './Links.css'

function ReactIntroLinks() {
  const [copiedSessionId, setCopiedSessionId] = useState(null)

  const sessions = [
    {
      id: 1,
      title: 'Session 1',
      description: 'Introduction to React.JS - Building Modern User Interfaces. A practical guide for software engineering students ready to level up their front-end skills.',
      pdfUrl: 'https://drive.google.com/file/d/1TwTg_QGC2TtYbzhAQnpw9kChSH_c0l0A/view?usp=sharing',
      recordingUrl: 'https://github.com/ahmedrabie812/books.git',
      repoUrl: 'https://github.com/ahmedrabie812/books.git',
    },
  ]

  const handleCopyRepoLink = async (sessionId, repoUrl) => {
    if (!repoUrl) {
      return
    }

    try {
      await navigator.clipboard.writeText(repoUrl)
      setCopiedSessionId(sessionId)
      window.setTimeout(() => {
        setCopiedSessionId((currentSessionId) =>
          currentSessionId === sessionId ? null : currentSessionId
        )
      }, 1800)
    } catch (error) {
      console.error('Failed to copy repo link:', error)
    }
  }

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Links</h1>
        <p className="links-subtitle">Resources for the React Intro section</p>
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
              <div className="link-card-repo-row">
                <a
                  href={session.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-medium link-card-button"
                >
                  Repo
                </a>
                <button
                  type="button"
                  className="btn btn-outline btn-medium link-card-button link-card-copy-button"
                  onClick={() => handleCopyRepoLink(session.id, session.repoUrl)}
                >
                  {copiedSessionId === session.id ? 'Copied!' : 'Copy Repo Link'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReactIntroLinks
