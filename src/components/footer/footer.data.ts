import { type LinkI } from "../menu/menu.types";

const aboutLinks: LinkI[] = [
  { id: "about-us-id", link: "/about-us", text: "About us" },
  { id: "contact-id", link: "/contact", text: "Contact" }
];

const helpLinks: LinkI[] = [
  { id: "track-order-id", link: "/track-order", text: "Track your order" },
  { id: "privacy-policy-id", link: "/privacy-policy", text: "Privacy policy" }
];

export { aboutLinks, helpLinks };
