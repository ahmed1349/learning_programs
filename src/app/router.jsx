import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Topics from '../pages/Topics/Topics'
import ReactTrack from '../pages/ReactTrack/ReactTrack'
import ReactIntro from '../pages/ReactTrack/ReactIntro'
import ReactIntermediate from '../pages/ReactTrack/ReactIntermediate'
import ReactAdvanced from '../pages/ReactTrack/ReactAdvanced'
import JsTrack from '../pages/JsTrack/JsTrack'
import JsIntro from '../pages/JsTrack/JsIntro'
import JsIntermediate from '../pages/JsTrack/JsIntermediate'
import JsAdvanced from '../pages/JsTrack/JsAdvanced'
import DjangoTrack from '../pages/DjangoTrack/DjangoTrack'

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
    element: <ReactIntro />,
  },
  {
    path: '/react/intermediate',
    element: <ReactIntermediate />,
  },
  {
    path: '/react/advanced',
    element: <ReactAdvanced />,
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
])

