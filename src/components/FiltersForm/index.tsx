import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { ReactComponent as DoneIcon } from 'icons/done.icon.svg'
import { useFilters } from './useFilters'

export const FiltersForm = () => {
    const { localPattern, onPatternChange, onAllClick, onDoneClick } =
        useFilters()

    return (
        <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
                size="small"
                label="Search by text..."
                sx={{ flex: '1' }}
                value={localPattern}
                onChange={onPatternChange}
            />
            <Button
                variant="contained"
                onClick={onAllClick}
                sx={{ textTransform: 'none' }}
            >
                All
            </Button>
            <Button
                variant="outlined"
                startIcon={<DoneIcon width="16px" />}
                onClick={onDoneClick}
                sx={{
                    textTransform: 'none',
                    ':hover': {
                        background: '#5DCB42',
                        color: 'white',
                    },
                }}
            >
                Done
            </Button>
        </Box>
    )
}
