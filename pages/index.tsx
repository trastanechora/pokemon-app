import DefaultLayout from '../layout/Default'
import Button from '../components/Button'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
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
    `
  })
  .then(result => console.warn(result));


const Home = () => {
  return (
    <ApolloProvider client={client}>
      <DefaultLayout headerTitle="Pokemon App">
        <Button>Test Button</Button>
      </DefaultLayout>
    </ApolloProvider>
  )
}

export default Home
