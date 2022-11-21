import { todoActions, todoSelectors } from 'redux/todo/reducer'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { ID } from 'types/core'

export function useTodos() {
    const dispatch = useAppDispatch()

    const { doneTodos, undoneTodos, onlyDone } = useAppSelector(
        todoSelectors.selectTodos
    )

    const onToggle = (id: ID) => {
        dispatch(todoActions.toggleTodo(id))
        dispatch(todoActions.saveData())
    }

    const onDelete = (id: ID) => {
        dispatch(todoActions.removeTodo(id))
        dispatch(todoActions.saveData())
    }

    return {
        doneTodos,
        undoneTodos,
        onlyDone,
        onToggle,
        onDelete,
    }
}
