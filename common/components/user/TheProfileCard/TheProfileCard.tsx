import React from 'react'
// Chakra imports
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import type { User } from '@/common/entities/user.entity'

export type ProfileCardPropsType = {
    user: User
}

const TheProfileCard = ({ user }: ProfileCardPropsType) => {
    let boxBg = useColorModeValue('white !important', '#111c44 !important')
    let mainText = useColorModeValue('gray.800', 'white')
    let secondaryText = useColorModeValue('gray.400', 'gray.400')

    return (
        <Box border='1px' borderColor='gray.200' borderRadius='1rem'>
            <Flex borderRadius="20px" bg={boxBg} w='100%' alignItems="center" direction="column">
                <Box borderRadius="1rem" w='100%' h="13rem" overflow='hidden'>
                    <Image src={user.avatar_url} w="100%" h="100%" filter='blur(.6rem)' objectFit='cover' />
                </Box>
                <Flex flexDirection="column" mb="30px" position='relative' zIndex={999} p='4'>
                    <Image src={user.avatar_url} border=".5rem solid red" mx="auto" borderColor={boxBg} width="8rem" height="8rem" mt="-4rem" borderRadius="50%" />
                    <Text fontWeight="600" color={mainText} textAlign="center" fontSize="xl">
                        {user.name || user.email}
                    </Text>
                    <Text color={secondaryText} textAlign="center" fontSize="sm" fontWeight="500">
                        @{user.login}
                    </Text>
                    <Text color={secondaryText} textAlign="center" fontSize="sm" fontWeight="500">
                        {user.company || '---'} | {user.location || '---'} | {user.blog || '---'}
                    </Text>
                    <Text color={mainText} mt='.5rem' fontSize="lg">
                        {user.bio}
                    </Text>
                </Flex>
                <Flex justify="space-between" w="100%" px="3rem" mb='2rem'>
                    <Flex flexDirection="column" w='33.333333%'>
                        <Text fontWeight="600" color={mainText} fontSize="xl" textAlign="center">
                            {user.public_repos.toLocaleString()}
                        </Text>
                        <Text color={secondaryText} fontWeight="500" textAlign='center'>
                            Repositories
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" w='33.333333%'>
                        <Text fontWeight="600" color={mainText} fontSize="xl" textAlign="center">
                            {user.followers.toLocaleString()}
                        </Text>
                        <Text color={secondaryText} fontWeight="500" textAlign='center'>
                            Followers
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" w='33.333333%'>
                        <Text fontWeight="600" fontSize="xl" color={mainText} textAlign="center">
                            {user.following.toLocaleString()}
                        </Text>
                        <Text color={secondaryText} fontWeight="500" textAlign='center'>
                            Following
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default TheProfileCard
