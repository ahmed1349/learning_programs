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
      recordingUrl: 'https://teams.microsoft.com/l/meetingrecap?driveId=b%214O3FgbRnK0yaMUqis27u5nvFY9CZO0xLkOD2u8uTf_GTWkNNewcVTpM6guaRHbYk&driveItemId=01V7BDS6WL4PS4TYUML5EZHVJAVQHIEN4N&sitePath=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fahmed_rabiea_originsysglobal_com%2FIQDL4-XJ4oxfSZPVIKwOgjeNAWFB0IZhKY05I6auWEABAxU&fileUrl=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fahmed_rabiea_originsysglobal_com%2FIQDL4-XJ4oxfSZPVIKwOgjeNAWFB0IZhKY05I6auWEABAxU&iCalUid=040000008200E00074C5B7101A82E00800000000F9C255A763D2DC010000000000000000100000004E92269AE7816743A0F7238025E28CC7&threadId=19%3Ameeting_ZWU0YzJmNmMtZmNmOS00MGIwLWIxNDktNTdlYzk2ZTA5ZGRj%40thread.v2&organizerId=d9a455fd-0464-4b4e-a992-ea98f651b9a9&tenantId=6df4fb73-297c-4ed8-8709-4b162df26013&callId=43adef72-abec-4c44-8bdd-62afe2c16b04&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapChiclet',
      repoUrl: 'https://github.com/your-org/react-intro-session-1',
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
