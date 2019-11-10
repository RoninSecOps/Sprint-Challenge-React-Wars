import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 20px auto;
  width: 30%;
  border: rgb(220, 80, 40) 2px solid;
  height: auto;
  border-radius: 20%;
  &:hover {
    background-color: gray;
  }
`;

const Card = props => {
  return (
    <StyledDiv>
      <h1>{props.name}</h1>
      <h3>Height: {props.height}</h3>
      <h3>Mass: {props.mass}</h3>
      <h3>Hair colour: {props.hair_color}</h3>
      <h3>Skin colour: {props.skin_color}</h3>
    </StyledDiv>
  );
};
export default Card;
