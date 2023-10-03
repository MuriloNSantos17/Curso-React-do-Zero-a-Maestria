import { Fragment } from "react";

const FirstForm = () => {

    const handleClick = (e)=>{
        alert('Hello Click')
    }

    return (
        <Fragment>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" />
            <button onClick={handleClick}>Cadastrar</button>
        </Fragment>
    )
}

export default FirstForm;