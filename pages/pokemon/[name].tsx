/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client';
import DefaultLayout from '../../layout/Default'

const PokemonDetail = () => {
  const router = useRouter()
  const { name } = router.query

  const GET_POKEMON = gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        sprites {
          front_default
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
      }
    }
  `;

  const gqlVariables = {
    name: name
  }

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: gqlVariables,
  });

  console.warn('data', data)

  const detailPageContainer = css`
    width: 100%;
  `

  const overview = css`

  `

  return (
    <DefaultLayout>
      <div>
        { loading ?
          <div>Loading...</div> :
          error ?
          <div>Error! {error.message}</div> :
          <div css={detailPageContainer}>
            <section css={overview}>
              <div>Image</div>
              <div>Name</div>
              <div>Type</div>
            </section>
          </div>
        }
      </div>
    </DefaultLayout>
  )
}

export default PokemonDetail
