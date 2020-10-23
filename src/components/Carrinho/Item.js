import React from 'react';
import styled from 'styled-components';

const ItemContainer =  styled.div`
display: grid;
grid-auto-flow: column;
gap: 8px;
align-items: center;

p{
    margin: 0;
}
`

export class Item extends React.Component{
    render(){
    return<ItemContainer>
        <p>{this.props.cartItem.qtd}x</p>
        <p>{this.props.cartItem.nome}</p>
        <button
        onClick={()=> this.props.onRemoverProdutoCarrinho(this.props.cartItem.id)}
        >Remover</button>
    </ItemContainer>
        }
}