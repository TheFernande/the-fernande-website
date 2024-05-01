"use client";

import { MenuContainer, MenuItem, MenuLink } from "./menu.styles";
import { type LinksI } from "./menu.types";

export default function Menu({ links }: Readonly<LinksI>) {
  return (
    <MenuContainer>
      {links.map(({ link, text, id }) => (
        <MenuItem key={id ?? `${text}-key`}>
          <MenuLink href={link}>{text}</MenuLink>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}
