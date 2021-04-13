/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
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
    });
  }, []);

  return (
    <DefaultLayout>
      <div
        css={css`
          display: flex;
          place-content: space-between;
          font-family: 'Roboto', sans-serif;
          color: #f44336;
          @media (max-width: 960px) {
            display: block;
            text-align: center;
            h3 {
              margin-bottom: 4px;
            }
            h4 {
              margin-top: 4px;
            }
          }
        `}>
        <h3>My Pokemon</h3>
        <h4>Total owned: {state.myPokemons.length}</h4>
      </div>
      <PokemonList entries={state.myPokemons || []} showOwned />
    </DefaultLayout>
  );
};

export default MyPokemon;
