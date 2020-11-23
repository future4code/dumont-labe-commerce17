import React from 'react';
import {Filtro} from './components/Filtro/Filtro';
import {Produtos} from './components/Produtos/Produtos';
import {Carrinho} from './components/Carrinho/Carrinho';
import styled from 'styled-components';
import condicionador from './img/condicionador.jpg';


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding:16px;
  gap:8px;
  `;
  const produtos = [
    {
      id: 1,
      nome: 'Produto 1',
      preco: 100,
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vanguard_satellite-01.jpg/250px-Vanguard_satellite-01.jpg'
    },
    {
      id: 2,
      nome: 'Produto 2',
      preco: 200,
      foto: 'https://www.oficinadanet.com.br/imagens/post/14059/capa.jpg'
    },
    {
      id: 3,
      nome: 'Produto 3',
      preco: 300,
      foto: 'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/01/b4f77fcdaf5c2ce2c15836c0fbca5c9818e5aa92-418x235.jpg'
    },
    {
      id: 4,
      nome: 'Satelite',
      preco: 400,
      foto: 'data:image/jpeg;base64,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'
    },
    {
      id: 5,
      nome: 'Produto 5',
      preco: 600,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL28gK5-21aFbRaIHZ-70R37r1kYL1wKUZ_g&usqp=CAU'
    },
    {
      id: 6,
      nome: 'Produto 6',
      preco: 800,
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nimbus_rendering.jpg/250px-Nimbus_rendering.jpg'
    }
]

class App extends React.Component {
  state = {
    filtroMin:"10",
    filtroMax: "1000",
    filtroNome:'',
      produtosCarrinho: [] 
  }

  onChangeFiltroMin = (event) => {
    this.setState({filtroMin: event.target.value})
  }

  onChangeFiltroMax = (event) => {
    this.setState({filtroMax: event.target.value})
  }

  onChangeFiltroNome = (event) => {
    this.setState({filtroNome: event.target.value})
  }

  onAddProdutoCarrinho = (produtosId) =>{
    const prodCarrinho = this.state.produtosCarrinho.find(produtos => produtosId === produtos.id)

    if(prodCarrinho){
      const newProdtsCarrrinho = this.state.produtosCarrinho.map(produtos =>{
        if(produtosId === produtos.id){
          return{
            ...produtos,
            qtd: produtos.qtd + 1
          }
        }
        return produtos
      }) 
      this.setState({produtosCarrinho: newProdtsCarrrinho})
    } else{
      const produtoAdd = produtos.find(produtos => produtosId === produtos.id)

      const newProdtsCarrrinho = [...this.state.produtosCarrinho,{...produtoAdd, qtd: 1}]

      this.setState({produtosCarrinho: newProdtsCarrrinho})
    }

  }

  onRemoverProdutoCarrinho = (produtosId) =>{
    const newProdtsCarrrinho = this.state.produtosCarrinho.map((produtos) =>{
      if(produtos.id === produtosId){
        return{
          ...produtos,
          qtd: produtos.qtd - 1
        }
      }
      return produtos
    }).filter((produtos) => produtos.qtd > 0)

    this.setState({produtosCarrinho: newProdtsCarrrinho})

  }

  render(){
  return (
     <AppContainer>
      <Filtro
      min={this.state.filtroMin}
      max={this.state.filtroMax}
      nome={this.state.filtroNome}
      onChangeFiltroMin={this.onChangeFiltroMin}
      onChangeFiltroMax={this.onChangeFiltroMax}
      onChangeFiltroNome={this.onChangeFiltroNome}
      />
      <Produtos 
      produtos={produtos}
      min={this.state.filtroMin}
      max={this.state.filtroMax}
      nome={this.state.filtroNome}
      onAddProdutoCarrinho={this.onAddProdutoCarrinho}
      />
      <Carrinho
      carrinho={this.state.produtosCarrinho}
      onRemoverProdutoCarrinho={this.onRemoverProdutoCarrinho}
      />
    </AppContainer>
  );
 }
}

export default App;
