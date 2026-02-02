import Tilt from 'react-parallax-tilt';
import { Header } from "./Header";
import { CardGrid } from "./CardGrid";
import '../styles/App.css'
import { useEffect, useState } from "react";

function App() {





  const [pokemonsInfo, setPokemonsInfo] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);

  // const pokemonsInfo = [
  //   // {
  //   //   pokemonName: "idk",
  //   //   pokemonImgUrl: "",
  //   //   pokemonID: 1
  //   // }
  // ];

  // let randomPokemons = [];
  // fetch data ->
  // randomize cards in this code with their respectful key ->
  // on click change state of the card 'isSelected' ->
  // update score ->
  // if chosen already 'isSelected' restart the game ->
  // if successfuly selected all cards without selecting duplicates win the game
  useEffect(() => {
    const selectedPokemons = [
      25, 6, 67, 197, 10038, 1, 448, 10205, 150, 428, 38, 78, 502, 671, 31
    ];
    let tmpArray = []
    let tmpPokemonInfo = []
    async function getPokemonData() {
      try {

        for (let i = 0; i < selectedPokemons.length; i++) {
          // random pokemons selector
          // let random = Math.floor(Math.random() * 1000);
          // console.log(random)
          // const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + random)
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + selectedPokemons[i])
          const data = await response.json();
          // setPokemonsInfo([
          //   ...pokemonsInfo,
          //   {
          //     pokemonName: data.name,
          //     pokemonImgUrl: data.sprites?.other?.['official-artwork']?.['front_default'],
          //     pokemonID: data.id
          //   }
          // ])

          tmpPokemonInfo.push({
            pokemonName: data.name,
            pokemonImgUrl: data.sprites?.other?.['official-artwork']?.['front_default'],
            pokemonID: data.id,
            isSelected: false,
          })
          tmpArray.push(data.sprites?.other?.['official-artwork']?.['front_default'])
        }
        setPokemonsInfo(tmpPokemonInfo)


      } catch (error) {
        console.log(error);
      }
    }
    getPokemonData();

  }, []);




  function handleClick(e, pokemon) {

    //if pokemon is already selected, the game restarts, if not pokemon is marked as selected(clicked,chosen)
    if (pokemon.isSelected == true) {
      console.log("reset")
      if (score > bestScore) {
        setBestScore(score)
      }

      setScore(0)
      // reset isSelected on every pokemon
      pokemonsInfo.map((pokemonInfo) => {
        pokemonInfo.isSelected = false;
      })
    } else {
      pokemon.isSelected = true;
      setScore(score + 1);

    }


    // checking if every pokemon is isSelected is true by every and returning true if isselected is true
    if (pokemonsInfo.every(pokemon => pokemon.isSelected)) {
      console.log("you win")
    }

    console.log(pokemon)



    //we need a new array thats why we do ...pokemonsInfo so that react understands that its a new array and to rerendder page
    let tmpArray = [...pokemonsInfo].sort(() => Math.random() - 0.5)
    setPokemonsInfo(tmpArray)
    console.log(pokemonsInfo)
  }


  return (
    <>
      <div className='project-container'>
        <div className='header'>
          <Header score={score} bestScore={bestScore}></Header>
        </div>
        <div className='body'>
          <div className="card-container">
            {pokemonsInfo.map((pokemonInfo) => {
              return (
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.7}
                  glareColor="rgb(255, 154, 86)"
                  glarePosition="all"
                  scale={1.1}
                  glareBorderRadius="20px"
                >
                  <div key={pokemonInfo.pokemonID} onClick={(e) => { handleClick(e, pokemonInfo) }}>
                    <CardGrid
                      pokemonImgUrl={pokemonInfo.pokemonImgUrl}
                      pokemonName={pokemonInfo.pokemonName}
                    >
                    </CardGrid>
                  </div>
                </Tilt>
              )
            })}
          </div>
          {/* <button variant="primary" className="shuffler" onClick={() => { handleShuffle() }}>shuffle</button> */}
        </div>
        <div className='footer'>
          <div></div>
        </div>
      </div >

    </>
  )
}

export default App
