import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'
import reactLogo from '../../../assets/react.webp'

function ReactAdvancedIndex() {
  const articles = [
    {
      id: 'intro-react-basics',
      title: 'Intro: React Basics Q&A',
      path: '/react/intro/react-basics',
    },
    {
      id: 'intro-project',
      title: 'Intro: Project',
      path: '/react/intro/project',
    },
    {
      id: 'intermediate-qa',
      title: 'Intermediate: Intermediate Q&A',
      path: '/react/intermediate/intermediate-qa',
    },
    {
      id: 'intermediate-project',
      title: 'Intermediate: Project',
      path: '/react/intermediate/project',
    },
    {
      id: 'advanced-react-and-django',
      title: 'Advanced: React and Django',
      path: '/react/advanced/react-and-django',
    },
    {
      id: 'advanced-react-advanced',
      title: 'Advanced: React Advanced',
      path: '/react/advanced/react-advanced',
    },
    {
      id: 'advanced-common-questions',
      title: 'Advanced: Common Questions',
      path: '/react/advanced/common-questions',
    },
    {
      id: 'advanced-project',
      title: 'Advanced: Project',
      path: '/react/advanced/project',
    },
  ]

  return (
    <ContentLayout
      title="React Advanced"
      logo={reactLogo}
      articles={articles}
      backPath="/react/intermediate"
      backLabel="← Back to Intermediate"
      color="#61DAFB"
      basePath="/react/advanced"
      trackType="react"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default ReactAdvancedIndex

