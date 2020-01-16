import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const Label = styled.label`
    display: block;
    :not(:first-child) {
        margin-top: 0.75rem;
    }
`
const LabelText = styled.strong`
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
`

const Login = () => {
    const {
        handleSubmit,
        register,
        //   errors,
        formState: { isSubmitting }
    } = useForm()

    const onSubmit = handleSubmit(({ email, password }) => {
        console.log(email, password)
    })

    return (
        <form onSubmit={onSubmit}>
            <Label>
                <LabelText>Email</LabelText>
                dfdf
            </Label>
        </form>
    )
}

export default Login
