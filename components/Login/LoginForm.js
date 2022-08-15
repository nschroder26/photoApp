import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./LoginForm.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth-slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginUser = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAdmBz0aZDLbD8mgZQDmvZSy-n-9X-NN0";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
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
          return response.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authActions.loginUser(data.idToken));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={loginUser}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" ref={emailInputRef} required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" ref={passwordInputRef} required></input>
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
