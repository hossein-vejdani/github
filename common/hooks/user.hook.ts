import { useState } from 'react'
import { User } from '../entities/user.entity'
import RepositoryFactory from '../repositories/RepositoryFactory'
import type { GetAllRequestType } from '../types/http.type'
const userRepository = RepositoryFactory.get('userRepository')
export const useSearchUser = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<User[]>()

    const searchInUsers = async (options: GetAllRequestType) => {
        await userRepository.searchInUsers(options)
    }

    return {}
}
