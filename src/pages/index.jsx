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
        {/* Avatar */}
        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Flex justify={{ xs: 'center', md: 'flex-start' }}>
            <Image src='/images/avatar.png' width={350} height={275} alt='pape' />
          </Flex>
        </GridItem>

        {/* Welcome message */}
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Stack spacing={6} pt={4} align={{ base: 'center', md: 'flex-start' }}>
            <Stack gap={2} align={{ base: 'center', md: 'flex-start' }}>
              <SlideUp>
                <Text color='orange.500'
                >Hello 👋🏽, my name is </Text>
              </SlideUp>
              <SlideUp duration={1} delay={2}>
                <Heading size={{ base: 'xl', lg: '2xl' }} lineHeight='48px' color="white">
                  Pape Sow Traoré
                </Heading>
              </SlideUp>
              <SlideUp duration={1} delay={3}>
                <Heading p={0} size={{ sm: 'sm', lg: 'md' }} lineHeight='48px'>
                  I build tools to make life easier.
                </Heading>
              </SlideUp>
              <SlideUp duration={1} delay={4}>
                <Text pt={4} textAlign={{ base: 'center', md: 'left' }}>Welcome to my world 🌎! It is so nice to meet you! I am a
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
  const records = await airtable('Projects').select({
    sort: [{ field: 'year', direction: 'desc' }], filterByFormula: "isIncluded = 'true'"
  }).firstPage();
  let projects = records.map(record => record.fields);
  // remove projects that are not featured
  projects = projects.filter(project => project.isFeatured === 'true');
  return {
    props: { projects },
  };
};

export default Home;
