import ListPokemons from "./components/ListPokemons";
import SearchBar from "./components/SearchBar";
import { Pokemon } from "./interfaces/Pokemon.interface";
import PokemonCardImage from "./components/PokemonCardImage";
import { getTypeColor } from "./utils/pokemonUtils";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import pokebol from "./assets/pngegg.png";

import { useEffect, useState, useRef } from "react";

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass", "poison"],
    stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
    height: 0.7,
    weight: 6.9,
    abilities: ["overgrow", "chlorophyll"],
    evolutionChain: [1, 2, 3],
  },
  {
    id: 2,
    name: "Ivysaur",
    types: ["grass", "poison"],
    stats: { hp: 60, attack: 62, defense: 63, speed: 60 },
    height: 1,
    weight: 13,
    abilities: ["overgrow", "chlorophyll"],
    evolutionChain: [1, 2, 3],
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["grass", "poison"],
    stats: { hp: 80, attack: 82, defense: 83, speed: 80 },
    height: 2,
    weight: 100,
    abilities: ["overgrow", "chlorophyll"],
    evolutionChain: [1, 2, 3],
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    stats: { hp: 39, attack: 52, defense: 43, speed: 65 },
    height: 0.6,
    weight: 8.5,
    abilities: ["blaze", "solar-power"],
    evolutionChain: [4, 5, 6],
  },
  {
    id: 5,
    name: "Charmeleon",
    types: ["fire"],
    stats: { hp: 58, attack: 64, defense: 58, speed: 80 },
    height: 1.1,
    weight: 19,
    abilities: ["blaze", "solar-power"],
    evolutionChain: [4, 5, 6],
  },
  {
    id: 6,
    name: "Charizard",
    types: ["fire", "flying"],
    stats: { hp: 78, attack: 84, defense: 78, speed: 100 },
    height: 1.7,
    weight: 90.5,
    abilities: ["blaze", "solar-power"],
    evolutionChain: [4, 5, 6],
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["water"],
    stats: { hp: 44, attack: 48, defense: 65, speed: 43 },
    height: 0.5,
    weight: 9,
    abilities: ["torrent", "rain-dish"],
    evolutionChain: [7, 8, 9],
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["water"],
    stats: { hp: 59, attack: 63, defense: 80, speed: 58 },
    height: 1,
    weight: 22.5,
    abilities: ["torrent", "rain-dish"],
    evolutionChain: [7, 8, 9],
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["water"],
    stats: { hp: 79, attack: 83, defense: 100, speed: 78 },
    height: 1.6,
    weight: 85.5,
    abilities: ["torrent", "rain-dish"],
    evolutionChain: [7, 8, 9],
  },
  {
    id: 10,
    name: "Caterpie",
    types: ["bug"],
    stats: { hp: 45, attack: 30, defense: 35, speed: 45 },
    height: 0.3,
    weight: 2.9,
    abilities: ["shield-dust", "run-away"],
    evolutionChain: [10, 11, 12],
  },
  {
    id: 11,
    name: "Metapod",
    types: ["bug"],
    stats: { hp: 50, attack: 20, defense: 55, speed: 30 },
    height: 0.7,
    weight: 9.9,
    abilities: ["shed-skin"],
    evolutionChain: [10, 11, 12],
  },
  {
    id: 12,
    name: "Butterfree",
    types: ["bug", "flying"],
    stats: { hp: 60, attack: 45, defense: 50, speed: 70 },
    height: 1.1,
    weight: 32,
    abilities: ["compound-eyes", "tinted-lens"],
    evolutionChain: [10, 11, 12],
  },
];

function App() {
  const [search, setSearch] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(
    pokemons[0]
  );

  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSelectPokemon = (pokemon: Pokemon) => {
    setPokemonSelected(pokemon);
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (pokemonSelected) {
      console.log(pokemonSelected);
    }
  }, [pokemonSelected]);

  useEffect(() => {
    if (search === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredPokemons(filteredPokemons);
    }
  }, [search]);

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen gap-4 rounded-lg p-4 max-w-screen-lg mx-auto font-mono">
        {/* Contenedor de 2/3 en pantallas grandes */}
        <div className="md:w-2/3 p-4 rounded-lg h-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-2 mx-3">
            <img
              src={pokebol}
              className="w-10 sm:w-12 md:w-16 lg:w-24 mx-6"
              alt="Pokebola"
            />
            <h1 ref={titleRef} className="text-7xl text-gray-800 mb-4">
              Pokedex
            </h1>
          </div>

          <div className="w-full bg">
            <SearchBar setSearch={setSearch} />
          </div>

          <div
            ref={statsRef}
            className="flex h-96 w-full flex-col items-center justify-between p-4 border rounded-lg shadow-md"
          >
            {pokemonSelected && (
              <>
                {/* Imagen del Pokémon */}
                <div className="w-full h-36">
                  <PokemonCardImage
                    id={pokemonSelected.id}
                    name={pokemonSelected.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Estadísticas */}
                <div className="text-center">
                  <h3 className="text-xl font-bold">{pokemonSelected.name}</h3>
                  <div className="flex gap-2 justify-center">
                    {pokemonSelected.types.map((type) => (
                      <p
                        key={type}
                        className="text-sm text-white px-6 rounded-lg"
                        style={{ background: getTypeColor(type) }}
                      >
                        {type}
                      </p>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                    <p>
                      <strong>HP:</strong> {pokemonSelected.stats.hp}
                    </p>
                    <p>
                      <strong>Attack:</strong> {pokemonSelected.stats.attack}
                    </p>
                    <p>
                      <strong>Defense:</strong> {pokemonSelected.stats.defense}
                    </p>
                    <p>
                      <strong>Speed:</strong> {pokemonSelected.stats.speed}
                    </p>
                  </div>
                </div>

                {/* Evoluciones */}
                <div className="flex gap-2">
                  {pokemonSelected.evolutionChain.map((evoId) => (
                    <PokemonCardImage
                      key={evoId}
                      id={evoId}
                      name=""
                      className="w-full h-full"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-gray-300 p-2 rounded-full cursor-pointer">
              <ChevronLeft />
            </button>
            <button className="p-2 rounded-full cursor-pointer">
              <Heart />
            </button>
            <button className="bg-gray-300 p-2 rounded-full cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Contenedor de 1/3 en pantallas grandes */}
        <div className="md:w-1/3 flex flex-col gap-4 h-full">
          <div className="flex-1 custom-scrollbar overflow-y-auto mb-4 md:mb-0">
            <ListPokemons
              pokemons={filteredPokemons}
              onSelect={handleSelectPokemon}
              pokemonSelected={pokemonSelected}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
