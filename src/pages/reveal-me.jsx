import { useReducer, useEffect } from 'react';
import { Stack, Flex, Heading, Progress, Text, Box } from '@chakra-ui/react';
import useSound from 'use-sound';
import Lottie from "lottie-react";
import Link from 'next/link';

import { ButtonClick, GameCard } from '@/components';
import aboutMeData from '@/data/about-me-data';

import confettiAnimation from "@/data/lotties/confetti.json";


const screenType = {
    instructions: 'instructions',
    game: 'game',
    results: 'results',
};

const initialState = {
    screen: screenType.instructions,
    questionIndex: 0,
    userChoice: '',
    mode: 'select',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SCREEN':
            return { ...state, screen: action.payload }
        case 'SET_QUESTION_INDEX':
            return { ...state, questionIndex: action.payload }
        case 'SET_USER_CHOICE':
            return { ...state, userChoice: action.payload }
        case 'SET_MODE':
            return { ...state, mode: action.payload }
        case 'SET_PROGRESS':
            return { ...state, progress: action.payload }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Instruction = ({ dispatch }) => {
    return (
        <>
            <Stack gap={6} align='center'>
                <Flex gap={2} flexDir={{ base: 'column', lg: 'row' }} align='center'>
                    <Heading size='lg'>Welcome To</Heading>
                    <Heading size='lg' color='orange.500'><i>Reveal the Real Pape</i> 👻</Heading>
                </Flex>
                <Text align='center'>Ready to have some fun and get to know me better? I&quot;ve created
                    an a version <i>Two Truths, One Lie</i> so you can learn some facts about me.
                </Text>
                <Text align='center'>Here&quot;s how it works:
                    I&quot;ll share three statements about myself, and its your job to spot the sneaky lie. While
                    two statements will be true, one will be a cleverly crafted falsehood. It&quot;s a test of
                    your intuition and keen observation skills to separate fact from fiction. So, let&quot;s
                    dive right into this thrilling game of <i>Two Truths, One Lie</i> and uncover the real me!
                </Text>
                <ButtonClick label='Start Game' onClick={() => dispatch({ type: 'SET_SCREEN', payload: screenType.game })} />
            </Stack>
        </>
    )
};

const Game = ({ state, dispatch }) => {
    const question = aboutMeData[state.questionIndex];
    const cards = question.statements.map((statement, i) => {
        return <GameCard
            key={statement}
            delay={i + 0.5}
            statement={statement}
            answer={question.answer}
            category={question.category}
            state={state}
            dispatch={dispatch}
        />
    });

    return (
        <>
            <Flex gap={10} flexWrap='wrap' justify='center' flexDir={{ base: 'column', md: 'row' }}>
                {cards}
            </Flex>
        </>
    )
}

const Results = () => {
    return (
        <Stack gap={6} align='center'>
            <Box pos='fixed' w='100%' h='100%' top='0' left='0' zIndex='-2'>
                <Lottie animationData={confettiAnimation} loop={false} />
            </Box>
            <Heading size='lg' textAlign='center'>WooHoo 🏆</Heading>
            <Text align='center'>
                Kudos on completing the game! If you enjoyed getting to know me,
                why not check out my other exciting projects on the website? There&quot;s
                a lot more to explore and discover. Keep the adventure going!
            </Text>
            <Link href='/projects'>
                <ButtonClick label='Check out other projects' />
            </Link>
        </Stack>
    )
};

const RevealGame = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [wrongAnswerplay] = useSound('/sounds/wrong-answer.mp3');
    const [correctAnswerplay] = useSound('/sounds/correct-answer.mp3');
    const [celebrationPlay] = useSound('/sounds/celebration.mp3');

    useEffect(() => {
        if (state.mode === 'select') return;
        if (state.userChoice.length && state.userChoice !== aboutMeData[state.questionIndex].answer) {
            wrongAnswerplay();
        } else if (state.userChoice.length && state.userChoice === aboutMeData[state.questionIndex].answer) {
            correctAnswerplay();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wrongAnswerplay, state.mode, state.userChoice]);

    useEffect(() => {
        if (state.screen === screenType.results) celebrationPlay();

    }, [celebrationPlay, state.screen]);


    const onNextQuestion = () => {
        if (state.questionIndex === aboutMeData.length - 1) {
            dispatch({ type: 'RESET' });
            dispatch({ type: 'SET_SCREEN', payload: screenType.results });
            return;
        }
        dispatch({ type: 'SET_QUESTION_INDEX', payload: state.questionIndex + 1 });
        dispatch({ type: 'SET_MODE', payload: 'select' });
        dispatch({ type: 'SET_PROGRESS', payload: ((state.questionIndex + 1) / aboutMeData.length) * 100 })
    };

    return (
        <Box py="30px">
            {state.screen === screenType.game &&
                <Stack>
                    <Progress size="md" value={state.progress} hasStripe colorScheme='orange' borderRadius='15px' />
                    <Flex justify='space-between'>
                        <Text>0%</Text>
                        <Text>100%</Text>
                    </Flex>
                </Stack>
            }
            <Stack align='center' pt={10} spacing={6}>

                {state.screen === screenType.instructions &&
                    <Instruction
                        dispatch={dispatch} />
                }
                {state.screen === screenType.game &&
                    <Game
                        state={state}
                        dispatch={dispatch} />
                }

                {state.screen === screenType.results &&
                    <Results
                        state={state}
                        dispatch={dispatch} />
                }

                {state.screen === screenType.game && state.mode === 'learn' && <>
                    <Heading pt={6} size='md'>Reasoning 😊</Heading>
                    <Text pb={6}>{aboutMeData[state.questionIndex].explanation}</Text>
                    <ButtonClick label='Next' onClick={onNextQuestion} /></>}
            </Stack>
        </Box>
    )
}

export default RevealGame;