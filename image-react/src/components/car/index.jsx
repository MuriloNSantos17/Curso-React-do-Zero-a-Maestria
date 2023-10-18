import { Fragment } from "react"

const Car = ({ model, color }) => {
    return (
        <Fragment>
            <hr />
            <h3>Carro</h3>
            <p>Model: {model}</p>
            <p>Color: {color}</p>
            <hr />
        </Fragment>
    )
}

export default Car;