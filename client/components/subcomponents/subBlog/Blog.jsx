import React from 'react'
import Images from '../Pictures/Images'
import BlogPosts from '../subBlogPosts/BlogPosts'
import PostBuilder from '../subPostBuilder/PostBuilder'

const Blog = () => {
  return (
    <div>
      <BlogPosts />
      <PostBuilder />
      <Images />
    </div>
  )
}

export default Blog
