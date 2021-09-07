import React from 'react'

interface BType {
    children: string
    handleSubmit: React.MouseEventHandler<HTMLButtonElement>
};

const Button = ({children, handleSubmit}: BType) => {
    return (
        <button  type="button" onClick={ handleSubmit}>{children}</button>
    )
}

export default Button
