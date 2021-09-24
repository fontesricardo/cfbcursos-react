import React from 'react'

export default function Caixa(props){
    return(
        <>
            <h1>{props.site}</h1>
            {props.children}
            {props.children[0]}
        </>
    );
}