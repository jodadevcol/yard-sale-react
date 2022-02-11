import React from "react"
import "./styles.css"
import logo from "@img/logo-yard-sale.svg"
import email from "@icons/email.svg"

function RecoveryPass() {
  return (
    <>
      <div className="login">
        <div className="login-form-container">
          <img
            className="login-logo"
            src={logo}
            alt="YARD Sale Logo"
          />

          <h1 className="login-title">Email has been sent!</h1>
          <p className="login-subtitle">
            Please check your inbox for instructions on how to reset the
            password
          </p>

          <figure className="login-email">
            <img src={email} alt="Send Email" />
          </figure>

          <button className="login-btn primary-btn">Login</button>

          <p className="resend-email">
            <span>Didn’t receive the email?</span>
            <a href="/"> Resend</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default RecoveryPass