import Link from "next/link";
import Card from "../UI/Card";

import classes from "./LoggedInHome.module.css";
import classed from "../UI/Button.module.css";

const LoggedInHome = () => {
  return (
    <Card className={classes["home-card"]}>
      <h1 className={classes["home-text"]}>Test</h1>
      <Link href="/photos">
        <button className={`${classes["home-button"]} ${classed.button}`}>
          Photo Gallery
        </button>
      </Link>
    </Card>
  );
};

export default LoggedInHome;
