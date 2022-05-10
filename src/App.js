import './App.css';
import React, {useState} from 'react'
import axios from 'axios'


function App() {
  //      State     SetState      default State
  const [pokemon, setPokemon] = useState([]);

  // axios method
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then( response => {
        // console.log(response.data);
        setPokemon(response.data.results);
      })
      .catch( err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Names of 807 Pokemon</h1>
      <h2>Using axios</h2>
      <button onClick={axiosPokemon}>Fetch Pokemon</button>
      
      {pokemon.map((poke, i) => (<li key={i}>{poke.name}</li>))}
    </div>
  );
}

export default App;
