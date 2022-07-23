import { useState } from 'react'
import RepositoryFactory from '../repositories/RepositoryFactory'
import type { GetAllRequestType } from '../types/http.type'
import type { User } from '../entities/user.entity'
import { AxiosError } from 'axios'
import { useTranslate } from './translation.hook'

const userRepository = RepositoryFactory.get('userRepository')

export const useSearchUser = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<User[]>()
    const [error, setError] = useState<string>()

    const { t } = useTranslate()

    const searchInUsers = async (options: GetAllRequestType) => {
        try {
            setLoading(true)
            const { data } = await userRepository.searchInUsers(options)
            setData(data.items)
            if (!data.items.length) setError(t('userNotFoundError'))
            else setError('')
        } catch (error: any) {
            setError(error.toString())
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        data,
        error,
        searchInUsers
    }
}
