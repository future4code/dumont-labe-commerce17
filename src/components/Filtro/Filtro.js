import React from 'react'
import styled from 'styled-components'

const EstiloDoFiltro= styled.div`
    border:1px solid black;
    padding: 8px;
    margin-left: 8px;
`

const EstiloDoInput= styled.label`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    margin-bottom: 8px;

    
`
// fazer uma função que mostre todos os produtos quando não tem nada selecionado no filtrão 
class Filtro extends React.Component {
   render(){
       return(
        <EstiloDoFiltro>
           <h1>Filtros:</h1>
            <EstiloDoInput>
                Valor Máximo:
                <input 
                type="number" 
                value={this.props.filtrao}
                onChange={this.props.mudarMaximo}></input>
            </EstiloDoInput>
            <EstiloDoInput>
                Valor Mínimo:
                <input 
                type="number" 
                value={this.props.filtrinho}
                onChange={this.props.mudarMinimo}></input>
            </EstiloDoInput>
            <EstiloDoInput>
                Buscar Produto:
                <input type="text" 
                value={this.props.nomeDoFiltro}
                onChange={this.props.mudarNome}></input>
            </EstiloDoInput>
        </EstiloDoFiltro>
       )    
       
   }
}
    export default Filtro;