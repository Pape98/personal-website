import { extendTheme } from '@chakra-ui/react';

const components = {
  Text: {
    baseStyle: {
      fontSize: 'lg',
    },
  },
};

const fonts = {
  heading: `'Jost', sans-serif`,
  body: `'Jost', sans-serif`,
};

const theme = extendTheme({ components, fonts });

export default theme;
