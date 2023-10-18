import { Fragment } from "react"

const Carro = (props) => {
    return (
        <Fragment>
            <h2>Carro</h2>
            <p>Modelo: {props.modelo}</p>
        </Fragment>
    )
}

export default Carro;