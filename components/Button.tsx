/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'

import { createRippleEffect } from '../utils'


export interface IButtonProps {
  type?: 'primary' | 'secondary'
  onClick?: (event: any) => void
  href?: string
  leftIcon?: string
  rightIcon?: string
  iconSize?: string
  expanded?: boolean
  className?: string
  children?: React.ReactNode
}

const Button = ({ type, onClick, children }: IButtonProps) => {
  const handleOnClick = (event) => {
    createRippleEffect(event);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      onClick={handleOnClick}
      css={css`
        position: relative;
        overflow: hidden;
        transition: background 400ms;
        color: #fff;
        background-color: #6200ee;
        padding: 1rem 2rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        outline: 0;
        border: 0;
        border-radius: 0.25rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3); /* black with 30% opacity */
        cursor: pointer;
        text-align: center;
      `}
    >
      { children }
    </div>
  )
}

export default Button
