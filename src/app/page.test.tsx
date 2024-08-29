import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { describe, expect, it } from "@jest/globals";
import Home from "./page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: 'hello',
    });

    expect(heading).toBeDefined();
  });
});
