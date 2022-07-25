import { useTranslate } from '@/common/hooks/translation.hook'
import { Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

import type { User } from '@/common/entities/user.entity'

export type UserCardPropsType = {
    user: User
}


const TheUserCard = ({ user }: UserCardPropsType) => {
    const { t } = useTranslate()
    return (
        <Stack
            borderWidth="1px"
            borderRadius="lg"
            w='100%'
            height={{ sm: 'auto', md: '15rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'lg'}
            padding={4}>
            <Flex flex={1} bg="blue.200" w={
                {
                    sm: '100%',
                    md: '30%'
                }
            }>
                <Image objectFit="cover" boxSize="100%" src={user.avatar_url} alt={user.login} />
            </Flex>
            <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {user.login}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                    {user.type}
                </Text>

                <Stack
                    width={'100%'}
                    mt={'2rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}>

                    <Link href={{
                        pathname: '/profile/[username]',
                        query: { username: user.login }
                    }}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}>
                            {t('showProfile')}
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default TheUserCard