import { type LinkI } from "../menu/menu.types";

const navLinks: LinkI[] = [
  { id: "shop-id", link: "/shop", text: "Shop" },
  { id: "cart-id", link: "/cart", text: "Cart" },
  { id: "contact-id", link: "/contact", text: "Contact" }
];

const buttons: LinkI[] = [
  { id: "login-id", link: "Login", text: "Login" },
  { id: "register-id", link: "Register", text: "Register" }
];

export { buttons, navLinks };
