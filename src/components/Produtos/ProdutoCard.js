import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
border:1px solid black;
display:flex;
flex-direction:column;
`;

const CardInfo =styled.div`
display:flex;
flex-direction:column;
padding:16px;
;

p{
    margin:4px 0;
}`;

const BotaoAdd = styled.button`
align-self: center;
margin-top: 4px;`;

const EstiloImg = styled.img`
width:250px;
height:230px`;

export class ProdutoCard extends React.Component{
    render(){
        const produtos = this.props.produtos
        return <CardContainer>
        <EstiloImg src={produtos.foto}>
        </EstiloImg>
        <CardInfo>
            <p>{produtos.nome}</p>
            <p>R${produtos.preco},00</p>
            <BotaoAdd onClick={() => this.props.onAddProdutoCarrinho(produtos.id)}>
              Adicionar ao Carrinho</BotaoAdd>
        </CardInfo>
    </CardContainer>
        }
}