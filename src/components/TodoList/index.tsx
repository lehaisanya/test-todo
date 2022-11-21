import React from 'react'
import { Box } from '@mui/material'
import { TodoItem } from 'components/TodoItem'
import { useTodos } from 'hooks/useTodos'

export const TodoList = () => {
    const { doneTodos, undoneTodos, onlyDone, onToggle, onDelete } = useTodos()

    return (
        <Box sx={{ marginBottom: '13px' }}>
            {onlyDone
                ? null
                : undoneTodos.map((todo) => (
                      <TodoItem
                          key={todo.id}
                          todo={todo}
                          onToggle={onToggle}
                          onDelete={onDelete}
                      />
                  ))}

            {doneTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </Box>
    )
}
