import { ID, TodoItem } from 'types/core'

interface TodoFilters {
    pattern: string
    onlyDone: boolean
}

export interface TodoState {
    todos: TodoItem[]
    lastId: ID
    filters: TodoFilters
}

export type TodoSave = Pick<TodoState, 'todos' | 'lastId'>
