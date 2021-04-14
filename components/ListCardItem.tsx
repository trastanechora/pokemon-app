/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { createRippleEffect } from '../utils';
import { Pokemon } from '../types';

export interface IListCardItemProps {
  pokemonObject?: Pokemon;
  showOwned?: boolean;
}

const ListCardItem = ({ pokemonObject, showOwned }: IListCardItemProps) => {
  const router = useRouter();

  const handleOnClick = (event) => {
    createRippleEffect(event, '#f04f5a');
    if (showOwned) {
      router.push(`/pokemon/${pokemonObject.name}?uuid=${pokemonObject.uuid}`);
    } else {
      router.push(`/pokemon/${pokemonObject.name}`);
    }
  };

  useEffect(() => {
    router.prefetch('/pokemon/[name]', `/pokemon/${pokemonObject.name}`)
  }, [])

  const cardBody = css`
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    border-radius: 10px;
    width: 90%;
    text-align: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin: auto;
  `;

  const pokemonImage = css`
    pointer-events: none;
    width: 70%;
  `;

  const pokemonName = css`
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    pointer-events: none;
    font-size: 16px;
    font-size: 2vw;
    color: #404040;
    padding-left: 12px;
    padding-right: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 600px) {
      font-size: 4vw;
    }
  `;

  const chipSpan = css`
    color: white;
    background-color: #f44336;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    border-radius: 16px;
    font-size: 10px;
    height: 24px;
    margin: 8px;
    align-items: center;
    display: inline-flex;
    line-height: 20px;
    max-width: 100%;
    padding: 0 8px;
    vertical-align: middle;
    white-space: nowrap;
    margin-left: 0;
  `;

  const slideToBottom = css`
    margin-bottom: -16px;
  `;

  return (
    <div css={cardBody} onClick={handleOnClick}>
      <img
        loading="lazy"
        css={pokemonImage}
        src={showOwned ? pokemonObject.sprites.front_default : pokemonObject.image}
      />
      {showOwned ? (
        <div css={slideToBottom}>
          <span css={chipSpan}>{pokemonObject.name}</span>
        </div>
      ) : (
        ''
      )}
      <h2 css={pokemonName}>{showOwned ? pokemonObject.nickname : pokemonObject.name}</h2>
    </div>
  );
};

export default ListCardItem;
