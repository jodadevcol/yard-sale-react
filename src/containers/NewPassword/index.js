import "./styles.css"
/* import logo from "img/logo-yard-sale.svg" */

function NewPassword() {
  return (
    <>
      <div className="login">
        <div className="login-form-container">
          {/* <img
            className="login-logo"
            src={logo}
            alt="YARD Sale Logo"
          /> */}

          <h1 className="login-title">Create a new password</h1>
          <p className="login-subtitle">
            Enter a new password for your account
          </p>

          <form className="form" action="/">
            {/* <!-- Password --> */}
            <label className="form-label" for="password">
              Password
            </label>
            <input
              className="form-input input-password"
              type="password"
              id="password"
              placeholder="*****"
            />
            {/* <!-- Re-Password --> */}
            <label className="form-label" for="password">
              Password
            </label>
            <input
              className="form-input input-password"
              type="password"
              id="password"
              placeholder="*****"
            />
            {/* <!-- Confirm --> */}
            <input
              className="form-btn login-btn primary-btn"
              type="submit"
              value="Confirm"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default NewPassword
