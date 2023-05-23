import { extendTheme } from '@chakra-ui/react';

const components = {
  Text: {
    baseStyle: {
      fontSize: 'lg',
      fontColor: '#bab3a7',
      lineHeight: '7',
    },
  },
  Link: {
    baseStyle: {
      color: 'orange.500',
    },
  },
};

const colors = {
  primary: '#EF9740',
  secondary: '#bab3a7',
};

const fonts = {
  heading: `'Roboto Mono', sans-serif`,
  body: `'Source Sans Pro', sans-serif`,
};

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const theme = extendTheme({
  config,
  components,
  fonts,
  colors
});

export default theme;
