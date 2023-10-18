import ConditionalRender from "../conditional";
import { Fragment, useState } from "react"

const Lista = () => {

    const [nomes, setNomes] = useState(["Murilo", "Nicolas", "Elizandra", "Ivanilton"]);
    const [novoNome, setNovoNome] = useState(null);

    return (
        <Fragment>
            <ol>
                {
                    nomes.map((value, index) => {
                        return (
                            <li key={index}>{value}</li>
                        )
                    })
                }
            </ol>
            <label>Novo Nome: </label>
            <input onKeyUp={(e) => {
                setNovoNome(e.target.value)
            }} />
            <button onClick={() => {
                setNomes([...nomes, novoNome])
                setNovoNome(null)
            }}>
                Adicionar Nome
            </button>
            <hr/>
            <ConditionalRender />
        </Fragment>
    )
}

export default Lista;