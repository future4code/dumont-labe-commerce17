import React from 'react'
import styled from 'styled-components';

const FiltroContainer = styled.div`
border: 1px solid black;
padding: 8px;
`;
const InputContainer = styled.label`
display: flex;
flex-direction: column;
align-items:flex-start;
margin-bottom:8px;
`;

export class Filtro extends React.Component{
    render(){
        return <FiltroContainer>
            <h3>Filtro</h3>
                <InputContainer>
                Valor mínimo:
                <input type="number"
                value={this.props.min}
                onChange={this.props.onChangeFiltroMin}
                />
                </InputContainer>
            
                <InputContainer>
                Valor máximo:
                <input type="number"
                value={this.props.max}
                onChange={this.props.onChangeFiltroMax}
                />
                </InputContainer>
            
                <InputContainer>
                Buscar por nome:
                <input type="texto"
                value={this.props.nome}
                onChange={this.props.onChangeFiltroNome}
                />
                </InputContainer>
            
            </FiltroContainer>
    }
}