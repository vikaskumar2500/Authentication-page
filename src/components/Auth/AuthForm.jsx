import React, { useState, useRef } from "react";

import "./AuthForm.css";
const url =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPJhUdptjDOrFWJ5z5b0L6opgZsGKqfEo";

const AuthForm = () => {
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthHandler = () => {
    setIsLogin((prev) => !prev);
  };
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("Form Running");
    setIsLoading(true);
    if (isLogin) {
    } else {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmailRef.current.value,
          password: enteredPasswordRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          console.log(data);
          if (data.error && data.error.message) {
            alert(data.error.message);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <form action="#" className="auth-form" onSubmit={authFormSubmitHandler}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <div className="input email">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          ref={enteredEmailRef}
          required
        />
      </div>

      <div className="input password">
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={enteredPasswordRef}
          required
        />
      </div>

      <div className="submit-btn">
        {!isLoading && (
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        )}
        {isLoading && <p>Sending request...</p>}
      </div>
      <button className="signup-link" onClick={switchAuthHandler}>
        {isLogin ? "Create new Account" : "Login with existing account"}
      </button>
    </form>
  );
};

export default AuthForm;
