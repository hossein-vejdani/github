import { useState } from 'react'
import RepositoryFactory from '../repositories/RepositoryFactory'

import { useTranslate } from './translation.hook'
import type { Repository } from '../entities/repository.entity'
import type { GetAllRequestType } from '../types/http.type'
import type { User } from '../entities/user.entity'
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

export const useGetProfile = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<User>()
    const [error, setError] = useState<string>()

    const getProfile = async (username: string) => {
        try {
            setLoading(true)
            const { data } = await userRepository.getProfileByUsername(username)
            setData(data)
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
        getProfile
    }
}

export const useGetUserRepositories = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Repository[]>()
    const [error, setError] = useState<string>()

    const getUserRepositories = async (options: GetAllRequestType) => {
        try {
            setLoading(true)
            const { data } = await userRepository.getRepositoriesByUsername(options)
            setData(data)
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
        getUserRepositories
    }
}
