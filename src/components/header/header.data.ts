import { type LinkI } from "../menu/menu.types";

const navLinks: LinkI[] = [
  { id: "shop-id", link: "/shop", text: "Shop" },
  { id: "new-id", link: "/new", text: "New" },
  { id: "cart-id", link: "/cart", text: "Cart" }
];

const buttons: LinkI[] = [
  { id: "login-id", link: "Login", text: "Login" },
  { id: "register-id", link: "Register", text: "Register" }
];

export { buttons, navLinks };
