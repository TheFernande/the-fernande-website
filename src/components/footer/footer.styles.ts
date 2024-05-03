import { css, styled } from "styled-components";

const footerStyles = css`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6rem;
  max-width: calc(1200px - 4rem);
  margin: 0 auto;
  padding: 1rem 2rem;
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

const Navigation = styled.nav`
  ${navigationStyles}
`;

export { FooterContainer, Navigation };
