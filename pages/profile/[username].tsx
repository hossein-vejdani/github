import { NextPageContext } from 'next'
import RepositoryFactory from '@repositories/RepositoryFactory'
import TheProfileCard from '@/common/components/user/TheProfileCard/TheProfileCard';
import { Box, Container, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import TheRepositoryList from '@/common/components/user/TheRepositoryList/TheRepositoryList';
import type { User } from '@/common/entities/user.entity'
import type { Repository } from '@/common/entities/repository.entity'
import { useGetUserRepositories } from '@/common/hooks/user.hook';
import { useState } from 'react';
import Error from 'next/error';


const userRepository = RepositoryFactory.get('userRepository')


const REPO_PER_PAGE = 6


export type ProfilePropsType = {
    user: User
    repository: Repository[]
    errorCode?: number
}


export const getServerSideProps = async ({ query }: NextPageContext) => {



    const { username } = query as any
    const getProfile = userRepository.getProfileByUsername(username)
    const getUserRepositories = userRepository.getRepositoriesByUsername({ limit: REPO_PER_PAGE, page: 1, searchQuery: username })


    try {
        const [{ data: user }, { data: repository }] = await Promise.all([getProfile, getUserRepositories])
        return {
            props: {
                user,
                repository,
            },
        }
    } catch (err) {
        return {
            props: {
                errorCode: 404
            }
        }
    }
}



const UserProfile = ({ user, repository, errorCode }: ProfilePropsType) => {

    const { data, loading, getUserRepositories } = useGetUserRepositories()

    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        getUserRepositories({ searchQuery: user.login, page, limit: REPO_PER_PAGE })
    }


    if (errorCode)
        return <Error statusCode={errorCode} />

    return (
        <Container maxW='110rem' mt='2rem'>
            <Grid
                templateAreas={{
                    sm: `"profile profile" "repository repository"`,
                    xl: `"profile repository"`
                }}
                gridTemplateColumns={{
                    xl: '25% 1fr'
                }}
                gap='4'
            >
                <GridItem area='profile'>
                    <TheProfileCard user={user}></TheProfileCard>
                </GridItem>
                <GridItem area='repository'>
                    <Box>
                        <TheRepositoryList totalItems={user.public_repos} itemPerPage={REPO_PER_PAGE} loading={loading} repositories={currentPage === 1 ? repository : data as Repository[]} onPageChange={handlePageChange} />
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default UserProfile