"use client";

import Menu from "../menu/menu";

import { buttons, navLinks } from "./header.data";
import { HeaderContainer, Navigation, SubContainer } from "./header.styles";
import MockedLogo from "./mocked-logo";

export default function Header() {
  return (
    <HeaderContainer>
      <SubContainer>
        <MockedLogo />
        <Navigation>
          <Menu
            links={navLinks}
            orientation='horizontal'
          />
          <Menu
            links={buttons}
            orientation='horizontal'
          />
        </Navigation>
      </SubContainer>
    </HeaderContainer>
  );
}
