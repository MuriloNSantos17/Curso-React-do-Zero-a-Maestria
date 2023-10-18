import { Fragment } from "react";
import UserDetails from "./components/UserDetails";

function App() {

  const pessoas = [
    {
      name: 'Murilo',
      age: 24,
      ocupation: "Dev",
    },
    {
      name: 'Elizandra',
      age: 44,
      ocupation: "Teacher",
    },
    {
      name: 'Nicolas',
      age: 15,
      ocupation: "Student",
    }

  ]

  return (
    <Fragment>
      <h1>Pessoas em React</h1>
      {pessoas.map((pessoa,item)=>(
        <UserDetails name={pessoa.name} age={pessoa.age} ocupation={pessoa.ocupation}/>
      ))}
    </Fragment>
  )
}

export default App
