import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Topics from '../pages/Topics/Topics'
import ReactTrack from '../pages/ReactTrack/ReactTrack'
import ReactIntroIndex from '../pages/ReactTrack/ReactIntro/index'
import ReactBasicsQA from '../pages/ReactTrack/ReactIntro/ReactBasicsQA'
import ReactIntroProject from '../pages/ReactTrack/ReactIntro/Project'
import ReactIntermediateIndex from '../pages/ReactTrack/ReactIntermediate/index'
import IntermediateQA from '../pages/ReactTrack/ReactIntermediate/IntermediateQA'
import ReactIntermediateProject from '../pages/ReactTrack/ReactIntermediate/Project'
import ReactAdvancedIndex from '../pages/ReactTrack/ReactAdvanced/index'
import ReactAndDjango from '../pages/ReactTrack/ReactAdvanced/ReactAndDjango'
import ReactAndDjangoQA from '../pages/ReactTrack/ReactAdvanced/ReactAndDjangoQA'
import ReactAdvancedArticle from '../pages/ReactTrack/ReactAdvanced/ReactAdvancedArticle'
import ReactAdvancedProject from '../pages/ReactTrack/ReactAdvanced/Project'
import JsTrack from '../pages/JsTrack/JsTrack'
import JsIntro from '../pages/JsTrack/JsIntro'
import JsIntermediate from '../pages/JsTrack/JsIntermediate'
import JsAdvanced from '../pages/JsTrack/JsAdvanced'
import DjangoTrack from '../pages/DjangoTrack/DjangoTrack'
import DjangoIntroIndex from '../pages/DjangoTrack/DjangoIntro/index'
import DjangoBasicsQA from '../pages/DjangoTrack/DjangoIntro/DjangoBasicsQA'
import DjangoIntroProject from '../pages/DjangoTrack/DjangoIntro/Project'
import DjangoIntermediateIndex from '../pages/DjangoTrack/DjangoIntermediate/index'
import DjangoIntermediateQA from '../pages/DjangoTrack/DjangoIntermediate/IntermediateQA'
import DjangoIntermediateProject from '../pages/DjangoTrack/DjangoIntermediate/Project'
import DjangoAdvancedIndex from '../pages/DjangoTrack/DjangoAdvanced/index'
import DjangoAdvancedQA from '../pages/DjangoTrack/DjangoAdvanced/AdvancedQA'
import DjangoRestFramework from '../pages/DjangoTrack/DjangoAdvanced/DjangoRestFramework'
import DjangoPerformanceTuning from '../pages/DjangoTrack/DjangoAdvanced/DjangoPerformanceTuning'
import DjangoProduction from '../pages/DjangoTrack/DjangoAdvanced/DjangoProduction'
import DjangoAdvancedProject from '../pages/DjangoTrack/DjangoAdvanced/Project'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/topics',
    element: <Topics />,
  },
  {
    path: '/react',
    element: <ReactTrack />,
  },
  {
    path: '/react/intro',
    element: <ReactIntroIndex />,
    children: [
      {
        path: 'react-basics',
        element: <ReactBasicsQA />,
      },
      {
        path: 'project',
        element: <ReactIntroProject />,
      },
    ],
  },
  {
    path: '/react/intermediate',
    element: <ReactIntermediateIndex />,
    children: [
      {
        path: 'intermediate-qa',
        element: <IntermediateQA />,
      },
      {
        path: 'project',
        element: <ReactIntermediateProject />,
      },
    ],
  },
  {
    path: '/react/advanced',
    element: <ReactAdvancedIndex />,
    children: [
      {
        path: 'react-and-django',
        element: <ReactAndDjango />,
      },
      {
        path: 'react-advanced',
        element: <ReactAdvancedArticle />,
      },
      {
        path: 'common-questions',
        element: <ReactAndDjangoQA />,
      },
      {
        path: 'project',
        element: <ReactAdvancedProject />,
      },
    ],
  },
  {
    path: '/javascript',
    element: <JsTrack />,
  },
  {
    path: '/javascript/intro',
    element: <JsIntro />,
  },
  {
    path: '/javascript/intermediate',
    element: <JsIntermediate />,
  },
  {
    path: '/javascript/advanced',
    element: <JsAdvanced />,
  },
  {
    path: '/django',
    element: <DjangoTrack />,
  },
  {
    path: '/django/intro',
    element: <DjangoIntroIndex />,
    children: [
      {
        path: 'django-basics',
        element: <DjangoBasicsQA />,
      },
      {
        path: 'project',
        element: <DjangoIntroProject />,
      },
    ],
  },
  {
    path: '/django/intermediate',
    element: <DjangoIntermediateIndex />,
    children: [
      {
        path: 'intermediate-qa',
        element: <DjangoIntermediateQA />,
      },
      {
        path: 'project',
        element: <DjangoIntermediateProject />,
      },
    ],
  },
  {
    path: '/django/advanced',
    element: <DjangoAdvancedIndex />,
    children: [
      {
        path: 'advanced-qa',
        element: <DjangoAdvancedQA />,
      },
      {
        path: 'django-rest-framework',
        element: <DjangoRestFramework />,
      },
      {
        path: 'performance-tuning',
        element: <DjangoPerformanceTuning />,
      },
      {
        path: 'production',
        element: <DjangoProduction />,
      },
      {
        path: 'project',
        element: <DjangoAdvancedProject />,
      },
    ],
  },
])

