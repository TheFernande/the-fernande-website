import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const footerStyles = css`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  max-width: calc(1200px - 4rem);
  margin: ${theme.spacings.xxl} auto;
  padding: 1rem 2rem;
`;

const topContainerStyles = css`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;

const bottomContainerStyles = css`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const navigationStyles = css`
  display: flex;
  align-items: center;
  gap: 8rem;
  margin-left: 8rem;
`;

const FooterContainer = styled.footer`
  ${footerStyles}
`;

const TopContainer = styled.div`
  ${topContainerStyles}
`;

const BottomContainer = styled.div`
  ${bottomContainerStyles}
`;

const Navigation = styled.nav`
  ${navigationStyles}
`;

export { BottomContainer, FooterContainer, Navigation, TopContainer };
