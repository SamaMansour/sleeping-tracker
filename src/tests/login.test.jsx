import React from "react";
import Login from "../layouts/auth/login";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe("signup step", function() {
  const mockStore = configureStore();
  const initialState = { output: 10 };
  let store;

  it("should render Register component correctly", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const element = screen.getByText("Tracker");
   
    const email = screen.getByTestId('email');
    fireEvent.change(email, {target: {value: 'sma123@gmail.com'}});

    const password = screen.getByTestId('password');
    fireEvent.change(password, {target: {value: 'sma12345'}});

    const btn = screen.getByRole("button", {
      name: /Login/i
    })

   

});
});