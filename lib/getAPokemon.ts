export async function getAPokemon(id: string) {
  const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const Pokemon: Pokemon = await Response.json();
  return Pokemon;
}
