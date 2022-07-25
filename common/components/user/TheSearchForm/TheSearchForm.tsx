import { Box, Button, Center, Container, Flex, FormControl, FormErrorMessage, Grid, GridItem, Heading, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useTranslate } from '@/common/hooks/translation.hook'
import { useDebounce } from '@/common/hooks/debounce.hook'
import { useSearchUser } from '@hooks/user.hook'
import BaseAutoComplete, { AutoCompleteOptionType, AutoCompleteOptionValueType } from '@components/base/BaseAutoComplete/BaseAutoComplete'
import TheUserCard from '../TheUserCard/TheUserCard'
import { SearchIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const DEBOUNCE_TIME = 500

const TheSearchForm = () => {

  const [username, setUsername] = useState('')
  const [items, setItems] = useState<AutoCompleteOptionType[]>()
  const [selectedItems, setSelectedItems] = useState(new Set<AutoCompleteOptionValueType>())

  const { t } = useTranslate()
  const { loading, data, error, searchInUsers } = useSearchUser()

  useEffect(() => {
    setItems(data?.map(item => ({ label: item.login, value: item.login })))
  }, [data])

  const { debounceHandler } = useDebounce((searchQuery: string) => searchInUsers({ searchQuery, page: 1, limit: 100 }), DEBOUNCE_TIME)
  const handleUsernameChange = (value: string) => {
    setUsername(value)
    debounceHandler(value)
  }

  return (
    <>
      <Container maxW='container.lg' mt='1rem' >
        <Heading as='h2' size='lg'> <SearchIcon m={4} boxSize='7' />{t('searchPageTitle')}</Heading>
        <Flex>
          <FormControl isInvalid={!!error}>
            <BaseAutoComplete value={username} items={items} selectedItems={selectedItems} onChange={handleUsernameChange} onSelect={(value) => setSelectedItems(value)} isLoading={loading} />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>
          {
            !!selectedItems.size && <Link href={{
              pathname: '/profile/[username]',
              query: { username: selectedItems.values().next().value }
            }}>
              <Button colorScheme='blue' ml='1' px='2rem'>{t('goToSelectedUserProfile')}</Button>
            </Link>
          }
        </Flex>
      </Container>
      <Center px='10' mt='.5rem'>
        <Box height='75vh' p='3rem' overflowY='auto'>
          <SimpleGrid columns={{ sm: 1, xl: 2, '2xl': 3 }} spacing='1rem'>
            {data?.map(item => (<Box w='100%' key={item.login} ><TheUserCard user={item}></TheUserCard></Box>))}
          </SimpleGrid>
        </Box>
      </Center>
    </>
  )
}

export default TheSearchForm