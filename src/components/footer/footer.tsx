"use client";

import Feature from "../feature/feature";
import { featuresBlockData } from "../features-block/features-block.data";
import MockedLogo from "../header/mocked-logo";
import Menu from "../menu/menu";

import { aboutLinks, helpLinks } from "./footer.data";
import {
  BottomContainer,
  FooterContainer,
  Navigation,
  TopContainer
} from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <TopContainer>
        {Object.entries(featuresBlockData).map(([key, value]) => (
          <Feature
            key={key}
            icon={value.icon}
            title={value.title}
            subtitle={value.subtitle}
          />
        ))}
      </TopContainer>

      <BottomContainer>
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
      </BottomContainer>
    </FooterContainer>
  );
}
