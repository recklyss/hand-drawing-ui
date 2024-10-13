import type { Preview } from '@storybook/react';
import './global-story.css';  // Adjust the path as needed

const preview: Preview = {
  tags: [ 'autodocs' ],
  parameters: {
    typography: {
      fontFamily: '"Gloria Hallelujah", cursive',
    },
    actions: {},
    storySort: {
      method: 'alphabetical',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
