/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useQuery, gql } from '@apollo/client';
import ListCardItem from '../components/ListCardItem'

export interface IPokemonListProps {
  type?: 'primary' | 'secondary'
  onClick?: (event: any) => void
}

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
  limit: 20,
  offset: 0,
};

const PokemonList = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div css={css`
      display: flex;
      flex-wrap: wrap;
    `}>
      { data.pokemons.results.map((object, i) =>
        <div
          key={i}
          css={css`
            min-width: 30%;
            margin: auto;
            margin-bottom: 20px;
            @media (min-width: 960px) {
              min-width: 25%;
            }
            @media (max-width: 600px) {
              min-width: 50%;
            }
          `}>
          <ListCardItem name={object.name} image={object.image} />
        </div>
      )}
    </div>
  );
};

export default PokemonList
