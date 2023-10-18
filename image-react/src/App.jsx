import Bicicleta from './components/bicicleta';
import Container from './components/container';
import Message from './components/message';
import Carro from './components/carro';
import img from './assets/ironMan.jpg'
import Lista from './components/lista';
import Car from './components/car';
import { useState } from 'react'

function App() {

  const [num, setNum] = useState(0);

  const Carros = [
    { model: "Gol", color: "Branco" },
    { model: "Escort", color: "Vermelho" }
  ];

  const [message, setMessage] = useState('');

  const handleMessage = (msg)=>{
    setMessage(msg)
  }

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
      <Carro modelo={"Gol"} />
      <Bicicleta cor={"Blue"} />
      {
        Carros.map((car, index) =>
          (<Car model={car.model} color={car.color} key={index} />)
        )
      }
      <Container>
        <p>Trex</p>
      </Container>
      <Message message={message} handleMessage={handleMessage} />
    </>
  )
}

export default App
