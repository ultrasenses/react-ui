import { addParameters } from "@storybook/client-api";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemesProvider } from "themeprovider-storybook";

addParameters({
  viewMode: "docs",
});

const viewports = {
  1920: {
    name: "1920x1204",
    type: "desktop",
    styles: {
      width: "1920px",
      height: "1204px",
    },
  },
  1024: {
    name: "1024x768",
    type: "tablet",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  375: {
    name: "375x812",
    type: "mobile",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
};

export const parameters = {
  viewport: {
    viewports,
  },
};

const themes = [
  {
    name: "Light",
    backgroundColor: "#ffffff",
  },
  {
    name: "Dark",
    backgroundColor: "#121212",
  },
];

addDecorator(withThemesProvider(themes, ThemeProvider));
