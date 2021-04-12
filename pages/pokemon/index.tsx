/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useQuery, gql } from '@apollo/client';
import DefaultLayout from '../../layout/Default'
import PokemonList from '../../components/PokemonList'

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
  offset: 0,
};

const PokemonIndex = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  });

  if (loading) return (
    <DefaultLayout>
      <div>Loading..</div>
    </DefaultLayout>
  );

  if (error) return (
    <DefaultLayout>
      <div>Error.. {error}</div>
    </DefaultLayout>
  );
  
  return (
    <DefaultLayout>
      <PokemonList
          entries={data.pokemons.results || []}
        />
    </DefaultLayout>
  )
}

export default PokemonIndex
