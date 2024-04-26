import type { StorybookConfig } from "@storybook/react-vite";
import path, { dirname, join } from "path";

import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/stories/**"]
        }
      }
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-webpack5-compiler-swc"
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation"
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript"
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic"
        }
      }
    }
  })
};

config.viteFinal = async (config, { configType }) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@/assets": path.resolve(__dirname, "../src/assets"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/constants": path.resolve(__dirname, "../src/constants"),
        "@/hooks": path.resolve(__dirname, "../src/hooks"),
        "@/styles": path.resolve(__dirname, "../src/styles"),
        "@/test-utils": path.resolve(__dirname, "../src/test-utils"),
        "@/utils": path.resolve(__dirname, "../src/utils")
      }
    }
  });
};

export default config;
