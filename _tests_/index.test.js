import { configureStore } from "@reduxjs/toolkit";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../pages";
import { mainReducer } from "../components/Store";

const mockStore = configureStore({ reducer: mainReducer });

describe("Home page", () => {
  test("renders login form when not logged in", () => {
    render(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    );
    const username = screen.getByText("Username");
    const password = screen.getByText("Password");
    const labelCount = screen.queryAllByRole("textbox");
    const loginButton = screen.getByRole("button");
    expect(username).toBeInTheDocument;
    expect(password).toBeInTheDocument;
    expect(labelCount).toHaveLength(2);
    expect(loginButton).toBeInTheDocument;
  });

  test("renders homepage when login button clicked", () => {
    render(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    );
    const loginButton = screen.queryByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const welcomeMessage = screen.getByText("Test");
    const photosButton = screen.getByText("Photo Gallery");
    expect(welcomeMessage).toBeInTheDocument;
    expect(photosButton).toBeInTheDocument;
  });
});
