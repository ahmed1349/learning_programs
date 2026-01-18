import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Topics from '../pages/Topics/Topics'
import ReactTrack from '../pages/ReactTrack/ReactTrack'
import JsTrack from '../pages/JsTrack/JsTrack'
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
    path: '/javascript',
    element: <JsTrack />,
  },
  {
    path: '/django',
    element: <DjangoTrack />,
  },
])

