import { extendTheme } from '@chakra-ui/react';

const components = {
  Text: {
    baseStyle: {
      fontSize: 'lg',
      fontColor: '#dde1e7',
      lineHeight: '7',
    },
  },
  Link: {
    baseStyle: {
      color: '#EF9740',
    },
  },
};

const colors = {
  primary: '#EF9740',
  secondary: '#dde1e7',
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
