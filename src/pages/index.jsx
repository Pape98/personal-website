import {
  Flex, Stack, Text, Heading,
  Icon, Grid, SimpleGrid, Button, GridItem
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { airtable } from '@/config';
import { ProjectCard, SlideUp, ButtonClick } from '@/components';


const Home = ({ projects }) => {

  const list = projects.map(project => {
    return <ProjectCard key={project.title} project={project} />;
  });

  return (
    <Stack py='20px'>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Image src='/images/avatar.png' width={350} height={275} alt='pape' />
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Stack spacing={6} flex={1} pt={4}>
            <Stack gap={2}>

              <SlideUp>
                <Text color='orange.500'
                  fontFamily={`"Roboto Mono", serif`}>Hello 👋🏽, my name is </Text>
              </SlideUp>
              <SlideUp duration={1} delay={2}>
                <Heading size={{ base: 'xl', lg: '2xl' }} lineHeight='48px' color="white">
                  Pape Sow Traoré
                </Heading>
              </SlideUp>
              <SlideUp duration={1} delay={3}>
                <Heading p={0} size={{ base: 'sm', lg: 'md' }} lineHeight='48px'>
                  I build tools to make life easier.
                </Heading>
              </SlideUp>
              <SlideUp duration={1} delay={4}>
                <Text pt={4}>Welcome to my world 🌎! It is so nice to meet you! I am a
                  web developer who enjoys problem-solving and helping people.
                  Play this game 🕹️ to learn more about me.
                </Text>
              </SlideUp>
            </Stack>
            <Link href='/reveal-me'>
              <ButtonClick label='Play Game' />
            </Link>
          </Stack>
        </GridItem>
      </Grid>
      <Heading size='md' pt={20}>Featured Projects</Heading>
      <SimpleGrid pt='20px' columns={{ base: 1, md: 2 }} spacing={10}>
        {list}
      </SimpleGrid>
    </Stack>
  );
};

export const getStaticProps = async () => {
  const records = await airtable('Projects').select().firstPage();
  let projects = records.map(record => record.fields);
  projects.sort((a, b) => b.year - a.year);
  // remove projects that are not featured
  projects = projects.filter(project => project.isFeatured === 'true');
  return {
    props: { projects },
  };
};

export default Home;
