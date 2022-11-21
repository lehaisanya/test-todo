import { useAppDispatch, useAppSelector } from 'hooks/store'
import { useDebounce } from 'hooks/useDebounce'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { todoActions } from 'redux/todo/reducer'

export function useFilters() {
    const dispatch = useAppDispatch()
    const pattern = useAppSelector((state) => state.todo.filters.pattern)
    const [localPattern, setLocalPattern] = useState(pattern)

    useEffect(() => {
        setLocalPattern(pattern)
    }, [pattern])

    const setGlobalPattern = useDebounce((pattern: string) => {
        dispatch(todoActions.setFilterPattern(pattern))
    })

    const onPatternChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newPattern = event.target.value
        setLocalPattern(newPattern)
        setGlobalPattern(newPattern)
    }
    const onAllClick = () => dispatch(todoActions.clearFilters())
    const onDoneClick = () => dispatch(todoActions.setFilterDone())

    return {
        localPattern,
        onPatternChange,
        onAllClick,
        onDoneClick,
    }
}
