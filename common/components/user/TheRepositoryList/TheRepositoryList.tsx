import type { Repository } from '@/common/entities/repository.entity'
import { Box, Center, SimpleGrid, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BasePagination from '../../base/BasePagination/BasePagination'
import TheRepositoryCard from '../TheRepositoryCard/TheRepositoryCard'

export type RepositoryListPropsType = {
    repositories: Repository[]
    loading: boolean
    itemPerPage: number
    totalItems: number
    onPageChange: (page: number) => void
}


const TheRepositoryList = ({ repositories, loading, itemPerPage, totalItems, onPageChange }: RepositoryListPropsType) => {
    return (
        <div>
            <SimpleGrid columns={{
                sm: 1,
                md: 2
            }} spacing='0.7rem'>
                {loading ? new Array(itemPerPage).fill(1).map((_, index) => <Box h='7rem' key={index} p='2' border='1px' borderColor={'gray.100'} borderRadius='md'>
                    <SkeletonText mt='4' noOfLines={1} w='30%' spacing='3' />
                    <SkeletonText mt='4' noOfLines={3} spacing='2' />
                </Box>) :
                    repositories.map(item => (<Box key={item.id}> <TheRepositoryCard repository={item} /> </Box>))
                }
            </SimpleGrid>
            <Center mt='4'>
                <BasePagination totalPages={Math.ceil(totalItems / itemPerPage)} onChange={(page) => onPageChange(page)} />
            </Center>
        </div>
    )
}

export default TheRepositoryList