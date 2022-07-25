import { AxiosResponse } from 'axios'
import { Repository } from '../entities/repository.entity'
import type { User } from '../entities/user.entity'
import type { GetAllRequestType, GetAllResponseType } from '../types/http.type'
import { defaultClient } from './clients/default.client'

const userRepository = {
    resource: 'users',
    searchInUsers({ searchQuery, limit, ...queryParams }: GetAllRequestType): Promise<AxiosResponse<GetAllResponseType<User>>> {
        return defaultClient.get(`search/${this.resource}`, {
            params: {
                q: searchQuery,
                per_page: limit,
                ...queryParams
            }
        })
    },
    getProfileByUsername(username: string): Promise<AxiosResponse<User>> {
        return defaultClient.get(`${this.resource}/${username}`)
    },
    getRepositoriesByUsername({ searchQuery: username, limit, ...queryParams }: GetAllRequestType): Promise<AxiosResponse<Repository[]>> {
        return defaultClient.get(`${this.resource}/${username}/repos`, {
            params: {
                per_page: limit,
                ...queryParams
            }
        })
    }
} as const

export default userRepository
