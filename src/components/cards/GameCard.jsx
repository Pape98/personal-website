import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from "framer-motion"


const GameCard = ({ delay = 1, statement, answer, state, dispatch }) => {

    const borderRadius = '20px 50px';

    const onCardSelect = () => {
        if (state.mode !== 'select') {
            alert('You have already selected a card for this round.');
            return;
        }
        dispatch({ type: 'SET_USER_CHOICE', payload: statement });
        dispatch({ type: 'SET_MODE', payload: 'learn' });
    };

    let bg = '#fafafa';

    return (
        <Box
            pos='relative'
            w='265px'
            h='365px'>

            {/* Card*/}
            <motion.div
                animate={{ transform: 'rotateY(180deg)' }}
                transition={{
                    transform: { ease: "linear", duration: 0.5 },
                    delay
                }}
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    transformStyle: 'preserve-3d'
                }}
            >

                {/* Front of card */}
                <Flex
                    pos='absolute'
                    w='100%'
                    h='100%'
                    sx={{ backfaceVisibility: 'hidden' }}
                    bg='#fafafa'
                    borderRadius={borderRadius}
                    justify='center'
                    align='center'
                    color='#333'>
                    <Box w='90%' h='90%' bg='orange.500' borderRadius={borderRadius} />
                    <Image src='/images/logo-white-black.png' width={50} height={100} alt='logo' style={{ position: 'absolute' }} />
                </Flex>

                {/* Back of card */}
                <Flex
                    onClick={onCardSelect}
                    pos='absolute'
                    _hover={{ bg: 'orange.100' }}
                    pointerEvents={state.mode === 'select' ? 'auto' : 'none'}
                    cursor={state.mode === 'select' ? 'pointer' : 'not-allowed'}
                    w='100%'
                    h='100%'
                    sx={{ backfaceVisibility: 'hidden' }}
                    borderRadius={borderRadius}
                    border='6px solid #DD6B1F'
                    boxSizing='content-box'
                    bg={bg}
                    color='#333'
                    justify='center'
                    align='center'
                    transform='rotateY(180deg)'>
                    <Stack align='center' gap={4}>
                        <Text fontSize='lg' color={bg === 'orange.500' ? 'white' : 'black'} textAlign='center' p={4}>{statement}</Text>
                        {state.mode === 'learn' && state.userChoice !== answer && state.userChoice === statement && <Text fontSize='2xl'>❌</Text>}
                        {state.mode === 'learn' && statement === answer && <Text fontSize='2xl'>✅</Text>}
                    </Stack>
                    <Image src='/images/avatar.png' width={40} height={100} alt='logo' style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
                </Flex>
            </motion.div>
        </Box>
    )
}

export default GameCard