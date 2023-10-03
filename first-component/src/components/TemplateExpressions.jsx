import MyComponent from "./MyComponent";
import FirstForm from "./FirstForm";
import { Fragment } from "react";

const TemplateExpressions = ()=>{
    const name = "Murilo";

    const data = {
        job: "Programmer",
        age: 24
    }

    return (
        <Fragment>
            <h2>Olá {name}</h2>
            <p>Você é {data.job}</p>
            <p>Sua idade + 100 é: {Number(data.age) + 100}</p>
            <hr/>
            <FirstForm/>
            <MyComponent/>
        </Fragment>
    )
}

export default TemplateExpressions;