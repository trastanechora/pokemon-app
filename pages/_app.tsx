import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

// const client = new ApolloClient({
//   uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
//   cache: new InMemoryCache({
//     typePolicies: {
//       PokemonList: {
//         fields: {
//           results: {
//             keyArgs: false,
//             merge(existing, incoming) {
//               // if (existing) {
//               //   console.warn('existing', existing)
//               //   console.warn('incoming', incoming)
//               //   const newObject = existing;
//               //   newObject.results = [...existing.results, ...incoming.results]
//               //   return newObject;
//               // }
//               console.warn('existing', existing)
//               console.warn('incoming', incoming)
//               return existing;
//             },
//           }
//         }
//       }
//     }
//   })
// });

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      PokemonList: {
        fields: {
          results: {
            // read(existing, incoming) {
            //   // A read function should always return undefined if existing is
            //   // undefined. Returning undefined signals that the field is
            //   // missing from the cache, which instructs Apollo Client to
            //   // fetch its value from your GraphQL server.
            //   console.warn('[typePolicies - read] existing', existing)
            //   console.warn('[typePolicies - read] incoming', incoming)
            //   return existing
            // },
            
            // keyArgs: [],
            // merge(existing, incoming, { args: { offset = 0 }}) {
            //   // const merged = existing ? existing.slice(0) : [];
            //   // for (let i = 0; i < incoming.length; ++i) {
            //   //   merged[offset + i] = incoming[i];
            //   // }
            //   // return merged;
            //   console.warn('existing', existing)
            //   console.warn('incoming', incoming)
            // },

            // keyArgs: false,
            merge(existing, incoming: any[], options) {
              if (existing) {
                
              }
              console.warn('[typePolicies - merge] existing', existing)
              console.warn('[typePolicies - merge] incoming', incoming)
              console.warn('[typePolicies - merge] options', options)
              return [...existing, ...incoming];
            },
          }
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