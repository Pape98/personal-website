import { Stack, Text, Heading, Link, Button } from '@chakra-ui/react';

const About = () => {
  return (
    <Stack py='30px'>
      <Heading size='xl' pb={10}>Hey I am Pape 👋🏾</Heading>
      <Stack spacing='10px'>
        <Text>
          I am the co-founder and a software engineer at &nbsp;
          <Link href='http://breadlabs.io' isExternal>
            <b>Breadlabs</b>
          </Link> 🍞, an early stage startup that is building various types of software. I work
          at the intersection of technology and social impact. I am passionate about building
          products that can ease the lives of people.
        </Text>

        <Text>
          Although I enjoy the tech world, coding, and solving problems, I have lots of different interests.
          I spend a lot of time trying to acquire new skills such as drawing 📝 , animating charaters 👨🏾‍💻 , and learning languages 🌎.
        </Text>

        <Heading size='md' pt={10}>
          Previously
        </Heading>

        <Text>
          Most recently, I was the technical felllow at  &nbsp;
          <Link href='http://dali.dartmouth.edu/' isExternal>
            <b>DALI</b>
          </Link>, an innovative startup like experiential leartning program at Dartmouth College
          where students work to build technological solutions. Some of my previous roles include
          software developer, mentor, and mentorship lead. I actually graduated from
          &nbsp;
          <Link href='https://home.dartmouth.edu/' isExternal>
            <b>Dartmouth</b> 🌲
          </Link> not too long ago with a MS in computer science with a concentration in human-computer interaction.
          Before that, I graduated from &nbsp;
          <Link href='https://home.dartmouth.edu/' isExternal>
            <b>Texas A&M</b>  &nbsp;
          </Link>
          with a degree in Computer Science as well.
        </Text>
      </Stack>

      <Heading size='md' pt={10}>
        More about me
      </Heading>
      <Stack gap={3}>
        <Text>I love fun activities so I thought I would create <Link href='https://home.dartmouth.edu/' isExternal>
          <b>  my own version of <i>Two Truths One Lie</i>.</b>  &nbsp;
        </Link>
          Feel free to play the game if you would like to learn more about me 😊.</Text>

      </Stack>
    </Stack>
  )
}

export default About;