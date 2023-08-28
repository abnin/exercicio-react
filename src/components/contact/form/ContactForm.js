import React from 'react'

const ContactForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState()
  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-content">
        <h3 className="form-title">Add Contact</h3>
        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control mt-1"
            value={email}
            placeholder="Enter email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Phone Number</label>
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

export default ContactForm