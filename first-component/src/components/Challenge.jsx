import { Fragment } from "react"

const x = 10;
const y = 20;

const Challenge = ()=>{
    return (
        <Fragment>
            <p>Valor de x: {x}</p>
            <p>Valor de y: {y}</p>
            <button onClick={()=>{console.log(x+y)}}>Somar</button>
        </Fragment>
    )
}

export default Challenge;