import React from 'react'

export default function Nota(props){
    return(
        <div>
            <legend>Informe a nota {props.num}:</legend>
            <input type="text" name={"fnota"+props.num} value={props.nota} onChange={(e)=>props.setNota(e)}></input>
        </div>
    )
}