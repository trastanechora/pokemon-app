import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </>
)

export default App