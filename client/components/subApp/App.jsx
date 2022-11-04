import React from 'react'

//import components
import Blog from '../subBlog/Blog.jsx'
function App() {
  return (
    <>
      <div className="app">
        <h1>Welcome to George Rump's Blog</h1>
        <p>
          Plan: Main Plan anyone can type, and post, Stretch: comic strip style
          see root directory image for example. Stretch Maybe put text into
          speech bubbles.
        </p>
        <p>
          note: make a setime out to change the image every ten seconds or
          something
        </p>
        <Blog />
      </div>
    </>
  )
}

export default App
