"use client";

import Menu from "../menu/menu";

import { buttons, navLinks } from "./header.data";
import { HeaderContainer, Navigation } from "./header.styles";
import MockedLogo from "./mocked-logo";

export default function Header() {
  return (
    <HeaderContainer>
      <MockedLogo />
      <Navigation>
        <Menu links={navLinks} />
        <Menu links={buttons} />
      </Navigation>
    </HeaderContainer>
  );
}
