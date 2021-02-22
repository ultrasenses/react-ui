import { addParameters } from '@storybook/client-api';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemesProvider } from "themeprovider-storybook";

addParameters({
  viewMode: 'docs',
});

const viewports = {
  1920: {
    name: '1920x1204',
    type: 'desktop',
    styles: {
      width: '1920px',
      height: '1204px',
    },
  },
  1024: {
    name: '1024x768',
    type: 'tablet',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  375: {
    name: '375x812',
    type: 'mobile',
    styles: {
      width: '375px',
      height: '812px',
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
    name: 'Theme1', // Required it's used for displaying the button label,
    backgroundColor: '#fff' // Optional, it's used for setting dynamic background color on storybook
  },
  {
    name: 'Theme2', // Required it's used for displaying the button label,
    backgroundColor: '#000'// Optional, it's used for setting dynamic background color on storybook
  }
]

addDecorator(withThemesProvider(themes, ThemeProvider));