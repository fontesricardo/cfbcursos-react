import React, {useState} from 'react'
import Numero from './componentes/Numero'
import './App.css'

export default function App(){

  const [num, setNum]=useState(10)
  const [nome, setNome]=useState('Ricardo')

  let n1=10

  const n100=()=>{
    n1=100
    console.log(n1)
  }

  return(
    <>
      <p>Valor do state num: {num}</p>
      <p>Valor do state n1: {n1}</p>
      <p>{nome}</p>
      <Numero num={num} setNum={setNum}/>
    </>
  )
}