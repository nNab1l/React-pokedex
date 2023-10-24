import React, { useState } from 'react';
import './App.css';
import Card from './Cards';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pokemonName, setPokemonName] = useState('pikachu'); 

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setPokemonName(searchValue.toLowerCase()); 
  };

  return (
    <div className="App">
      <h1>{pokemonName}</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a Pokemon..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='wrapper'>
      <div className="pokemon-cards">
        <Card pokemonName={pokemonName} cardTitle="Image" />
        <Card pokemonName={pokemonName} cardTitle="Stats" />
        <Card pokemonName={pokemonName} cardTitle="Info" />
        <Card pokemonName={pokemonName} cardTitle="Type" />
      </div>
      </div>
    </div>
  );
}

export default App;
