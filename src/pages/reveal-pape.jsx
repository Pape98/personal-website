import { useState } from 'react';
import { ButtonClick } from '@/components';
import { Stack, Flex, Heading, Text } from '@chakra-ui/react';

const screen = {
    instructions: 'instructions',
    game: 'game',
};

const Instruction = () => {
    return (
        <>
            <Flex gap={2} flexDir={{ base: 'column', lg: 'row' }} align='center'>
                <Heading size='lg'>Welcome To</Heading>
                <Heading size='lg' color='orange.500'><i>Reveal the Real Pape</i> 👻</Heading>
            </Flex>
            <Text align='center'>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to using Content here,
                content making it look like readable English. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their default model text, and a search for lorem
                will uncover many web sites still in their infancy. Various versions have evolved
                over the years, sometimes by accident, sometimes on purpose.
            </Text>
            <ButtonClick label='Start Game' />
        </>
    )
};

const RevealPapeGame = () => {
    const [currentScreen, setCurrentScreen] = useState(screen.instructions);

    return (
        <Stack align='center' pt={20} spacing={6}>
            {currentScreen === screen.instructions && <Instruction />}
        </Stack>
    )
}

export default RevealPapeGame;