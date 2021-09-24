import React, {useState} from 'react'
import Caixa from './componentes/Caixa'
import Canal from './componentes/Canal'
import CAnal from './componentes/Canal'

export default function App(){

  return(
    <>
      <Caixa site="github.com">
        <Canal/>
        <p>Curso de React</p>
      </Caixa>
    </>
  )

}