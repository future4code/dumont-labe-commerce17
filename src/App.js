import React from 'react'
import styled from 'styled-components'
import Filtro from './components/Filtro/Filtro'
import Carrinho from './components/Carrinho/Carrinho'
import Home from './components/Home/Home'


const EstiloCabecalho=styled.div`
    display:flex;
    flex-direction:row;
    margin:2em;
`
const EstiloImagem=styled.img`
    width:200px;
    height:120px ;
    margin-right:18em;
`
const AppContainer= styled.div`
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    background-color:white;
`

const ArrayDeProdutos=[
    {
        id:1,
        nome:"Toy Story viagem espacial",
        preço:139,
        imagem:"https://a-static.mlcdn.com.br/1500x1500/brinquedo-para-menino-toy-story-4-nave-espacial-buzz-mattel/vitrinemulti/97605p/7c07c117b8bdfa7627a8da6bbfc8e463.jpg",
        
    },
    {
        id:2,
        nome:"Ônibus Espacial",
        preço:190,
        imagem:"https://blogdebrinquedo.com.br/wp-content/uploads/2010/05/Lego-Shuttle-Adventure-01.jpg",
       

    },
    {
        id:3,
        nome:"Cabana Estação Espacial",
        preço:154,
        imagem:"https://blogdebrinquedo.com.br/wp-content/uploads/2014/12/Cabana-Pop-Up-Space-Station-Tent-01.jpg",
        

    },
    {
        id:4,
        nome:"Kit experiências espaciais",
        preço:120,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgg-70Q7dl76KmXLeg-O9VCeZJkkPC02nJ6Q&usqp=CAU",
       

    },
    {
        id:5,
        nome:"Tapete mesversário espacial",
        preço:189,
        imagem:"https://usealce.com.br/wp-content/uploads/2020/10/af5aa1ff0f843d60630b04acaedd0afd.jpg",
        

    },
    {
        id:6,
        nome:"Robo Astronauta",
        preço:1230,
        imagem:"https://http2.mlstatic.com/D_NQ_NP_949166-MLB43645175033_102020-O.webp",
        

    },
    {
        id:7,
        nome:"Pelúcia de foguete",
        preço:55,
        imagem:"https://http2.mlstatic.com/D_NQ_NP_952780-MLB41991875231_052020-O.webp",
        

    },
    {
        id:8,
        nome:"Mobile espacial",
        preço:45,
        imagem:"https://i.pinimg.com/originals/2c/60/6a/2c606ac29dedd402759e3ee6820a244b.jpg",
        

    }
]

class App extends React.Component {
    state = {
       filtroMaximo:"",
       filtroMinimo:"",
       filtroNome:'',

       listaDoCarrinho:[    ]
    }

    

    onChengeMaximo = (event)=>{
        this.setState({filtroMaximo:event.target.value})
    }
    onChengeMinimo = (event)=>{
        this.setState({filtroMinimo:event.target.value})
    }
    onChengeNome = (event)=>{
        this.setState({filtroNome:event.target.value})
    }
    addProdutoCarrinho = (produtoId) => {
        const produtoNoCarrinho=this.state.listaDoCarrinho.find((produto)=>produtoId===produto.id)

        if(produtoNoCarrinho){
            const novoProdutoNoCar = this.state.listaDoCarrinho.map((produto)=>{
                if(produtoId===produto.id){
                    return {...produto, quantidade:produto.quantidade + 1}
                }
                return produto
            })
            this.setState({listaDoCarrinho:novoProdutoNoCar})
        }else{
            const produtoParaAdd = ArrayDeProdutos.find((produto)=>produtoId===produto.id)
            const novoProdutoNoCar = [...this.state.listaDoCarrinho,{...produtoParaAdd,quantidade:1}]
            this.setState({listaDoCarrinho: novoProdutoNoCar})
        }
    }
    removeProdutoCarrinho = (produtoId)=>{
        const novoProdutoNoCar = this.state.listaDoCarrinho.map((produto)=>{
            if(produto.id ===produtoId){
                return {...produto,quantidade: produto.quantidade-1 }
            }
            return produto
        }).filter((produto)=>produto.quantidade>0)
        this.setState({listaDoCarrinho:novoProdutoNoCar})
    }

    componentDidUpdate=()=>{
        localStorage.setItem("listaDoCarrinho", JSON.stringify(this.state.listaDoCarrinho))
    }
    componentDidMount(){
        if(localStorage.getItem("listaDoCarrinho")){
        this.setState({listaDoCarrinho:JSON.parse(localStorage.getItem("listaDoCarrinho"))})}
    }
        render(){
            
                
            return(
             <div>
                <EstiloCabecalho>
                    <EstiloImagem 
                    src="https://casadaarte.vteximg.com.br/arquivos/ids/222111/APM8-859.jpg?v=636776513981000000" 
                    alt="imagem do logotipo"/>
                    <h1>A Lojinha do pequeno astronalta!</h1>
                </EstiloCabecalho>
                <AppContainer>
                
                    <Filtro
                        filtrao={this.state.filtroMaximo}
                        filtrinho={this.state.filtroMinimo}
                        nomeDoFiltro={this.state.filtroNome}
                        mudarMaximo={this.onChengeMaximo}
                        mudarMinimo={this.onChengeMinimo}
                        mudarNome={this.onChengeNome}
                     />         
                    <Home 
                        produtinhos={ArrayDeProdutos}
                        filtrao={this.state.filtroMaximo}
                        filtrinho={this.state.filtroMinimo}
                        nomeDoFiltro={this.state.filtroNome}
                        addProdutoCarrinho={this.addProdutoCarrinho}
                    />  
                 
                    <Carrinho
                        adicionaCarrinho={this.state.listaDoCarrinho}
                        removeProdutoCarrinho={this.removeProdutoCarrinho}/> 
                </AppContainer>
             </div>
            )
        }
}
export default App;
