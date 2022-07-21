import Link from "next/link";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PhotoApp</div>
      <nav>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
