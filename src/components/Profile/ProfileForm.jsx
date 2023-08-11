import React, { useRef, useContext } from "react";

import "./ProfileForm.css";
import AuthContext from "../../store/AuthContext";

const url =
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAPJhUdptjDOrFWJ5z5b0L6opgZsGKqfEo";
const ProfileForm = () => {
  const authCtx = useContext(AuthContext);

  const updatedPassInputRef = useRef('');
  const enteredUpdatedPassword = updatedPassInputRef.current.value;
  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredUpdatedPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) return response.json();
      else
        response.json().then((data) => {
          throw new Error(data.error.message);
        });
    })
    .then(data=> {
      console.log(data);
    })
    .catch(error=>alert(error));
  };

  return (
    <form action="#" className="profile" onSubmit={formSubmitHandler}>
      <h1>Update Your Password</h1>
      <div className="updated-password">
        <label htmlFor="update-password">New Password</label>
        <input
          type="password"
          name="update-password"
          id="updated-password"
          ref={updatedPassInputRef}
        />
      </div>
      <div className="profile-btn">
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
