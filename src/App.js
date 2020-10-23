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
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoQaZKRS4E0EAHWFIBIbDeQcjRB78D0J4qag&usqp=CAU'
    },
    {
      id: 2,
      nome: 'Produto 2',
      preco: 200,
      foto: 'https://yvybrasil.com/store/wp-content/uploads/2019/03/18.jpg'
    },
    {
      id: 3,
      nome: 'Produto 3',
      preco: 300,
      foto: 'https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_661,q_auto:best/v1/https://amaroecp-res.cloudinary.com/image/upload/v1598967945/images/bob-condicionador-em-barra-hidratacao-profunda-sem-cor-01.jpg'
    },
    {
      id: 4,
      nome: 'Produto 4',
      preco: 400,
      foto: 'https://amaroecp-res.cloudinary.com/image/upload/v1598967926/images/bob-shampoo-em-barra-purificante-sem-cor-01.jpg'
    },
    {
      id: 5,
      nome: 'Produto 5',
      preco: 600,
      foto: 'https://images-americanas.b2w.io/produtos/01/00/img/1646730/7/1646730782_2GG.jpg'
    },
    {
      id: 6,
      nome: 'Produto 6',
      preco: 800,
      foto: 'https://www.toquedebrindes.com.br/media/catalog/product/cache/1/image/400x400/17f82f742ffe127f42dca9de82fb58b1/c/o/copo-fibra-de-bambu-co019-brindes-personalizados-florianopolis.jpg'
    }
]

class App extends React.Component {
  state = {
    filtroMin: 10,
    filtroMax: 1000,
    filtroNome:'Produto',
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
