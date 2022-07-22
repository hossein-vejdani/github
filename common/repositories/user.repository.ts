import type { User } from '../entities/user.entity'
import type { GetAllRequestType, GetAllResponseType } from '../types/http.type'
import { defaultClient } from './clients/default.client'

const userRepository = {
    resource: 'users',
    searchInUsers({ searchQuery, ...queryParams }: GetAllRequestType): Promise<GetAllResponseType<User>> {
        return defaultClient.get(`search/${this.resource}/`, {
            params: {
                q: searchQuery,
                ...queryParams
            }
        })
    }
} as const

export default userRepository
