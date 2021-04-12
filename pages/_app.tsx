import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { offsetLimitPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      PokemonList: {
        fields: {
          // results: {
          //   keyArgs: false,
          //   merge(existing, incoming: any[], options) {
          //     if (!existing) return incoming;
          //     console.warn('[typePolicies - merge] existing', existing)
          //     console.warn('[typePolicies - merge] incoming', incoming)
          //     console.warn('[typePolicies - merge] options', options)
          //     // console.warn('Total data', [...existing, ...incoming]);
          //     return [...existing, ...incoming];
          //   },

          //   // merge: true

          //   // merge(existing: any, incoming: any, options) {
          //   //   if (!incoming) return existing
          //   //   if (!existing) return incoming // existing will be empty the first time 

          //   //   let result = [...existing.pokemons.results, ...incoming.pokemons.results];
          //   //   return result
          //   // },

          //   // ...offsetLimitPagination(),
          //   // read(existing, { args }) {
          //   //   // Implement here
          //   //   console.warn('existing', existing)
          //   //   console.warn('args', args)
          //   //   return existing
          //   // }
          // }
          results: offsetLimitPagination()
        }
      }
    }
  })
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </>
)

export default App