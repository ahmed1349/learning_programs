import { useNavigate } from 'react-router-dom'

export function useNavigation() {
  const navigate = useNavigate()

  return {
    navigate,
    goToHome: () => navigate('/'),
    goToTopics: () => navigate('/topics'),
    goToReact: () => navigate('/react'),
    goToJavaScript: () => navigate('/javascript'),
    goToDjango: () => navigate('/django'),
    goBack: () => navigate(-1),
  }
}

