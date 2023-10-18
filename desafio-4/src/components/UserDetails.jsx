import { Fragment } from 'react'
import React from 'react'

function UserDetails({ name, age, ocupation }) {
    return (
        <Fragment>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Cargo: {ocupation}</p>
            <p>Pode tirar carteira: {age >= 18 ? "SIM" : "NÃO"}</p>
            <hr />
        </Fragment>
    )
}

export default UserDetails