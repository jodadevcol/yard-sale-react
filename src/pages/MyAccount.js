import React from "react"
import "./MyAccount.css"

function MyAccount() {
  return (
    <div className="account">
      <div className="account-form-container">
        <h1 className="account-title">My account</h1>

        <form className="form" action="/">
          <div className="form-data">
            {/* <!-- Name --> */}
            <label className="form-label" for="Name">Name</label>
            <p className="form-read-only">Camila Yokoo</p>

            {/* <!-- Email address --> */}
            <label className="form-label" for="email-address">Email address</label>
            <p className="form-read-only">camilayokoo@gmail.com</p>

            {/* <!-- Password --> */}
            <label className="form-label" for="password">Password</label>
            <p className="form-read-only">***********</p>
          </div>
          {/* <!-- Confirm --> */}
          <input className="form-btn account-btn secondary-btn" type="submit" value="Edit" />
        </form>
      </div>
    </div>
  )
}

export default MyAccount