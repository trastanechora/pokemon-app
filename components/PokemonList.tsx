/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import ListCardItem from '../components/ListCardItem';
import { Pokemon } from '../types';

export interface IPokemonListProps {
  entries?: Pokemon[];
  showOwned?: boolean;
}

const PokemonList = ({ entries, showOwned }: IPokemonListProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}>
      {entries.map((object, i) => (
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
          <ListCardItem pokemonObject={object} showOwned={showOwned} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
