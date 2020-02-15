import React from "react"
import Login from "./Login"
import Account from "./Account"
import { useSelector } from "react-redux"

export default function AccountDetails() {
    const session = useSelector(state => state.session)
    if (session) return <Account />
    return <Login />
}
