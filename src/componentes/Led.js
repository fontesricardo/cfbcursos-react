import React from 'react'
import LedVerde from './imgs/verde.jfif'
import LedVermelho from './imgs/vermelho.jfif'

export default function Led(props){

  return(
    <>
       <img src={props.ligado?LedVermelho:LedVerde}></img>
       <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Ligar':'Desligar'}</button>
    </>
  )
}