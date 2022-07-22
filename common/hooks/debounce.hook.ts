import { useState } from 'react'

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout>()

    const debounceHandler = (...args: any[]) => {
        clearTimeout(debounceTimeout)
        setDebounceTimeout(
            setTimeout(() => {
                callback(...args)
            }, delay)
        )
    }

    return {
        debounceHandler
    }
}
