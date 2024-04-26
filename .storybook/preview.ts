import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";

import { StoryWrapper } from "../src/test-utils/story-wrapper-utils";

const CUSTOM_VIEWPORTS = {
  desktop720p: {
    name: "Desktop 720p",
    styles: {
      height: "720px",
      width: "1280px"
    },
    type: "desktop"
  },
  desktop1080p: {
    name: "Desktop 1080p",
    styles: {
      height: "1080px",
      width: "1920px"
    },
    type: "desktop"
  }
};

const SELECTED_VIEWPORTS = {
  iphone5: INITIAL_VIEWPORTS.iphone5,
  iphone6: INITIAL_VIEWPORTS.iphone6,
  iphone8p: INITIAL_VIEWPORTS.iphone8p,
  iphone12: INITIAL_VIEWPORTS.iphone12,
  ipad: INITIAL_VIEWPORTS.ipad,
  ipad10p: INITIAL_VIEWPORTS.ipad10p,
  ipad12p: INITIAL_VIEWPORTS.ipad12p,
  ...CUSTOM_VIEWPORTS
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      controls: {
        sort: "requiredFirst"
      }
    },
    viewport: {
      viewports: SELECTED_VIEWPORTS
    },
    decorators: [StoryWrapper]
  }
};

export default preview;
