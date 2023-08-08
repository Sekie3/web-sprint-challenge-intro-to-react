import React, { useState, useEffect } from 'react';
import Character from './Character';
import styled from 'styled-components';

const Characters = (props) => {
    const { characters } = props;

    return(

        <div> 
        {
        characters.map(character => <Character character={character} key={character.name}/>)
        }
        </div>
    );
}

export default Characters;