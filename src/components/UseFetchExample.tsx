import { Suspense, useState } from 'react';
import { ShowPokemon } from './ShowPokemon';

export function UseFetchExample() {
  const [name, setName] = useState('');

  const fetchPokemon = () => {
    if (!name) return Promise.resolve();

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      if (res.ok) return res.json();
      return { error: true, message: 'Pokemon not found' };
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          placeholder="EJ. Pikachu"
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <Suspense fallback={<div>Loading...</div>}>
        <ShowPokemon pokemonPromise={fetchPokemon()} />
      </Suspense>
    </div>
  );
}
