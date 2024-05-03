import "@testing-library/jest-dom";

import { StyleSheetManager } from "styled-components";

import StyledComponentsRegistry from "./styled-components-registry";

import { renderWithWrapper as render } from "@/test-utils/jest-wrapper-utils";

jest.mock("styled-components", () => ({
  ServerStyleSheet: jest.fn().mockImplementation(() => ({
    getStyleElement: jest.fn(),
    instance: { clearTag: jest.fn() }
  })),
  StyleSheetManager: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>)
}));

jest.mock("next/navigation", () => ({
  useServerInsertedHTML: jest.fn()
}));

describe("StyledComponentsRegistry", () => {
  let originalWindow: Window & typeof globalThis;

  beforeEach(() => {
    originalWindow ??= global.window;
  });

  afterEach(() => {
    global.window ??= originalWindow;
  });

  test("renders children in client environment", () => {
    const { container } = render(
      <StyledComponentsRegistry>
        <div>Test Child</div>
      </StyledComponentsRegistry>
    );
    expect(container).toHaveTextContent("Test Child");
    expect(StyleSheetManager).toHaveBeenCalledWith(
      expect.objectContaining({
        enableVendorPrefixes: true
      }),
      expect.anything()
    );
  });

  test("renders children in server environment", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).window ??= undefined;

    const { container } = render(
      <StyledComponentsRegistry>
        <div>Test Child</div>
      </StyledComponentsRegistry>
    );

    expect(container).toHaveTextContent("Test Child");
    expect(StyleSheetManager).toHaveBeenCalledWith(
      expect.objectContaining({
        enableVendorPrefixes: true
      }),
      expect.anything()
    );
  });
});
