/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { createRippleEffect } from '../utils'

export interface IListCardProps {
  type?: 'primary' | 'secondary'
  onClick?: (event: any) => void
  image?: string
}

const ListCard = ({ onClick }: IListCardProps) => {
  const handleOnClick = (event) => {
    createRippleEffect(event, '#6200ee');
  };

  const cardBody = css`
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    min-height: 200px;
    min-width: 100px;
    max-width: 200px;
    text-align: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  `

  return (
    <div
      css={cardBody}
      onClick={handleOnClick}
    >
      <img
        css={css`
        pointer-events: none
      `} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
      <h2 css={css`text-transform: capitalize;`}>ivysaur</h2>
    </div>
  )
}

export default ListCard
