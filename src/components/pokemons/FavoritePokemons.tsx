import TitleComponent from '@components/shared/TitleComponent.astro';
import { createSignal, type Component, onMount, For } from 'solid-js';
import PokemonCard from './PokemonCard.astro';
import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { FavoritePokemonCard } from './FavoritePokemonCard';

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const storedFavoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons') ?? '[]') as FavoritePokemon[];
  return storedFavoritePokemons.sort((a, b) => a.id - b.id);
};

export const FavoritePokemons = () => {
  const [favoritePokemons, setFavoritePokemons] = createSignal(
    getLocalStoragePokemons()
  );
  return (
    <div class='mt-4 grid grid-cols-2 sm:grid-cols-4 gap-8'>
      <For each={favoritePokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};
