import PokemonList from './components/pokemonList';

export default function Home() {
  return (
    <main>
      <div className="h-fit w-full grid place-content-center">
        <h1 className="font-pokemon text-6xl md:text-9xl text-yellow-400 font-outline-2 tracking-wider mb-12">
          Pokedex
        </h1>
      </div>
      <PokemonList />
    </main>
  );
}
