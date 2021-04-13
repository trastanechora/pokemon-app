import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { StateProvider } from '../store';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      PokemonList: {
        fields: {
          results: offsetLimitPagination()
        }
      }
    }
  })
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <StateProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </StateProvider>
  </>
);

export default App;
