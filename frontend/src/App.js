// frontend/src/App.js
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import InputForm from './components/input/InputForm';
import Card from './components/card/Card';

const APIURL = 'http://localhost:3001/api/images';

// Entry point components for app
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('front_default');

  // handle submit and fetch pokemon data
  const handleSubmit = async () => {
    await axios
      .post(APIURL, {
        selectedOption: selectedPokemon,
      })
      .then((res) => {
        setPokemonList(res.data.responseOutput);
      });
  };

  // pokemon selection handler
  const handlePokemonChange = (e) => {
    setSelectedPokemon(e.target.value);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="container">
      <div className="input-container">
        <InputForm
          selectedPokemon={selectedPokemon}
          handlePokemonChange={handlePokemonChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="image-container">
        {pokemonList?.map((url, index) => {
          return <Card key={index} url={url} />;
        })}
      </div>
    </div>
  );
}

export default App;
