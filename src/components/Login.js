import React, { useState } from 'react'
import Home from '../pages/Home'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    e.preventDefault();
    const user = {email, password};
    setUser(user)
    localStorage.setItem('user', user)
  }

  if (user) {
    return <Home />;
    // "usuário" está conectado
  }

  return (    
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              value={email}
              placeholder="Enter email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              value={password}
              placeholder="Enter password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login