import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import { Home } from '../pages/home'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      // { path: '/about', element: <About /> },
      // { path: '/contact', element: <Contact /> },
      // { path: '*', element: <Navigate to="/404" replace /> },
      { path: '*', element: <>não é a home</> },
    ],
  },
])
