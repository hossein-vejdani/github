import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { useTranslate } from '@/common/hooks/translation.hook'
import { useDebounce } from '@/common/hooks/debounce.hook'

const DEBOUNCE_TIME = 500

const TheSearchForm = () => {
  const { t } = useTranslate()

  const [username, setUsername] = useState('')

  const debounceHandler = useDebounce(() => {}, DEBOUNCE_TIME)
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUsername(value)
    debounceHandler(value)
  }

  return (
    <FormControl>
        <FormLabel>{t('username')}</FormLabel>
        <Input value={username} onChange={handleUsernameChange} />
        <FormErrorMessage>Email is required.</FormErrorMessage>
    </FormControl>
  )
}

export default TheSearchForm