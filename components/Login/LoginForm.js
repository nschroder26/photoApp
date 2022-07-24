import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth-slice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authActions.loginUser());
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={loginUser}>
        <div className={classes.control}>
          <label>Username</label>
          <input></input>
        </div>
        <div className={classes.control}>
          <label>Password</label>
          <input></input>
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
