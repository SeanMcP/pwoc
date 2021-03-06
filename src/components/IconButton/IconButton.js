import React from 'react'
import Button from 'components/Button/Button'
import Icon from 'components/Icon/Icon'

function IconButton({
    children,
    fill = false,
    icon,
    label,
    modifiers = [],
    small = false,
    ...props
}) {
    return (
        <Button
            aria-label={label}
            modifiers={[
                'with-icon',
                fill && 'with-fill',
                small && 'with-small-icon',
                ...modifiers,
            ]}
            {...props}
        >
            <Icon block icon={icon} size={small ? 18 : undefined} />
            {children}
        </Button>
    )
}

export default IconButton
