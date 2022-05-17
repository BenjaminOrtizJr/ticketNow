import React from 'react'

const HomePagePost = (props) => {
    const {id, title, body} = props
    return (
      
      <div className="home-page-post">
        <small>{id}</small>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
  )
}

export default HomePagePost