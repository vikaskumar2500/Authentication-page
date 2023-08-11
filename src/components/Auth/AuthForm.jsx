import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../store/AuthContext";

import "./AuthForm.css";
const logouturl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPJhUdptjDOrFWJ5z5b0L6opgZsGKqfEo";
const loginUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPJhUdptjDOrFWJ5z5b0L6opgZsGKqfEo";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthHandler = () => {
    setIsLogin((prev) => !prev);
  };
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("Form Running");
    setIsLoading(true);

    let url = null;
    if (isLogin) url = loginUrl;
    else url = logouturl;

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
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((data) => {
            let errorMessage = "Authentication Invalid";
            if (data.error && data.error.message)
              errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        enteredEmailRef.current.value = "";
        enteredPasswordRef.current.value = "";
        setIsLoading(false);
      })
      .catch(error=>alert(error.message));
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
