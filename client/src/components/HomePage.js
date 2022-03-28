import React, { useState, useEffect } from 'react'
import HomePagePost from './HomePagePost'
const url = 'https://jsonplaceholder.typicode.com/posts'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('something went wrong while requesting posts')
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message))
  }, []);

  if (error) return <h1>{error}</h1>

  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <div className="post-container">
        {posts.map(post => <HomePagePost {...post} key={post._id} />)}
      </div>
    </div>
  )
}

export default HomePage