import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { Show, createSignal, type Component } from 'solid-js';

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const deletePokemon = (id: number) => {
    const storedFavoritePokemons = JSON.parse(
      localStorage.getItem('favoritePokemons') ?? '[]'
    ) as FavoritePokemon[];

    const newFavoritePokemons = storedFavoritePokemons.filter(
      (pokemon: FavoritePokemon) => pokemon.id !== id
    );

    localStorage.setItem(
      'favoritePokemons',
      JSON.stringify(newFavoritePokemons)
    );

    setVisible(false);
  };

  const [isVisible, setVisible] = createSignal(true);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <Show when={isVisible()}>
      <div class='flex flex-col justify-center items-center'>
        <a href={`/pokemon/${pokemon.id}`}>
          <p class='capitalize'>
            #{pokemon.id} - {pokemon.name}
          </p>
          <img src={imageUrl} alt={pokemon.name} />
        </a>
        <button
          on:click={() => {
            deletePokemon(pokemon.id);
          }}
          class='text-red-400'
        >
          Borrar
        </button>
      </div>
    </Show>
  );
};
