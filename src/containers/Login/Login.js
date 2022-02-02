import "./Login.css";

function Login() {
  return (
    <>
      <div className="login">
        <div className="login-form-container">
          <img
            className="login-logo"
            src="./assets/images/logos/logo_yard_sale.svg"
            alt="YARD Sale Logo"
          />

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
  );
}

export default Login;