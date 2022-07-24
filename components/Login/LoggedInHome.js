import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./LoggedInHome.module.css";

const LoggedInHome = () => {
  return (
    <Card className={classes["home-card"]}>
      <h1 className={classes["home-text"]}>Test</h1>
      <Button className={classes["home-button"]}>Photos</Button>
    </Card>
  );
};

export default LoggedInHome;
