import { getAllPokemons } from '@/lib/getAllPokemons';
import PokemonButton from './pokemonCard';

export default async function PokemonList() {
  const Response: Promise<response> = getAllPokemons();

  const Pokemons: Pokemons[] = (await Response).results;

  return (
    <>
      <div className="flex  gap-10 flex-row flex-wrap m-9">
        {Pokemons.map((element, index) => (
          <PokemonButton Pokemon={element} key={index} id={(index += 1)} />
        ))}
      </div>
    </>
  );
}
