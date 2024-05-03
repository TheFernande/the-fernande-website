"use client";

import { MenuContainer, MenuItem, MenuLink, Title } from "./menu.styles";
import { type MenuI } from "./menu.types";

export default function Menu({
  links,
  orientation = "vertical",
  title
}: Readonly<MenuI>) {
  return (
    <MenuContainer orientation={orientation}>
      {title ? <Title>{title}</Title> : null}
      {links.map(({ link, text, id }) => (
        <MenuItem key={id ?? `${text}-key`}>
          <MenuLink
            href={link}
            title={title}
          >
            {text}
          </MenuLink>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}
