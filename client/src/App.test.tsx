import { render, screen } from "./tests/test-utils";
import App from "./App";

describe("App", () => {
  it("renders the react logo", () => {
    render(<App />);
    const heading = screen.getByAltText("React logo");
    expect(heading).toBeInTheDocument();
  });
});
