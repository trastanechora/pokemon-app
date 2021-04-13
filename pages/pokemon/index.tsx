/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { store } from '../../store';
import DefaultLayout from '../../layout/Default';
import PokemonList from '../../components/PokemonList';
import { POKEMON_DB } from '../../db';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 1118,
  offset: 0
};

const PokemonIndex = () => {
  const { state, dispatch } = useContext(store);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  });

  useEffect(() => {
    POKEMON_DB.getPokemons().then((result) => {
      dispatch({ type: 'SET_MY_POKEMON_LIST', payload: result });
    });
  }, []);

  if (loading)
    return (
      <DefaultLayout>
        <div>Loading..</div>
      </DefaultLayout>
    );

  if (error)
    return (
      <DefaultLayout>
        <div>Error.. {error}</div>
      </DefaultLayout>
    );

  return (
    <DefaultLayout>
      <div css={css`
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
        <h3>Pokemon List</h3>
        <h4>Total owned: {state.myPokemons.length}</h4>
      </div>
      <PokemonList entries={data.pokemons.results || []} />
    </DefaultLayout>
  );
};

export default PokemonIndex;
