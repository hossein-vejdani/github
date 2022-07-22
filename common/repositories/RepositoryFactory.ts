import userRepository from './user.repository'

const repositories = {
    userRepository
}

const RepositoryFactory = {
    get(name: keyof typeof repositories) {
        return repositories[name]
    }
}

export default RepositoryFactory
