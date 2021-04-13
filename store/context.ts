import { createContext } from 'react';
import { PokemonState, PokemonActions } from '../types';

export const defaultState: any = {
  myPokemons: []
};

export const store = createContext(defaultState);
export const { Provider } = store;
