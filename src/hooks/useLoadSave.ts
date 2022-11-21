import { useEffect } from 'react'
import { todoActions } from 'redux/todo/reducer'
import { useAppDispatch } from 'hooks/store'

export function useLoadSave() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(todoActions.loadData())
    }, [dispatch])
}
