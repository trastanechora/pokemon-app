import { POKEMON_DB } from '../db';

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_MY_POKEMON_LIST':
      return {
        ...state,
        myPokemons: action.payload
      };
    case 'ADD_MY_POKEMON':
      POKEMON_DB.catchPokemon(action.payload);
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload]
      };
    case 'REMOVE_MY_POKEMON':
      POKEMON_DB.releasePokemon(action.payload);
      const newMyPokemons = state.myPokemons.filter((uuid) => uuid !== action.payload.uuid);
      return {
        myPokemons: newMyPokemons
      };
    default:
      return state;
  }
}
