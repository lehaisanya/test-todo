import React, { FC, PropsWithChildren } from 'react'
import { Box, Button, Popover, PopoverProps } from '@mui/material'

export { usePopoverAnchor } from './usePopoverAnchor'

interface QuestionPopoverProps extends Pick<PopoverProps, 'anchorEl'> {
    onConfirm: () => void
    onClose: () => void
}

export const QuestionPopover: FC<PropsWithChildren<QuestionPopoverProps>> = ({
    anchorEl,
    onConfirm,
    onClose,
    children,
}) => {
    const isOpen = Boolean(anchorEl)

    const onYesClick = () => {
        onClose()
        onConfirm()
    }

    const onNoClick = () => {
        onClose()
    }

    return (
        <Popover
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={isOpen}
            anchorEl={anchorEl}
            onClose={onClose}
        >
            <Box sx={{ padding: '20px' }}>
                <Box sx={{ marginBottom: '20px' }}>{children}</Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '10px',
                    }}
                >
                    <Button
                        color="success"
                        variant="contained"
                        onClick={onYesClick}
                    >
                        Yes
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={onNoClick}
                    >
                        No
                    </Button>
                </Box>
            </Box>
        </Popover>
    )
}
