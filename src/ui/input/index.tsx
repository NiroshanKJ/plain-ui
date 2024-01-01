import React from 'react'

export type InputProps = {
    label: string
}

export const Input: React.FC<InputProps> = ({ label }: InputProps) => {
    return <>
        <span>{label}</span>
    </>
}