import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Singup from './components/Singup.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route   path='/home' element={<Home/>}/>
<Route   path='/login' element={<Login/>}/>
<Route   path='' element={<Singup/>}/>
<Route   path='/about' element={<About/>}/>
<Route   path='/contact' element={<Contact/>}/>

    </Route>
  )
)
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
