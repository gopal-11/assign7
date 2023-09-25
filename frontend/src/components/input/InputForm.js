// frontend/src/components/InputForm.js
import './index.css';

const pokemonOptions = [
  { name: 'Front Default', valu: 'front_default' },
  { name: 'Back Default', value: 'back_default' },
  { name: 'Front Shiny', value: 'front_shiny' },
  { name: 'Back Shiny', value: 'back_shiny' },
];

// Component for Inpurt section of app
const InputForm = ({ selectedPokemon, handlePokemonChange, handleSubmit }) => {
  return (
    <div className="input-form">
      <div className="margin-left10">
        {' '}
        <label>Image option:</label>
      </div>
      <div className="margin-left10">
        <select
          className="margin-left10"
          value={selectedPokemon}
          onChange={handlePokemonChange}
        >
          {pokemonOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <button className="margin-left10" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputForm;
