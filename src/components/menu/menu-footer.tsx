"use client";

import {
  FooterContainer,
  FooterItem,
  FooterLink
} from "../footer/footer.styles";
import { type LinksI } from "../menu/menu.types";

export default function FooterMenu({ links }: Readonly<LinksI>) {
  return (
    <FooterContainer>
      {links.map(({ link, text, id }) => (
        <FooterItem key={id ?? `${text}-key`}>
          <FooterLink href={link}>{text}</FooterLink>
        </FooterItem>
      ))}
    </FooterContainer>
  );
}
