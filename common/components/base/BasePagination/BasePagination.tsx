import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

export type BasePaginationPropsType = {
    totalPages: number
    onChange: (page: number) => void
}

const BasePagination = ({ totalPages, onChange }: BasePaginationPropsType) => {
    const [currentPage, setCurrentPage] = useState(1);
    let left = currentPage - 2;
    let right = currentPage + 2;


    if (left <= 0) {
        right += left === 0 ? 1 : 2
        left = 1
    }

    if (right > totalPages) right = totalPages;

    useEffect(() => {
        onChange(currentPage)
    }, [currentPage])

    const pages = useMemo(() => {
        const items = []
        for (let i = left; i <= right; i++) {
            items.push(
                <Button key={i} colorScheme={(i === currentPage ? 'blue' : 'gray')} h='2.5rem' w='2.5rem' onClick={() => { setCurrentPage(i) }}>
                    {i}
                </Button>,
            );
        }
        return items
    }, [currentPage, totalPages])

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <HStack spacing='.3rem'>
            <Button h='2.5rem' w='2.5rem' onClick={prevPage}>
                <ChevronLeftIcon />
            </Button>
            {pages}
            <Button h='2.5rem' w='2.5rem' onClick={nextPage}>
                <ChevronRightIcon />
            </Button>
        </HStack>
    );
}

export default BasePagination
