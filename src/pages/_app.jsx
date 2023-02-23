/* eslint-disable @next/next/no-page-custom-font */
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { theme } from '@/config';
import { Navbar, Footer } from '../components';

import '@/styles/globals.sass';
import '@fontsource/jost/400.css';
import '@fontsource/jost/700.css';

import { MDXProvider } from '@mdx-js/react';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Pape Traore</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Container maxW='container.md'>
          <Flex minHeight='100vh' py='1.5rem' px='1.45rem' direction='column'>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Flex>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
