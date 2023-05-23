/* eslint-disable @next/next/no-page-custom-font */
import { ChakraProvider, Container, Flex, Box } from '@chakra-ui/react';
import Head from 'next/head';

import { theme } from '@/config';
import { Navbar, Footer } from '../components';

import '@/styles/globals.sass';
import '@fontsource-variable/roboto-mono';
import '@fontsource/source-sans-pro';



const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Pape Traore</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ChakraProvider theme={theme}>
        <Container maxW='container.lg'>
          <Flex minHeight='100vh' py='1.5rem' px='1.45rem' direction='column'>
            <Navbar />
            <Box pb={10}>
              <Component {...pageProps} />
            </Box>
            <Footer />
          </Flex>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
