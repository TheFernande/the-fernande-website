"use client";

import MockedLogo from "../header/mocked-logo";
import Menu from "../menu/menu";

import { aboutLinks, helpLinks } from "./footer.data";
import { FooterContainer, Navigation } from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <MockedLogo />
      <Navigation>
        <Menu
          links={aboutLinks}
          title='About'
        />
        <Menu
          links={helpLinks}
          title='Help'
        />
      </Navigation>
    </FooterContainer>
  );
}
