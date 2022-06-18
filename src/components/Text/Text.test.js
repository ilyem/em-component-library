import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text component", () => {
  it("should render the text content", async () => {
    render(<Text size={14}>some text</Text>);
    const textItem = await screen.findByText("some text");

    expect(textItem).toBeDefined();
  });

  it("should render a custom tag", () => {
    render(
      <Text size={14} tag="span">
        some text
      </Text>
    );
    const textItem = screen.getByText(
      (content, element) =>
        element.tagName.toLowerCase() === "span" && content.match("some text")
    );

    expect(textItem).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(
      <Text
        className="some-class"
        color="orange"
        size={14}
        tag="span"
        type="heavy"
      >
        some text
      </Text>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
