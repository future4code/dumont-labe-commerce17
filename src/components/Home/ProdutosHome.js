import React from 'react'
import styled from 'styled-components'

const EstiloDivProdutos= styled.div`
    border:1px solid black;
    display: flex;
    flex-direction:column;
    
`;
const EstiloInfo = styled.div`
    display:flex;
    flex-direction:column;
    padding: 8px;
    p {margin:0}
`;
const EstiloBotao = styled.button`
    align-self:center;
    margin: 12px;
    padding:1em;
    background-color:tomato;
    border:none;

    
`

const EstiloImagem = styled.img`
width: 200px;
height:150px ;
`




class ProdutosHome extends React.Component {
   render(){
       const produto = this.props.produto
       return(
        <EstiloDivProdutos>
           <EstiloImagem src={produto.imagem}></EstiloImagem> 
            <EstiloInfo>
            <p>{produto.nome}</p>
            <p>R$ {produto.preço}</p>
            <EstiloBotao onClick={() => this.props.addProdutoCarrinho(produto.id)}>Adicionar ao Carrinho </EstiloBotao>
            </EstiloInfo>
        </EstiloDivProdutos>
       )    
       
   }
}
    export default ProdutosHome;