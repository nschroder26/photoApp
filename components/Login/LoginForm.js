import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <Card className={classes.login}>
      <form>
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
