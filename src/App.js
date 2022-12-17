import { createBrowserRouter } from "react-router-dom";

import Home from './pages/home'
import Erro from "./pages/erro";
import Matematica from './pages/mat'
import Fisica from './pages/fisica'
import Quimica from './pages/quimica'
import { Termo } from './pages/fisica/Termologia'
import { Cine } from "./pages/fisica/cinematica";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '*',
    element: <Erro/>
  },
  {
    path: '/matematica',
    element: <Matematica />
  },
  {
    path: '/fisica',
    element: <Fisica />
  },
  {
    path: '/fisica/termologia',
    element: <Termo />
  },
  {
    path: '/fisica/cinematica',
    element: <Cine />
  },
  {
    path: '/quimica',
    element: <Quimica/>
  }
])

export { router };