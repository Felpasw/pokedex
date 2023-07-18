import { getAPokemon } from '@/lib/getAPokemon';
import Image from 'next/image';
import { Metadata } from 'next/types';
import PokemonTypes from './components/pokemonTypes';

type Params = {
  id: string;
};

export default async function PokemonPage({ params }: { params: Params }) {
  const pokemon: Pokemon = await getAPokemon(params.id);
  return (
    <>
      <span className="grid place-content-center">
        <h1 className="font-pokemon text-6xl md:text-9xl tracking-wider  m-12">
          {pokemon.name.toLocaleUpperCase()}
        </h1>
        <Image
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${params.id}.svg`}
          alt=""
          width={500}
          height={500}
        />
      </span>
      <PokemonTypes types={pokemon.types} />
    </>
  );
}

//   return <div>Pokemon</div>;
// }

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const pokemon: Pokemon = await getAPokemon(params.id);
  return {
    title: pokemon.name.toUpperCase(),
  };
}
