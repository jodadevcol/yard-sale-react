import React, { useRef } from "react"
import BtnPrimary from "@components/Buttons/Primary"
import BtnSecond from "@components/Buttons/Secondary"
import "./styles.css"
/* import Logo from '@img/logo-yard-sale.svg' */

function Login() {
  const form = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      userName: formData.get('emailAddress'),
      password: formData.get('password')
    }

    console.log({
      data
    })
  }

  return (
    <div className="login">
      <div className="login-form-container">
        {/* <img
          className="login-logo"
          src={Logo}
          alt="YARD Sale Logo"
        /> */}

        <form className="form" action="/" ref={form}>
          {/* <!-- Email address --> */}
          <label className="form-label" hrmlfor="emailAddress">Email Address</label>
          <input
            className="form-input input-email"
            type="email"
            name="emailAddress"
            placeholder="email@example.com"
          />
          {/* <!-- Password --> */}
          <label className="form-label" hrmlfor="password">Password</label>
          <input
            className="form-input input-password"
            type="password"
            name="password"
            placeholder="*****"
          />
          {/* <!-- Confirm --> */}
          <BtnPrimary
            text="Log in"
            handlerEvent={handleSubmit}
          />

          <a className="forgot-password" href="/">Forgot my password</a>
        </form>

        {/* <!-- Sig up --> */}
        <BtnSecond
          text="Sign up"
        />
      </div>
    </div>
  )
}

export default Login