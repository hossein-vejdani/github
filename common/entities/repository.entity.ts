import { User } from './user.entity'

export type Repository = {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: User
    description: string
    fork: boolean
    size: number
    watchers_count: number
    language: string
    has_issues: boolean
    has_projects: boolean
    has_downloads: boolean
    has_pages: boolean
    html_url: string
    forks_count: number
    disabled: boolean
    visibility: string
    watchers: number
    stargazers_count: number
    default_branch: string
    created_at: string
    updated_at: string
}
