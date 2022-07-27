import { configureStore } from "@reduxjs/toolkit";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { mainReducer } from "../components/Store";
import Navigation from "../components/layout/Navigation";
import Home from "../pages";

const mockStore = configureStore({ reducer: mainReducer });

describe("Navbar", () => {
  test("renders only Logo and Login navbar item", () => {
    render(
      <Provider store={mockStore}>
        <Navigation />
      </Provider>
    );
    const homeLogo = screen.getByRole("link", { name: "PhotoApp" });
    const navLogin = screen.getByRole("link", { name: "Login" });
    const linkCount = screen.queryAllByRole("link");

    expect(homeLogo).toBeInTheDocument;
    expect(navLogin).toBeInTheDocument;
    expect(linkCount).toHaveLength(2);
  });

  test("renders Photos, Profile, and Logout when login button clicked", () => {
    render(
      <Provider store={mockStore}>
        <Navigation />
        <Home />
      </Provider>
    );
    const loginButton = screen.queryByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const photoNavLink = screen.getByRole("link", { name: "Photos" });
    const profileNavLink = screen.getByRole("link", { name: "Photos" });
    const logoutNavLink = screen.getByRole("link", { name: "Photos" });

    expect(photoNavLink).toBeInTheDocument;
    expect(profileNavLink).toBeInTheDocument;
    expect(logoutNavLink).toBeInTheDocument;
  });

  test("renders Login Form and updates Navbar when logout button clicked", () => {
    render(
      <Provider store={mockStore}>
        <Navigation />
        <Home />
      </Provider>
    );
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);

    const homeLogo = screen.getByRole("link", { name: "PhotoApp" });
    const navLogin = screen.getByRole("link", { name: "Login" });
    const linkCount = screen.queryAllByRole("link");

    expect(homeLogo).toBeInTheDocument;
    expect(navLogin).toBeInTheDocument;
    expect(linkCount).toHaveLength(2);
  });
});
