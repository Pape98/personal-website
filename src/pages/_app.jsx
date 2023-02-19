import '@/styles/globals.sass';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';

import { Navbar, Footer } from '../components';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Container maxW='container.md'>
        <Flex minHeight='100vh' py='1.5rem' px='1.45rem' direction='column'>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default App;
