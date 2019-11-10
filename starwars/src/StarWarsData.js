import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';

// styling
const DivStyled = styled.div`
  height: auto;
  border-radius: 50%;
  border: 1px solid red;
  box-shadow: 0 29px 28px rgba(0, 0, 0, 0.5), 0 25px 22px rgba(0, 0, 0, 0.22);
  overflow: hidden;
`;

function StarwarsData() {
  const [starwarsChars, setStarwarsChars] = useState([]);

  useEffect(() => {
    console.log('StarwarsData component mounted');
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log('Charachters: ', response.data);
        setStarwarsChars(response.data.results);
      })
      .catch(error => {
        console.log('the data was not returned', error);
      });
  }, []);

  return (
    <DivStyled className='CardContainer'>
      {starwarsChars.map(character => {
        return (
          <Card
            name={character.name}
            height={character.height}
            mass={character.mass}
            hair_color={character.hair_color}
            skin_color={character.skin_color}
          />
        );
      })}
    </DivStyled>
  );
}
export default StarwarsData;
