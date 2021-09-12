import React, { useState } from 'react'

export default function App(){

  const carros=['HRV','Golf','Focus','Cruze','Argo']

  const listaCarros=carros.map(
    (c,i)=>
      <li key={i}>{i} - {c}</li>
  )

  return(
    <>
      <ul>{listaCarros}</ul>
    </>
  )

}