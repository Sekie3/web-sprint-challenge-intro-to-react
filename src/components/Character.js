import React from 'react';
import styled from 'styled-components';

const CharacterBox = styled.div`
  border: 2px solid #3498db;
  padding: 10px;
  margin: 10px;
  background-color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h3`
  color: #3498db;
`;

const CharacterDetails = styled.p`
  font-size: 14px;
  color: #333;
  font-family: verdana;
`;

const Characters = (props) => {
  const { character } = props;

  return (
    <CharacterBox>
      <Name>{character.name}</Name>
      <CharacterDetails>Height: {character.height}</CharacterDetails>
      <CharacterDetails>Mass: {character.mass}</CharacterDetails>
      {/* Add more character details here */}
    </CharacterBox>
  );
}

export default Characters;