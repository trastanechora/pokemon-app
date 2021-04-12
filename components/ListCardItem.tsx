/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { createRippleEffect } from '../utils';

export interface IListCardItemProps {
  onClick?: (event: any) => void;
  id?: string;
  name?: string;
  image?: string;
}

const ListCardItem = ({ onClick, id, name, image }: IListCardItemProps) => {
  const router = useRouter();

  const handleOnClick = (event) => {
    createRippleEffect(event, '#f04f5a');
    router.push(`/pokemon/${name}`);
  };

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
    @media (max-width: 600px) {
      font-size: 4vw;
    }
  `;

  return (
    <div css={cardBody} onClick={handleOnClick}>
      <img css={pokemonImage} src={image} />
      <h2 css={pokemonName}>{name}</h2>
    </div>
  );
};

export default ListCardItem;
