import React from 'react'
import { Item } from './Item'
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
border: 1px solid black;
padding: 8px;
`;

const ListaContainer = styled.div`
display: grid;
gap: 8px;

`

export class Carrinho extends React.Component{
    getValorTotal = () =>{
        let valorTotal = 0

        for(let produto of this.props.carrinho){
        valorTotal = valorTotal + produto.preco * produto.qtd
    }
    return valorTotal
}
    render(){
        return <CarrinhoContainer>
            <h3>Carrinho</h3>
            <ListaContainer>
                {this.props.carrinho.map((produtos) =>{
                    return <Item 
                    cartItem={produtos} 
                    onRemoverProdutoCarrinho={this.props.onRemoverProdutoCarrinho}/>
                })}
         
            </ListaContainer>
            <p>Valor Total: R${this.getValorTotal()},00</p>
        </CarrinhoContainer>
    }
}