import { Pokemon } from "../interfaces/Pokemon.interface";
import PokemonCardImage from "./PokemonCardImage";
import { formatPokemonId } from "../utils/pokemonUtils";

interface CardPokemonProps {
  pokemon: Pokemon;
  onSelect: (pokemon: Pokemon) => void;
  isSelected: boolean;
}


function CardPokemon({ pokemon, onSelect, isSelected }: CardPokemonProps) {

  const handleClick = () => {
    onSelect(pokemon);
  }
  return (
    <div  className={`p-2 cursor-pointer transition-all duration-300 shadow-md 
      ${isSelected ? "bg-blue-400 hover:bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`}
                 onClick={handleClick}>   
      <div className="flex items-center p-2 lg:p-4 xl:p-6">
        {/* Imagen del Pokémon con tamaños responsivos */}
        <div className="w-16 h-16  flex-shrink-0">
          <PokemonCardImage
            id={pokemon.id}
            name={pokemon.name}
            className="w-full h-full"
          />
        </div>

        {/* Información del Pokémon */}
        <div className="ml-2 lg:ml-4">
          <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{pokemon.name}</div>
          <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-500">{formatPokemonId(pokemon.id)}</div>
        </div>
      </div>
    </div>
  );
}

export default CardPokemon;
