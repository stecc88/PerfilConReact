import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './sections/Home.jsx'
import SobreMi from './sections/SobreMi.jsx'
import Proyectos from './sections/Proyectos.jsx'
import Habilidades from './sections/Habilidades.jsx'
import Contacto from './sections/Contacto.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre-mi', element: <SobreMi /> },
      { path: 'proyectos', element: <Proyectos /> },
      { path: 'habilidades', element: <Habilidades /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
])