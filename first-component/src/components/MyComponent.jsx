import { Fragment } from "react"

const renderSomething = (x)=>{
    if(x){
        return <h1>It's true</h1>
    }else{
        return <h1>It's false</h1>
    }
}

const MyComponent = ()=>{
    return <Fragment>
        <p>Eu sou um componente reutilizado!</p>
        {renderSomething(true)}
        {renderSomething(false)}
    </Fragment>
}

export default MyComponent;