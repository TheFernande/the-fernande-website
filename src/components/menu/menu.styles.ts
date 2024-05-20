import { css, styled } from "styled-components";

import { type MenuI } from "./menu.types";

import { theme } from "@/styles/theme";

const menuContainerStyles = (
  props: Pick<MenuI, "orientation">
): ReturnType<typeof css> => {
  const { orientation } = props;

  return css`
    display: flex;
    flex-direction: ${orientation === "vertical" ? "column" : "row"};
    justify-content: space-between;
    width: fit-content;
    margin: 0;
    padding: 0.25rem 0;
  `;
};

const menuListStyles = (
  props: Pick<MenuI, "orientation">
): ReturnType<typeof css> => {
  const { orientation } = props;

  return css`
    display: flex;
    flex-direction: ${orientation === "vertical" ? "column" : "row"};
    justify-content: space-between;
    gap: ${theme.spacings.m};
    margin: 0;
    padding: 0;
  `;
};

const menuItemStyles = css`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const menuLinkStyles = (
  props: Pick<MenuI, "title">
): ReturnType<typeof css> => {
  const { title } = props;

  return css`
    margin: 0;
    padding: ${title ? "0" : "0.5rem 1rem"};
    color: #0d0325;
    font-size: 1rem;
    font-weight: 600;
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
};

const titleStyles = css`
  margin: 0 0 ${theme.spacings.m} 0;
  padding: 0;
  color: #0d0325;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.05rem;
`;

const MenuContainer = styled.div<Pick<MenuI, "orientation">>`
  ${menuContainerStyles}
`;

const MenuList = styled.ul<Pick<MenuI, "orientation">>`
  ${menuListStyles}
`;

const MenuItem = styled.li<Pick<MenuI, "title">>`
  ${menuItemStyles}
`;

const MenuLink = styled.a`
  ${menuLinkStyles}
`;

const Title = styled.h2`
  ${titleStyles}
`;

export { MenuContainer, MenuItem, MenuLink, MenuList, Title };
