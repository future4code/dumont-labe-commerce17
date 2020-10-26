import React from 'react'
import styled from 'styled-components'


const EstiloDosItens= styled.div`
    display:grid;
    grid-auto-flow:column;
    gap:4px;
`
const EstiloBotao= styled.button`
    border:none;
    color:tomato;
    background-color:white;
`

class ItemCarrinho extends React.Component {
   render(){
       return(
        
            <EstiloDosItens>
                <p>{this.props.itemCar.quantidade}</p>
                <p>{this.props.itemCar.nome}</p>
                <EstiloBotao onClick={()=>this.props.removeProdutoCarrinho(this.props.itemCar.id)}>X</EstiloBotao>
            </EstiloDosItens>
       
       )    
       
   }
}
    export default ItemCarrinho;