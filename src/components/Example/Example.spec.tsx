import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Example from "./Example";

describe("Example", () => {
  it("should render Example component with title", () => {
    const Component = render(<Example />);
    expect(
      screen.getByText("❄ Next.js & TypeScript starter template ❄")
    ).toBeInTheDocument();

    expect(Component).toMatchSnapshot();
  });
});
