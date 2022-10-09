import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth-slice";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutUserHandler = () => {
    dispatch(authActions.logoutUser());
    router.push("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand href="/">PhotoApp</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {!userLoggedIn && (
              <Link href="/" passHref>
                <Nav.Link className={classes.navlink} active={false}>
                  Login
                </Nav.Link>
              </Link>
            )}
            {userLoggedIn && (
              <Link href="/photos" passHref>
                <Nav.Link className={classes.navlink} active={false}>
                  Photos
                </Nav.Link>
              </Link>
            )}
            {userLoggedIn && (
              <Link href="/profile" passHref>
                <Nav.Link className={classes.navlink} active={false}>
                  Profile
                </Nav.Link>
              </Link>
            )}
            {userLoggedIn && (
              <Link href="/" passHref>
                <Nav.Link onClick={logoutUserHandler}>Logout</Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
