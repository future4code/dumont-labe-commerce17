import React from 'react'
import styled from 'styled-components'
import ProdutosHome from './ProdutosHome'


const EstiloDaHome= styled.div`
    border:1px solid black;
    padding: 8px;
    margin-left: 8px;

`

const EstiloGradeProdutos= styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:16px;
`
    
const HomeCabeça= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    
`

class Home extends React.Component {
    state = {
       ordenar:'CRESCENTE'     
     }
     getFiltrandoProdutos=()=>{
         return this.props.produtinhos
         .filter((produto) =>produto.preço <= this.props.filtrao)
         .filter((produto) =>produto.preço >= this.props.filtrinho)
         .filter((produto) =>produto.nome.includes(this.props.nomeDoFiltro))
         .sort((a,b)=>this.state.ordenar==='CRESCENTE'?a.preço-b.preço:b.preço-a.preço)
     }

     onChangeOrdenar=(event)=>{
         this.setState({ordenar:event.target.value})
     }
   render(){
       const filtrandoProdutos=this.getFiltrandoProdutos()   
       return(
        <EstiloDaHome>
            <HomeCabeça>
       <p>Quantidade de produtos:{filtrandoProdutos.length}</p>
                <label>
                    Ordenação:
                    <select value={this.state.ordenar} onChange={this.onChangeOrdenar}>
                        <option value={'CRESCENTE'}>Crescente</option>
                        <option value={'DECRESCENTE'}>Decrescente</option>
                    </select>
                </label>
            </HomeCabeça>
            <EstiloGradeProdutos>
               {filtrandoProdutos.map((produto)=>{
                   return  <ProdutosHome 
                   produto={produto}  
                   addProdutoCarrinho={this.props.addProdutoCarrinho}
                   />

               })}
            </EstiloGradeProdutos>
        </EstiloDaHome>
       )    
       
   }
}
    export default Home;