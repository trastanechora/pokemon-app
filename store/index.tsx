import { useReducer } from 'react';
import { defaultState, Provider, store } from './context';
import CustomReducer from './reducer';
import { PokemonState, PokemonActions } from '../types';

type Reducer<S, A> = (prevState: S, action: A) => S;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<PokemonState, PokemonActions>>(
    CustomReducer,
    defaultState
  );
  const providerValue = { state, dispatch };

  return <Provider value={providerValue}>{children}</Provider>;
};

export { store, StateProvider };
