export async function getAllPokemons() {
  const Response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=300'
  );
  const Pokemons: response = await Response.json();
  return Pokemons;
}
