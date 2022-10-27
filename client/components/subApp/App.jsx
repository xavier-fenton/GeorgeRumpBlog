import React from 'react'
import { getFruits } from '../../apis/fruits'

//import components
import Blog from '../subBlogPosts/Blog.jsx'
function App() {
  return (
    <>
      <div className="app">
        <h1>Welcome to George Rump's Blog</h1>
        <p>
          Plan: setup as if this is an admin page, because we just want people
          to see the blogs posts.
        </p>
        <Blog />
      </div>
    </>
  )
}

export default App
