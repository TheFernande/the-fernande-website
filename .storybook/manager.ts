import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "The Fernande Storybook",
    brandUrl: "",
    brandImage: "",
    brandTarget: "_self"
  })
});
