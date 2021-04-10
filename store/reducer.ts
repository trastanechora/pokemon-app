export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_MY_POKEMON":
      return {
        ...state,
        myPokemons: [...state.myPokemons, ...action.payload],
      };
    case "REMOVE_MY_POKEMON":
      const newMyPokemons = state.myPokemons.filter(
        (id) => id !== action.payload.id
      );
      return {
        myPokemons: newMyPokemons,
      };
    default:
      return state;
  }
}
