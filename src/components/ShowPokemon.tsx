import { use } from 'react';

export function ShowPokemon({
  pokemonPromise,
}: {
  pokemonPromise: Promise<any>;
}) {
  const pokemon = use(pokemonPromise);

  if (pokemon?.error) return <div>{pokemon.message}</div>;

  if (!pokemon) return null;

  return (
    <div>
      resultado:
      <article>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.weight}kg</p>
      </article>
    </div>
  );
}
