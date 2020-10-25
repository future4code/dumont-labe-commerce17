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
      nome: 'Produto 4',
      preco: 400,
      foto: 'https://lh3.googleusercontent.com/proxy/HkFhoasCYNAFPuVah-a9bpMnR4VaA_LZEbmqRwME0ZbUx5DPB4-2i45zZE6xh4pj1vY2ugzcX81Yp9uaUL8E7XX1XM91I6MBZQhSt1_W92bEVU7MGK4J26fRDECyViayNLLWbA'
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
    filtroMin:100,
    filtroMax: "",
    filtroNome:'',
    produtosCarrinho: [
      
    ]
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
