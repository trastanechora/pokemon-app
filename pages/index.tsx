import DefaultLayout from '../layout/Default'
import { useQuery, gql } from '@apollo/client';
import PokemonList from '../components/PokemonList'

const Home = () => {
  return (
    <DefaultLayout headerTitle="Pokemon App">
      <PokemonList />
    </DefaultLayout>
  )
}

export default Home
