import React, { useRef } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { todoActions } from 'redux/todo/reducer'
import { useAppDispatch } from 'hooks/store'

interface AddTodoFormFields {
    description: string
}

export const AddTodoForm = () => {
    const dispatch = useAppDispatch()
    const {
        formState: { errors },
        register,
        reset,
        clearErrors,
        handleSubmit,
    } = useForm<AddTodoFormFields>({
        reValidateMode: 'onSubmit',
    })

    const onSubmit = ({ description }: AddTodoFormFields) => {
        reset()
        clearErrors()
        dispatch(todoActions.addTodo(description))
        dispatch(todoActions.saveData())
    }

    const onFieldBlur = () => {
        clearErrors()
    }

    const buttonRef = useRef<HTMLButtonElement>(null!)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
                <TextField
                    size="small"
                    label="Your task"
                    placeholder="Write your checklist text here"
                    error={!!errors.description}
                    helperText={errors.description?.message}
                    sx={{ flex: '1' }}
                    {...register('description', {
                        required: 'Task is required',
                        minLength: {
                            value: 2,
                            message: 'At least 2 characters',
                        },
                        onBlur: onFieldBlur,
                    })}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    ref={buttonRef}
                    sx={{
                        textTransform: 'none',
                        ':hover': {
                            background: '#5DCB42',
                            color: 'white',
                        },
                    }}
                >
                    Add
                </Button>
            </Box>
        </form>
    )
}
