import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { ID, TodoItem } from 'types/core'
import { TodoSave, TodoState } from './type'
import { mockTodoState } from './mock'

const STORAGE_FIELD = 'todos'

const initialState: TodoState = {
    todos: [],
    lastId: 1,
    filters: {
        pattern: '',
        onlyDone: false,
    },
}

export const todoSlice = createSlice({
    name: 'TodoSlice',
    initialState,
    reducers: {
        loadData(state) {
            const saveString = localStorage.getItem(STORAGE_FIELD)

            if (!saveString) return mockTodoState

            try {
                const save: TodoSave = JSON.parse(saveString)

                return { ...state, ...save }
            } catch (err) {
                console.error(err)

                return mockTodoState
            }
        },
        saveData(state) {
            const newSave: TodoSave = {
                todos: state.todos,
                lastId: state.lastId,
            }

            const saveString = JSON.stringify(newSave)
            localStorage.setItem(STORAGE_FIELD, saveString)
        },
        addTodo(state, action: PayloadAction<string>) {
            const newTodo: TodoItem = {
                id: state.lastId,
                description: action.payload,
                done: false,
            }

            state.todos.push(newTodo)
            state.lastId++
        },
        toggleTodo(state, action: PayloadAction<ID>) {
            const todoForDone = state.todos.find(
                (todo) => todo.id === action.payload
            )

            if (todoForDone) {
                todoForDone.done = !todoForDone.done
            }
        },
        removeTodo(state, action: PayloadAction<ID>) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },
        setFilterPattern(state, action: PayloadAction<string>) {
            state.filters.pattern = action.payload
        },
        setFilterDone(state) {
            state.filters.onlyDone = true
        },
        clearFilters(state) {
            state.filters.pattern = ''
            state.filters.onlyDone = false
        },
    },
})

const selectTodos = createSelector(
    (state: RootState) => state.todo,
    (state) => {
        const { doneTodos, undoneTodos } = state.todos
            .filter((todo) => todo.description.match(state.filters.pattern))
            .reduce(
                (result, todo) => {
                    if (todo.done) {
                        result.doneTodos.push(todo)
                    } else {
                        result.undoneTodos.push(todo)
                    }

                    return result
                },
                {
                    undoneTodos: [] as TodoItem[],
                    doneTodos: [] as TodoItem[],
                }
            )

        return {
            doneTodos,
            undoneTodos,
            onlyDone: state.filters.onlyDone,
        }
    }
)

export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions
export const todoSelectors = { selectTodos }
