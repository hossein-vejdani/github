import TheSearchForm from '@components/TheSearchForm'
import { Container, Heading, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container maxW='container.lg' >
      <Heading as='h2' size='lg'> fontSize='2xl'>(3xl) In love with React & Next</Heading>
      <TheSearchForm />
    </Container>
  )
}

export default Home
