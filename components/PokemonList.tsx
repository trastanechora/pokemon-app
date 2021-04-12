/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import ListCardItem from '../components/ListCardItem'

export interface IPokemonListProps {
  entries?: any
  onLoadMore?: () => void
}

const PokemonList = ({ entries, onLoadMore }: IPokemonListProps) => {
  return (
    <div css={css`
      display: flex;
      flex-wrap: wrap;
    `}>
      { entries.map((object, i) =>
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
