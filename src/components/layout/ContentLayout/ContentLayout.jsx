import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './ContentLayout.css'

function ContentLayout({ 
  title, 
  logo, 
  articles, 
  globalArticles = [],
  backPath, 
  backLabel,
  color = '#61DAFB',
  basePath,
  trackType = 'react'
}) {
  const location = useLocation()
  const navigate = useNavigate()
  const isArticlePage = location.pathname !== basePath

  return (
    <div className="app">
      <Navbar />
      <div className="content-layout">
        <Sidebar
          title={title}
          logo={logo}
          articles={articles}
          globalArticles={globalArticles}
          backPath={backPath}
          backLabel={backLabel}
          color={color}
          trackType={trackType}
        />

        <main className="content-main">
          {isArticlePage ? (
            <Outlet />
          ) : (
            <div className="welcome-section">
              <div className="welcome-header">
                <h1 className="welcome-title">{title} Topics</h1>
                <p className="welcome-description">
                  Select an article from the sidebar to start learning.
                </p>
              </div>
              
              <div className="articles-grid">
                {articles.map((article) => (
                  <div 
                    key={article.id} 
                    className="article-card"
                    onClick={() => navigate(article.path)}
                  >
                    <h3 className="article-card-title">{article.title}</h3>
                    <p className="article-card-description">
                      Click to read the full article
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ContentLayout

