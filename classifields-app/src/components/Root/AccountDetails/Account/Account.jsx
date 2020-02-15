import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const Wrapper = styled.div`
    color: ${props => props.theme.mortar};
    font-size: 0.9rem;
`

const Account = () => {
    const session = useSelector(state => state.session)

    return <Wrapper>Logged in as {session.user.email}</Wrapper>
}

export default Account
