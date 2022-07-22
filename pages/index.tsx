import TheSearchForm from '@/common/components/TheSearchForm/TheSearchForm'
import { useTranslate } from '@/common/hooks/translation.hook'
import { SearchIcon } from '@chakra-ui/icons'
import { Container, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  const { t } = useTranslate()

  return (
    <Container maxW='container.lg' mt='28' >
      <Heading as='h2' size='lg'> <SearchIcon m={4} boxSize='7' />{t('searchPageTitle')}</Heading>
      <TheSearchForm />
    </Container>
  )
}

export default Home
