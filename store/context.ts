import { createContext } from "react";

export type PokemonActions =
  | { type: "ADD_MY_POKEMON"; payload: any }
  | { type: "REMOVE_MY_POKEMON"; payload: any };

const STORAGE_KEY = "pokemonState";

interface PokemonState {
  myPokemon: any;
}
const defaultState: PokemonState = {
  myPokemon: [],
};

export interface PokemonProviderValue {
  state: PokemonState;
  dispatch(action: PokemonActions): void;
}

const StoreContext = createContext({
  state: defaultState,
  dispatch: (action: PokemonActions) => {},
});

export default StoreContext;
