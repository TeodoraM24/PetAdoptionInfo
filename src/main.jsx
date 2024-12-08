import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from  './pages/About.jsx'
import Endpoints from './pages/Endpoints.jsx'
import Links from './pages/Links.jsx'
import Home from './pages/Home.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='endpoints' element={<Endpoints />} />
      <Route path='links' element={<Links />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
