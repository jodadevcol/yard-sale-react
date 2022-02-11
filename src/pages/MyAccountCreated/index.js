import React from "react"
import "./styles.css"

function MyAccountCreated() {
  return (
    <div className="account">
      <div className="account-form-container">
        <h1 className="account-title">My account</h1>

        <form className="form" action="/">
          <div className="form-data">
            {/* <!-- Name --> */}
            <label className="form-label" for="Name">Name</label>
            <input className="form-input input-name" type="name" id="name" placeholder="Example" />
            {/* <!-- Email address --> */}
            <label className="form-label" for="email-address">Email address</label>
            <input className="form-input input-email" type="email" id="email-address" placeholder="example@example.com" />
            {/* <!-- Password --> */}
            <label className="form-label" for="password">Password</label>
            <input className="form-input input-password" type="password" id="password" placeholder="*****" />
          </div>
          {/* <!-- Confirm --> */}
          <input className="form-btn account-btn primary-btn" type="submit" value="Create" />
        </form>
      </div>
    </div>
  )
}

export default MyAccountCreated