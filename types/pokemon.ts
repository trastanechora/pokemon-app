export interface BaseName {
  url: string;
  name: string;
}

export interface Move {
  name: string;
}
export interface Ability extends Move {}
export interface Type extends Move {}

export interface Sprite {
  back_default: string;
  front_default: string;
}

export interface Pokemon {
  nickname?: string;
  uuid?: string;
  abilities?: Ability[];
  height?: number;
  id?: number;
  moves?: Move[];
  name?: string;
  order?: number;
  species?: BaseName;
  sprites?: Sprite;
  types?: Type[];
  weight?: number;
  status?: boolean;
  image?: string;
}

export interface PokemonResponse {
  pokemon: Pokemon;
}

export interface PokemonsBody {
  count: number;
  message: string;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
  status: boolean;
}

export interface PokemonsResponse {
  pokemons: PokemonsBody;
}

export interface PokemonState {
  myPokemon: Pokemon[];
  selectedPokemon: Pokemon;
}

export interface PokemonProviderValue {
  state: PokemonState;
  dispatch(action: PokemonActions): void;
}

export type PokemonActions =
  | { type: 'SET_MY_POKEMON_LIST' }
  | { type: 'SET_SELECTED_POKEMON'; payload: Pokemon }
  | { type: 'ADD_MY_POKEMON'; payload: Pokemon }
  | { type: 'REMOVE_MY_POKEMON'; payload: Pokemon };
