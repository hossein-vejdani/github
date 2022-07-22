import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useTranslate } from '@/common/hooks/translation.hook'
import { useDebounce } from '@/common/hooks/debounce.hook'
import { useSearchUser } from '../../hooks/user.hook'
import BaseAutoComplete from '../base/BaseAutoComplete/BaseAutoComplete'
import type { AutoCompleteOptionType } from '@/common/types/autocomplete.type'

const DEBOUNCE_TIME = 500

const TheSearchForm = () => {

  const [username, setUsername] = useState('')
  const [items, setItems] = useState<AutoCompleteOptionType[]>()

  const { t } = useTranslate()
  const { loading, data, searchInUsers } = useSearchUser()

  useEffect(() => {
    setItems(data?.map(item => ({ label: item.login, value: item.login })))
  }, [data])

  const { debounceHandler } = useDebounce((searchQuery: string) => searchInUsers({ searchQuery, page: 1, limit: 10 }), DEBOUNCE_TIME)
  const handleUsernameChange = (value: string) => {
    setUsername(value)
    debounceHandler(value)
  }

  return (
    <FormControl>
      <BaseAutoComplete value={username} items={items} onChange={handleUsernameChange} isLoading={loading} />
      <FormErrorMessage>Email is required.</FormErrorMessage>
    </FormControl>
  )
}

export default TheSearchForm