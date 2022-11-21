import React, { FC } from 'react'
import { Box, Checkbox, IconButton, styled, Typography } from '@mui/material'
import { QuestionPopover, usePopoverAnchor } from 'components/QuestionPopover'
import { ID, TodoItem as TodoItemType } from 'types/core'
import { ReactComponent as DeleteIcon } from 'icons/delete.icon.svg'

const deleteButtonClass = 'deleteButton'
const TodoBox = styled(Box)({
    height: '43px',
    padding: '11px 8px',
    borderBottom: '1px solid #F3F3F3',
    display: 'flex',
    [`& .${deleteButtonClass}`]: {
        visibility: 'hidden',
    },
    [`&:hover .${deleteButtonClass}`]: {
        visibility: 'visible',
        color: 'gray',
    },
    [`&:hover .${deleteButtonClass}:hover`]: {
        color: 'red',
    },
})

interface TodoItemProps {
    todo: TodoItemType
    onToggle: (id: ID) => void
    onDelete: (id: ID) => void
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    const { anchor, setAnchor, clearAnchor } =
        usePopoverAnchor<HTMLButtonElement>()

    const onConfirmDelete = () => {
        onDelete(todo.id)
    }

    return (
        <TodoBox>
            <Checkbox checked={todo.done} onChange={() => onToggle(todo.id)} />
            <Box
                flex="1"
                sx={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
                {todo.description}
            </Box>
            <IconButton onClick={setAnchor}>
                <DeleteIcon width="16px" className={deleteButtonClass} />
            </IconButton>
            <QuestionPopover
                anchorEl={anchor}
                onClose={clearAnchor}
                onConfirm={onConfirmDelete}
            >
                <Typography>Are you sure want to delete it?</Typography>
                <Typography fontWeight="bold">"{todo.description}"</Typography>
            </QuestionPopover>
        </TodoBox>
    )
}
