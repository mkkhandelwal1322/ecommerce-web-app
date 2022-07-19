import { fireEvent, render, screen } from "@testing-library/react";
import About from "./components/about/About";
import store from "../src/redux/store";
import { Provider, useSelector } from "react-redux";
import Wishlist from "../src/components/wishlist/Wishlist";
import Signin from "../src/components/signin/Signin";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const Wrapper = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

describe("Testing About Component", () => {
  test("Render About Image", () => {
    render(<About />);
    const aboutImage = screen.getByRole("img");
    expect(aboutImage).toHaveAttribute(
      "src",
      "https://html.design/demo/edgecut/images/slider-img.png"
    );
    expect(aboutImage).toHaveAttribute("alt", "");
  });
  test("Render About Heading", () => {
    render(<About />);
    const aboutHeading = screen.getByTestId("aboutHeading");
    expect(aboutHeading.textContent).toBe("About Us");
  });
  test("Render About Button", () => {
    render(<About />);
    const aboutButton = screen.getByTestId("aboutButton");
    expect(aboutButton).toContainHTML("aboutButton");
  });
});

describe("Testing Signin Component", () => {
  test("Checking type of Password in Signin Component", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Signin />
      </Router>,
      { wrapper: Wrapper }
    );
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });
});
