"use client";

import {
  MenuContainer,
  MenuItem,
  MenuLink,
  MenuList,
  Title
} from "./menu.styles";
import { type MenuI } from "./menu.types";

export default function Menu({
  links,
  orientation = "vertical",
  title
}: Readonly<MenuI>) {
  return (
    <MenuContainer orientation={orientation}>
      {title ? <Title>{title}</Title> : null}
      <MenuList orientation={orientation}>
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
      </MenuList>
    </MenuContainer>
  );
}
