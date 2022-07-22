export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    let debounceTimeout: NodeJS.Timeout
    const debounceHandler = () => {
        clearTimeout(debounceTimeout)
        setTimeout(callback)
    }

    return debounceHandler
}
