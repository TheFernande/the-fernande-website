import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

/* TODO: Implement the following styles
  const currentWidth = `calc(1200px - ${theme.spacings.xxxl})`;
  const halfWidth = `calc(${currentWidth} / 2)`;

  height: `${halfWidth}`,
 */

const containerStyles = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacings.xxs};
`;

const leftBlockStyles = css`
  width: 100%;
`;

const rightBlockStyles = css`
  width: 100%;
`;

const Container = styled.section`
  ${containerStyles}
`;

const LeftBlock = styled.div`
  ${leftBlockStyles}
`;

const RightBlock = styled.div`
  ${rightBlockStyles}
`;

export { Container, LeftBlock, RightBlock };
