import { useContext, useEffect } from 'react';
import { store } from '../../store';
import DefaultLayout from '../../layout/Default';
import PokemonList from '../../components/PokemonList';
import { POKEMON_DB } from '../../db';

const MyPokemon = () => {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    POKEMON_DB.getPokemons().then((result) => {
      dispatch({ type: 'SET_MY_POKEMON_LIST', payload: result });
    })
  }, [])

  return (
    <DefaultLayout>
      <PokemonList entries={state.myPokemons || []} showOwned />
    </DefaultLayout>
  );
};

export default MyPokemon;
