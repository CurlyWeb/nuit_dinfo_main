import React, { useState } from 'react'
import "./Login.css"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signIn = (e) => {
      e.preventDefault();
    };
  

    return (
        <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email :</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        
      </div>
    </div>
    )
}

export default Login
