import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import jsLogo from '../../assets/js.png'
import './JsIntro.css'
import './JsLinks.css'

function JsLinks() {
  const navigate = useNavigate()

  const sessions = [
    {
      id: 1,
      title: 'Session 1',
      description: 'Add your session description and links below.',
      pdfUrl: 'https://drive.google.com/file/d/1PMpPgQSSM4jClLFviGe2JaMFbrrTXMRm/view?usp=sharing',
      recordingUrl: 'https://teams.microsoft.com/l/meetingrecap?driveId=b%214O3FgbRnK0yaMUqis27u5nvFY9CZO0xLkOD2u8uTf_GTWkNNewcVTpM6guaRHbYk&driveItemId=01V7BDS6S2VOHH57WH7NHIGWRQBCNWY64D&sitePath=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fahmed_rabiea_originsysglobal_com%2FIQBaq45-_sf7ToNaMAibbHuDAYYjS7NutO9umLRwomf8ULw&fileUrl=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2Fpersonal%2Fahmed_rabiea_originsysglobal_com%2FDocuments%2FRecordings%2FFront-End-20260406_153353-Meeting+Recording.mp4%3Fweb%3D1&iCalUid=040000008200E00074C5B7101A82E008000000009109EDD80FC5DC01000000000000000010000000304605CF43B81C4699C6F0852EFC35AF&threadId=19%3Ameeting_NjRmMjg0MmMtMGE1Mi00NDhhLTg4ZDMtMGMxZDhlOWZjMmE5%40thread.v2&organizerId=d9a455fd-0464-4b4e-a992-ea98f651b9a9&tenantId=6df4fb73-297c-4ed8-8709-4b162df26013&callId=ce996cb5-d703-4f3f-aa55-05635e565cdc&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapCore',
    },
    {
      id: 2,
      title: 'Session 2',
      description: 'Add your session description and links below.',
      pdfUrl: 'https://drive.google.com/file/d/1PMpPgQSSM4jClLFviGe2JaMFbrrTXMRm/view?usp=sharing',
      recordingUrl: 'https://teams.microsoft.com/l/meetingrecap?driveId=b%214O3FgbRnK0yaMUqis27u5nvFY9CZO0xLkOD2u8uTf_GTWkNNewcVTpM6guaRHbYk&driveItemId=01V7BDS6TBUGSHUXI5EVFIZKL6MSUHTWWF&sitePath=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fahmed_rabiea_originsysglobal_com%2FIQBhoaR6XR0lSoypfmSoedrFAbmbCKsDLSacuRNj-g5a1uk&fileUrl=https%3A%2F%2Foriginsysglobal0-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fahmed_rabiea_originsysglobal_com%2FIQBhoaR6XR0lSoypfmSoedrFAbmbCKsDLSacuRNj-g5a1uk&iCalUid=040000008200E00074C5B7101A82E00800000000510788B702C8DC01000000000000000010000000B140A0E726A469499A90FE3B4267EF25&threadId=19%3Ameeting_MmUxMzUxMWQtNDhkOC00NTliLTkxODgtMzc5MzY1YmIwY2Y2%40thread.v2&organizerId=d9a455fd-0464-4b4e-a992-ea98f651b9a9&tenantId=6df4fb73-297c-4ed8-8709-4b162df26013&callId=e4631da4-f5a5-461a-9c61-818a84a6c6d5&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapChiclet',
    }
  ]

  return (
    <div className="app">
      <Navbar />
      <div className="level-page-container">
        <div className="level-header">
          <div className="level-logo">
            <img src={jsLogo} alt="JavaScript logo" className="level-logo-image" />
          </div>
          <h1 className="level-title">JavaScript Links</h1>
          <p className="js-links-subtitle">Resources for the JavaScript track</p>
        </div>

        <div className="js-links-list">
          {sessions.map((session) => (
            <div key={session.id} className="js-link-card">
              <h2 className="js-link-title">{session.title}</h2>
              <p className="js-link-description">{session.description}</p>
              <div className="js-link-actions">
                <a
                  href={session.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-medium js-link-button"
                >
                  PDF
                </a>
                <a
                  href={session.recordingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-medium js-link-button"
                >
                  Recorded
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="level-actions">
          <Button onClick={() => navigate('/javascript')} variant="outline">
            ← Back to JavaScript Track
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JsLinks
