import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'
import djangoLogo from '../../../assets/django.png'

function DjangoAdvancedIndex() {
  const articles = [
    {
      id: 'intro-django-basics',
      title: 'Intro: Django Basics Q&A',
      path: '/django/intro/django-basics',
    },
    {
      id: 'intro-project',
      title: 'Intro: Project',
      path: '/django/intro/project',
    },
    {
      id: 'intermediate-qa',
      title: 'Intermediate: Django Intermediate Q&A',
      path: '/django/intermediate/intermediate-qa',
    },
    {
      id: 'intermediate-project',
      title: 'Intermediate: Project',
      path: '/django/intermediate/project',
    },
    {
      id: 'advanced-qa',
      title: 'Advanced: Django Advanced Q&A',
      path: '/django/advanced/advanced-qa',
    },
    {
      id: 'advanced-rest-framework',
      title: 'Advanced: REST Framework',
      path: '/django/advanced/django-rest-framework',
    },
    {
      id: 'advanced-performance-tuning',
      title: 'Advanced: Performance Tuning',
      path: '/django/advanced/performance-tuning',
    },
    {
      id: 'advanced-production',
      title: 'Advanced: Production Architecture',
      path: '/django/advanced/production',
    },
    {
      id: 'advanced-project',
      title: 'Advanced: Project',
      path: '/django/advanced/project',
    },
  ]

  return (
    <ContentLayout
      title="Django Advanced"
      logo={djangoLogo}
      articles={articles}
      backPath="/django/intermediate"
      backLabel="← Back to Intermediate"
      color="#092E20"
      basePath="/django/advanced"
      trackType="django"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default DjangoAdvancedIndex

