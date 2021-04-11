/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import DefaultLayout from '../../layout/Default'
import PokemonList from '../../components/PokemonList'

const PokemonIndex = () => {
  return (
    <DefaultLayout headerTitle="Pokemon App">
      <PokemonList />
    </DefaultLayout>
  )
}

export default PokemonIndex
