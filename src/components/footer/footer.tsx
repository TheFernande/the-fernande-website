"use client";

import FooterMenu from "../menu/menu-footer";

import { aboutLinks, helpLinks } from "./footer.data";
import { FooterColumn, FooterContainer, FooterTitle } from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterColumn>
        <FooterTitle>About</FooterTitle>
        <FooterMenu links={aboutLinks} />
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Help</FooterTitle>
        <FooterMenu links={helpLinks} />
      </FooterColumn>
    </FooterContainer>
  );
}

// "use client";

// import Menu from "../menu/menu";

// import { navLinks } from "./footer.data";
// import { FooterContainer } from "./footer.styles";

// export default function Footer() {
//   return (
//     <FooterContainer>
//       <p>© 2024</p>
//       <h3>About</h3>
//       <ul>
//         <Menu links={navLinks} />
//       </ul>
//     </FooterContainer>
//   );
// }
