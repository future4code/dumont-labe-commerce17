import React from 'react'
import styled from 'styled-components'
import ItemCarrinho from './ItemCarrinho'

const EstiloDoCarrinho= styled.div`
    border:1px solid black;
    padding: 8px;
    margin-left: 8px;
`



class Carrinho extends React.Component {
    getValorTotal=()=>{
        let valorTotal=0
        for(let produtos of this.props.adicionaCarrinho){
            valorTotal+=produtos.preço*produtos.quantidade
        }
        return valorTotal
    }
   render(){
       return(
        <EstiloDoCarrinho>
            <h1>Carrinho</h1>
            <div>
                {this.props.adicionaCarrinho.map((produto)=>{
                return <ItemCarrinho 
                itemCar={produto}
                removeProdutoCarrinho={this.props. removeProdutoCarrinho}/>  })}
            </div>
            <hr/>
            <p>Valor Total: R${this.getValorTotal()}</p>
        </EstiloDoCarrinho>
       )    
       
   }
}
    export default Carrinho;