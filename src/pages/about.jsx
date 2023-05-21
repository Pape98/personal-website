import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const About = () => {
  return (
    <Stack py='30px'>
      <Heading size='xl' pb={10}>Hey I am Pape 👋🏾</Heading>
      <Stack spacing='10px'>
        <Text>
          I am the founder and a software engineer at &nbsp;
          <Link href='http://breadlabs.io' isExternal>
            Breadlabs
          </Link> 🍞, an early stage startup that is building various types of software.

          Although I enjoy the tech world, I have lots of different interests.
          Right now
        </Text>

        <Heading size='md' pt={10}>
          PREVIOUSLY
        </Heading>

        <Text>
          Most recently, I was the technical felllow at  &nbsp;
          <Link href='http://dali.dartmouth.edu/' isExternal>
            DALI
          </Link>, an innovative startup like experiential leartning program
          where students work to build technological solutions. Some of my previous roles include software developer, mentor,
          and mentorship lead. Before that, I graduated from Texas A&M University with a degree in Computer Science and ...a minor in...Cybersecurity 😂.
        </Text>
      </Stack>

      <Stack pt='20px' gap={20}>
      </Stack>
    </Stack>
  )
}

export default About;