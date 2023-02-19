import { Icon, Flex, HStack } from '@chakra-ui/react';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  const boxSize = '1.3em';

  return (
    <Flex mt='auto' align='center' justify='space-between'>
      <p>© {new Date().getFullYear()} - Built with by Pape Traore 😊</p>
      <HStack spacing={3} align='center'>
        <Icon as={AiOutlineGithub} boxSize={boxSize} />
        <Icon as={AiFillLinkedin} boxSize={boxSize} />
        <Icon as={AiOutlineMail} boxSize={boxSize} />
      </HStack>
    </Flex>
  );
};

export default Footer;
