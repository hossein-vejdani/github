import { LANG_COLORS } from '@/common/constants/languagecolors.constant'
import type { Repository } from '@/common/entities/repository.entity'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Circle, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import { MdShare, MdCircle, MdStar } from 'react-icons/md'

import React from 'react'

export type RepositoryCardPropsType = {
    repository: Repository
}

const TheRepositoryCard = ({ repository }: RepositoryCardPropsType) => {
    return (
        <article>
            <Box h='7rem' p='2' border='1px' borderColor={'gray.100'} borderRadius='md'>
                <Heading as='h2' size='md' color='blue.500'>
                    <a href={repository.html_url} target='_blank' rel='noreferrer'>{repository.name}</a>
                </Heading>
                <Text maxW='50ch' textOverflow='ellipsis' overflow='hidden' whiteSpace='nowrap' h='2rem' mt='.5rem' fontSize='md' title={repository.description}>{repository.description || '---'}</Text>
                <HStack spacing='1rem'>
                    <HStack spacing='.5rem' w='7rem'>
                        <Icon as={MdCircle} color={LANG_COLORS[repository.language as keyof typeof LANG_COLORS] as string}>●</Icon>
                        <Text>{repository.language}</Text>
                    </HStack>
                    <HStack spacing='.5rem' w='2.7rem'>
                        <Icon as={MdStar} color='grey.100'></Icon>
                        <Text>{repository.stargazers_count}</Text>
                    </HStack>
                    <HStack spacing='.5rem' w='2.7rem'>
                        <Icon as={MdShare} color='grey.100'></Icon>
                        <Text>{repository.forks_count}</Text>
                    </HStack>
                </HStack>
            </Box>
        </article>
    )
}

export default TheRepositoryCard
