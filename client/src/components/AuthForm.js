import React from 'react'

const AuthForm = (props) => {
  const {
    handleChange, 
    handleSubmit, 
    btnText,
    errMsg,
    inputs: {
      username, 
      password
    } 
  } = props
  
  return (
    <>
    <h1 className="login-title">🎫TicketNow</h1>
    <form onSubmit={handleSubmit}>
      
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="password" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button>{btnText}</button>
      <div className="err-box">
      <p style={{color: "red"}}>{errMsg}</p>
      </div>
      </form>
    </>
  )
}

export default AuthForm