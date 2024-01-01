import React from 'react'

export type ButtonProps = {
    label: string
}

export const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
    return <>
        <button>{label}</button>
    </>
}