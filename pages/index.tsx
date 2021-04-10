import DefaultLayout from '../layout/Default'
import { useQuery, gql } from '@apollo/client';
import ListCard from '../components/ListCard'

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

export const FetchPokemon = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  console.warn('Response from server', data);
  return <div>Success!</div>;
};

const Home = () => {
  return (
    <DefaultLayout headerTitle="Pokemon App">
      <ListCard />
    </DefaultLayout>
  )
}

export default Home
