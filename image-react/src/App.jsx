import { useState } from 'react'
import img from './assets/ironMan.jpg'
import Lista from './components/lista';
import Carro from './components/carro';
import Bicicleta from './components/bicicleta';

function App() {

  const [num, setNum] = useState(0);

  return (
    <>
      <img src={img} width={100}></img>
      <p>Número: {num}</p>
      <button onClick={() => {
        setNum(num + 1);
      }}>Clique</button>
      <hr />
      <Lista />
      <hr />
      <Carro modelo={"Gol"}/>
      <Bicicleta cor={"Blue"}/>
    </>
  )
}

export default App
