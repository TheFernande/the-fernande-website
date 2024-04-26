import { render } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { StyleSheetManager } from "styled-components";

import { usePropsFilter } from "@/hooks/use-props-filter";

/* This is used to wrap Jest tests and prevent unwanted props to be passed to the DOM. */
const TestWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  const propsFilter = usePropsFilter();

  return (
    <StyleSheetManager
      shouldForwardProp={propsFilter}
      enableVendorPrefixes
    >
      {children}
    </StyleSheetManager>
  );
};

const renderWithWrapper = (ui: ReactElement): ReturnType<typeof render> =>
  render(ui, { wrapper: TestWrapper });

export * from "@testing-library/react";
export { renderWithWrapper };
