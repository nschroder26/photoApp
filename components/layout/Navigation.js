import Link from "next/link";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth-slice";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutUserHandler = () => {
    dispatch(authActions.logoutUser());
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">PhotoApp</Link>
      </div>

      <nav>
        <ul>
          {!userLoggedIn && (
            <li>
              <Link href="/">Login</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <Link href="/photos">Photos</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <button onClick={logoutUserHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
