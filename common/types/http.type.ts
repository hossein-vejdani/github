export type GetAllRequestType = {
    page: number
    limit: number
    order?: string
    sort?: string
    searchQuery?: string
}

export type GetAllResponseType<T> = {
    total_count: number
    incomplete_results: boolean
    items: T[]
}
