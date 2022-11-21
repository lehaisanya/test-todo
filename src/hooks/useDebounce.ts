import { useRef } from 'react'

export function useDebounce<T>(func: T, timeout: number = 500): T {
    const timerRef = useRef<NodeJS.Timeout>(null!)

    const debouncedFunction = (...args: any[]) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        const timer = setTimeout(() => {
            const f = func as Function
            f(...args)
        }, timeout)

        timerRef.current = timer
    }

    return debouncedFunction as T
}
