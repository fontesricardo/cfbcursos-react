import React, {useState} from 'react'
import Nota from './componentes/Nota'
import Resultado from './componentes/Resultado'

export default function App(){

  const [notas,setNotas]=useState({"nota1":"0", "nota2":"0", "nota3":"0", "nota4":"0"})

  const handleSetNotas=(e)=>{
    if (e.target.getAttribute('name')=='fnota1'){
      setNotas({"nota1":e.target.value, "nota2":notas.nota2, "nota3":notas.nota3, "nota4":notas.nota4})
    }else if (e.target.getAttribute('name')=='fnota2'){
      setNotas({"nota1":notas.nota1, "nota2":e.target.value, "nota3":notas.nota3, "nota4":notas.nota4})
    }else if (e.target.getAttribute('name')=='fnota3'){
      setNotas({"nota1":notas.nota1, "nota2":notas.nota2, "nota3":e.target.value, "nota4":notas.nota4})
    }else if (e.target.getAttribute('name')=='fnota4'){
      setNotas({"nota1":notas.nota1, "nota2":notas.nota2, "nota3":notas.nota3, "nota4":e.target.value})
    }
  }

  const somarNotas=()=>{
    console.log("Passou aqui")
    return parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)
  }

  return(
    <>
      <Nota num={1} nota={notas.nota1} setNota={handleSetNotas}/>
      <Nota num={2} nota={notas.nota2} setNota={handleSetNotas}/>
      <Nota num={3} nota={notas.nota3} setNota={handleSetNotas}/>
      <Nota num={4} nota={notas.nota4} setNota={handleSetNotas}/>
      <Resultado somaNotas={somarNotas()}/>
    </>
  )

}