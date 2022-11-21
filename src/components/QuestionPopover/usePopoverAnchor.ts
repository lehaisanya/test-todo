import { MouseEventHandler, useState } from 'react'

export function usePopoverAnchor<T>() {
    const [anchor, setAnchorEl] = useState<T | null>(null)

    const setAnchor: MouseEventHandler<T> = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const clearAnchor = () => {
        setAnchorEl(null)
    }

    return {
        anchor,
        setAnchor,
        clearAnchor,
    }
}
