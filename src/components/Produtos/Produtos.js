import React from 'react'
import { ProdutoCard } from './ProdutoCard'
import styled from 'styled-components';

const ProdutoContainer = styled.div`
border: 1px solid black;
`;

const ProdutoHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 16px;
`;

const ProdutoGrid = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
gap:16px; 
padding: 16px;
`;

export class Produtos extends React.Component{

    state = {
        sort: 'DECRESCENTE'
    }

    getFiltroEOrdenaLista = () =>{
        return this.props.produtos
        .filter((produtos) => produtos.preco < this.props.max)
        .filter((produtos) => produtos.preco > this.props.min)
        .filter((produtos) => produtos.nome.includes(this.props.nome))
        .sort((a,b) => this.state.sort === 'CRESCENTE' ? a.preco - b.preco : b.preco - a.preco)

    }

    onChangeSort = (event) =>{
        this.setState({sort:event.target.value})
    }
    render(){
        const filtroEOrdenaLista = this.getFiltroEOrdenaLista()
        return <ProdutoContainer>
            <ProdutoHeader>
             <p>Quantidade de produtos: {filtroEOrdenaLista.length}</p>
                <label>
                    Ordenação:
                    <select value={this.state.sort} onChange={this.onChangeSort}>
                        <option value={'CRESCENTE'}>Crescente</option>
                        <option value={'DESCRESCENTE'}>Descrescente</option>
                    </select>
                </label>
            </ProdutoHeader>
            <ProdutoGrid>
                {filtroEOrdenaLista.map((produtos) =>{
                 return <ProdutoCard produtos={produtos} onAddProdutoCarrinho={this.props.onAddProdutoCarrinho}/>
                })}
            
            </ProdutoGrid>
            </ProdutoContainer>
    }
}