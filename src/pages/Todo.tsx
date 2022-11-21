import React from 'react'
import { Container } from '@mui/material'
import { FiltersForm } from 'components/FiltersForm'
import { TodoList } from 'components/TodoList'
import { AddTodoForm } from 'components/AddTodoForm'
import { useLoadSave } from 'hooks/useLoadSave'

export const TodoPage = () => {
    useLoadSave()

    return (
        <Container maxWidth="sm" sx={{ padding: '24px 16px' }}>
            <FiltersForm />
            <TodoList />
            <AddTodoForm />
        </Container>
    )
}
