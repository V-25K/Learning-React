import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Github, {githubInfoLoader} from './components/github/Github'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/> 
      },
      {
        path: "user/:userid",
        element: <User/> 
      },
      {
        loader: githubInfoLoader,
        path: "github", 
        element: <Github/> 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
