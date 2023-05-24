import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from "framer-motion"


const GameCard = ({ delay = 1, statement, answer, state, dispatch }) => {
    const onCardSelect = () => {
        if (state.mode !== 'select') {
            alert('You have already selected a card for this round.');
            return;
        }
        dispatch({ type: 'SET_USER_CHOICE', payload: statement });
        dispatch({ type: 'SET_MODE', payload: 'learn' });
    };

    let bg = statement === answer ? 'orange.500' : '#fafafa';
    if (state.mode === 'select') bg = '#fafafa';

    return (
        <Box
            pos='relative'
            w='265px'
            h='265px'>

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
                    borderRadius='20px 60px'
                    justify='center'
                    align='center'
                    color='#333'>
                    <Image src='/images/logo-black.svg' width={75} height={100} alt='logo' />
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
                    borderRadius='20px 60px'
                    bg={bg}
                    color='#333'
                    justify='center'
                    align='center'
                    transform='rotateY(180deg)'>
                    <Stack align='center' gap={4}>
                        <Text fontSize='lg' color={bg === 'orange.500' ? 'white' : 'black'}><b>{statement}</b></Text>
                        {state.mode === 'learn' && state.userChoice !== answer && state.userChoice === statement && <Text fontSize='2xl'>❌</Text>}
                        {state.mode === 'learn' && statement === answer && <Text fontSize='2xl'>✅</Text>}
                    </Stack>
                </Flex>
            </motion.div>
        </Box>
    )
}

export default GameCard