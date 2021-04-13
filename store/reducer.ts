export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_MY_POKEMON_LIST':
      return {
        ...state,
        myPokemons: action.payload
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload
      };
    case 'ADD_MY_POKEMON':
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload]
      };
    case 'REMOVE_MY_POKEMON':
      const newMyPokemons = state.myPokemons.filter((uuid) => uuid !== action.payload.uuid);
      return {
        myPokemons: newMyPokemons
      };
    default:
      return state;
  }
}
