import { Stack, Text, Heading } from '@chakra-ui/react';

const About = () => {
  return (
    <Stack py='30px'>
      <Heading size='xl' pb={10}>Hey I am Pape 👋🏾</Heading>
      <Stack spacing='10px'>
        <Text>
          This is where I post all of my projects. I tend to work on multiple
          things at the same time just for the sake of building cool things.
          If you have any cool project ideas please let me know 😊.{' '}
        </Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida sollicitudin aliquet.
          Proin vel rutrum diam. Nulla rutrum erat et dictum ullamcorper. Aenean non neque at urna finibus placerat et ut quam.
          Nunc non mi vulputate, convallis enim condimentum, porttitor dolor. Nam sagittis, diam nec consectetur
          vestibulum, tellus metus bibendum ex, a cursus eros orci at augue. Suspendisse laoreet
          nulla ac posuere convallis. Etiam vulputate, ante vel pretium fringilla, leo elit consequat nibh,
          lobortis porta diam nunc imperdiet sapien.

        </Text>

        <Heading size='md' pt={10}>
          PREVIOUSLY
        </Heading>

        <Text>
          Nam sagittis, diam nec consectetur
          vestibulum, tellus metus bibendum ex, a cursus eros orci at augue. Suspendisse laoreet
          nulla ac posuere convallis. Etiam vulputate, ante vel pretium fringilla, leo elit consequat nibh,
          lobortis porta diam nunc imperdiet sapien.
        </Text>
      </Stack>

      <Stack pt='20px' gap={20}>
      </Stack>
    </Stack>
  )
}

export default About;