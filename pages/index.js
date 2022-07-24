import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/login/LoginForm";
import LoggedInHome from "../components/Login/LoggedInHome";

function Home() {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Fragment>
      {!userLoggedIn && <LoginForm />}
      {userLoggedIn && <LoggedInHome />}
    </Fragment>
  );
}

export default Home;
