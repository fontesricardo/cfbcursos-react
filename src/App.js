import React, {useState} from 'react'
import Numero from './componentes/Numero'
import './App.css'

export default function App(){

  const [num, setNum]=useState(10)

  let n1=10

  const n100=()=>{
    n1=100
    console.log(n1)
  }

  return(
    <>
      <p>Valor do state num: {num}</p>
      <p>Valor do state n1: {n1}</p>
      <Numero num={num} setNum={setNum}/>
    </>
  )
}