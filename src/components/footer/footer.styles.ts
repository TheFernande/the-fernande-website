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

const FooterContainer = styled.footer`
  ${footerStyles}
`;

const columnStyles = css`
  flex: 1;
  align-items: columns;
  gap: 2rem;
`;

const FooterColumn = styled.div`
  ${columnStyles}
`;

const titleStyles = css`
  justify-items: start;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const FooterTitle = styled.h3`
  ${titleStyles}
`;

const FooterLinkStyles = css`
  padding: 0.5rem 1rem;
  color: #0d0325;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  text-decoration: none;

  &:hover {
    color: #5a258e;
  }

  &:focus {
    color: #227991;
    outline: none;
  }

  &:active {
    color: #fe7474;
  }
`;
const FooterLink = styled.a`
  ${FooterLinkStyles}
`;

const FooterItemStyles = css`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FooterItem = styled.li`
  ${FooterItemStyles}
`;

export { FooterColumn, FooterContainer, FooterItem, FooterLink, FooterTitle };

// import { css, styled } from "styled-components";

// const footerStyles = css`;
//   display: flex;
//   position: relative;
//   align-items: center;
//   justify-content: center;
//   gap: 6rem;
//   max-width: calc(1200px - 4rem);
//   padding: 1rem 2rem;
// `;

// const FooterContainer = styled.footer`
//   ${footerStyles}
// `;

// export { FooterContainer };
