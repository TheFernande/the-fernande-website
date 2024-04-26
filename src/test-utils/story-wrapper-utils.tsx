import React, {
  StrictMode,
  createContext,
  useEffect,
  type HTMLAttributes
} from "react";
import {
  StyleSheetManager,
  ThemeProvider,
  createGlobalStyle,
  styled
} from "styled-components";

import { propsFilter } from "./props-filter-utils";

import { globalStyles } from "@/styles/global-styles";
import { theme } from "@/styles/theme";

export const StoryContext = createContext("");

const StoryWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0.5rem 0;
`;

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  storyId: string;
}

const Wrapper: React.FC<WrapperProps> = ({ storyId, children, ...rest }) => {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent(`story_mounted_${storyId}`));
  }, [storyId]);

  return (
    <StrictMode>
      {/* This will be used for the imageshots testing */}
      <StoryContext.Provider value={storyId}>
        <StoryWrapperDiv {...rest}>{children}</StoryWrapperDiv>
      </StoryContext.Provider>
    </StrictMode>
  );
};

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

/* Below wrapper is ignored from coverage because it's not reachable by Jest. */
/* istanbul ignore next */
const StoryWrapper = (
  storyFn: () => React.ReactNode,
  context: { id: string }
): JSX.Element => {
  return (
    <StyleSheetManager
      shouldForwardProp={propsFilter}
      enableVendorPrefixes
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper storyId={context.id}>{storyFn()}</Wrapper>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export { StoryWrapper, Wrapper };
