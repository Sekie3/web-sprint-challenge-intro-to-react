import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Characters from './components/Characters';
import axios from 'axios';

async function getData() {
  const baseUrl = 'https://swapi.dev/api/people/';

  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  const [characterObjects, setCharacters] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const characterArray = await getData();
      if (characterArray) {
        setCharacters(characterArray);
      }
    }
    fetchData();
  }, []);
  console.log(characterObjects);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characterObjects}/>
    </div>
  );
}

export default App;
