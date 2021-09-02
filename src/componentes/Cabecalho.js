import React from 'react'
import Goku from './imgs/goku.jfif'

export default function Cabecalho(){
    return(
        <header>
            <img src={Goku}/>
            <h1>CFB Cursos</h1>
        </header>
    )
}