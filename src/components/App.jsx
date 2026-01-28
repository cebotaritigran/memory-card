
import { Header } from "./Header";
import { CardGrid } from "./CardGrid";
import '../styles/App.css'
import { useEffect, useState } from "react";

function App() {

  const [pokemons, setPokemons] = useState([]);

  const selectedPokemons = [
    25, 6, 778, 197, 10038, 1, 448, 10205, 150, 428
  ];
  // fetch data ->
  // randomize cards in this code with their respectful key ->
  // on click change state of the card 'isSelected' ->
  // update score ->
  // if chosen already 'isSelected' restart the game
  useEffect(() => {
    let someArray = []
    async function getPokemonData() {
      try {

        for (let i = 0; i < selectedPokemons.length; i++) {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + selectedPokemons[i])
          const data = await response.json();
          someArray.push(data.sprites?.other?.['official-artwork']?.['front_default'])
        }

        setPokemons(someArray)

      } catch (error) {
        console.log(error);
      }
    }
    getPokemonData();

  }, []);
  console.log(pokemons)

  return (
    <>
      <div className='project-container'>
        <div className='header'>
          <Header></Header>
        </div>
        <div className='body'>
          <div className="card-container">
            {pokemons.map((pokemon) => {
              return (<CardGrid pokemon={pokemon}></CardGrid>)
            })}
          </div>
        </div>
        <div className='footer'></div>
      </div>

    </>
  )
}

export default App
