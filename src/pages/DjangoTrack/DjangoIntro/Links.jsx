import './Article.css'
import './Links.css'

function DjangoIntroLinks() {
  const sessions = [
    {
      id: 1,
      title: 'Session 1',
      description: 'Django basics and project setup.',
      pdfUrl: 'https://drive.google.com/file/d/1lgb737oIYACFFZib4vHEGyaFBsGOUC6u/view?usp=sharing', // TODO: add PDF link
      recordingUrl: 'https://teams.microsoft.com/l/meetingrecap?driveId=b%21BOkZ1JEdVk-mYhj6GJVwveLeRWygSsJFgiMW7SdhJfg7qF5FRfD6QrNkOVPK3c3g&driveItemId=01ZLUAA57OXZWSG7XRQFGLBJU6GKFFWSL6&sitePath=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fmohamed_raafat_originsysglobal_com%2FIQDuvm0jfvGBTLCmnjKKW0l-AZgGDc2Hg256S6YlDDDNE80&fileUrl=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2Fpersonal%2Fmohamed_raafat_originsysglobal_com%2FDocuments%2FRecordings%2FDjango+Sessions-20260212_164050-Meeting+Recording.mp4%3Fweb%3D1&iCalUid=040000008200E00074C5B7101A82E00807EA020C2848AB945994DC01000000000000000010000000AEFCF7C43AF7604DB5447C798C0FE1EF&masterICalUid=040000008200E00074C5B7101A82E008000000002848AB945994DC01000000000000000010000000AEFCF7C43AF7604DB5447C798C0FE1EF&threadId=19%3Ameeting_YWViZTJmOTgtNDYxMS00MzkwLTkzMDgtZjZhNzVjMDc5NTZi%40thread.v2&organizerId=b5ce2ae3-9a31-4422-a064-34ce7193bce9&tenantId=6df4fb73-297c-4ed8-8709-4b162df26013&callId=f12ca48d-2b1f-4734-84e7-b995b17aed6d&threadType=Meeting&meetingType=Recurring&subType=RecapSharingLink_RecapCore', // TODO: add recording link
    },
    {
      id: 2,
      title: 'Session 2',
      description: 'Models, views, and templates.',
      pdfUrl: 'https://drive.google.com/file/d/1yyva1OlNlXjM22YVVcyPDqUvSKtEUfwK/view?usp=drive_link', // TODO: add PDF link
      recordingUrl: 'https://teams.microsoft.com/l/meetingrecap?driveId=b%21BOkZ1JEdVk-mYhj6GJVwveLeRWygSsJFgiMW7SdhJfg7qF5FRfD6QrNkOVPK3c3g&driveItemId=01ZLUAA53WXU74NCKIOBF3XO7DNW4GPGTT&sitePath=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2Fpersonal%2Fmohamed_raafat_originsysglobal_com%2FDocuments%2FRecordings%2FDjango+Sessions-20260212_164425-Meeting+Recording.mp4&fileUrl=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2Fpersonal%2Fmohamed_raafat_originsysglobal_com%2FDocuments%2FRecordings%2FDjango+Sessions-20260212_164425-Meeting+Recording.mp4&iCalUid=040000008200E00074C5B7101A82E00807EA020C2848AB945994DC01000000000000000010000000AEFCF7C43AF7604DB5447C798C0FE1EF&masterICalUid=040000008200E00074C5B7101A82E008000000002848AB945994DC01000000000000000010000000AEFCF7C43AF7604DB5447C798C0FE1EF&threadId=19%3Ameeting_YWViZTJmOTgtNDYxMS00MzkwLTkzMDgtZjZhNzVjMDc5NTZi%40thread.v2&organizerId=b5ce2ae3-9a31-4422-a064-34ce7193bce9&tenantId=6df4fb73-297c-4ed8-8709-4b162df26013&callId=f12ca48d-2b1f-4734-84e7-b995b17aed6d&threadType=Meeting&meetingType=Recurring&subType=RecapSharingLink_RecapCore', // TODO: add recording link
    },
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Links</h1>
        <p className="links-subtitle">Resources for the Django Intro section</p>
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

export default DjangoIntroLinks
