import { css, styled } from "styled-components";

const headerStyles = css`
  width: 100%;
`;

const subContainerStyles = css`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6rem;
  max-width: calc(1200px - 4rem);
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const HeaderContainer = styled.header`
  ${headerStyles}
`;

const SubContainer = styled.div`
  ${subContainerStyles}
`;

const navigationStyles = css`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Navigation = styled.nav`
  ${navigationStyles}
`;

export { HeaderContainer, Navigation, SubContainer };
