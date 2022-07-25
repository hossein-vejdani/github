import { useTranslate } from '@/common/hooks/translation.hook';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const NotFound = () => {

    const { t } = useTranslate()

    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                {t('pageNotFound')}
            </Text>
            <Link href='/'>
                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid">
                    {t('goHome')}
                </Button>
            </Link>
        </Box>
    );
}
export default NotFound()