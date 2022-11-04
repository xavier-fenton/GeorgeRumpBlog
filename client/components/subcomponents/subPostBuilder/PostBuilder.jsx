import React, { useState } from 'react'
// useQuery
const PostBuilder = () => {
  const [item, setItems] = useState([
    {
      type: 'some-type',
      id: 'some-id',
      content: 'somecont',
    },
  ])

  return (
    <div className="posts-styling">
      {item.map((items) => (
        <p key={item.id}>{items.type}</p>
      ))}
    </div>
  )
}

export default PostBuilder
