import { css, styled } from "styled-components";

const menuContainerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  width: fit-content;
  margin: 0;
  padding: 0.25rem 0;
`;

const menuItemStyles = css`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const menuLinkStyles = css`
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

const MenuContainer = styled.ul`
  ${menuContainerStyles}
`;

const MenuItem = styled.li`
  ${menuItemStyles}
`;

const MenuLink = styled.a`
  ${menuLinkStyles}
`;

export { MenuContainer, MenuItem, MenuLink };
