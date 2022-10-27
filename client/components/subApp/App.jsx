import React from 'react'
import { getFruits } from '../../apis/fruits'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits, selectFruits } from '../slices/fruits'

function App() {
  // const [fruits, setFruits] = useState(fruits)
  // // const dispatch = useDispatch()

  // useEffect(async () => {
  //   getFruits(fruits)
  // }, [])

  return (
    <>
      <div className="app">
        <h1>Welcome to George Rump's Blog</h1>
        <p>
          Plan: setup as if this is an admin page, because we just want people
          to see the blogs posts.
        </p>
      </div>
    </>
  )
}

export default App
