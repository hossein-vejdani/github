import TheSearchForm from '@components/user/TheSearchForm/TheSearchForm'
import { useTranslate } from '@/common/hooks/translation.hook'
import type { NextPage } from 'next'
import { Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {

  const { toggleColorMode, colorMode } = useColorMode()


  return (
    <>
      <Flex justifyContent='end' p='4'>
        <Button bg={useColorModeValue('gray.700', 'white')} color={useColorModeValue('white', 'gray.700')} size='lg' borderRadius='50%' h='3rem' w='3rem' onClick={() => toggleColorMode()}>
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Flex>
      <TheSearchForm />

    </>
  )
}

export default Home
