/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';

import { createRippleEffect } from '../utils';

export interface IButtonProps {
  onClick?: (event: any) => void;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ onClick, children, className }: IButtonProps) => {
  const handleOnClick = (event) => {
    createRippleEffect(event, 'white');
    if (onClick) {
      onClick(event);
    }
  };

  const baseButton = css`
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: #fff;
    background-color: #f04f5a;
    padding: 1rem 2rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-align: center;
    display: inline-block;
  `;

  return (
    <div onClick={handleOnClick} css={baseButton} className={className} role="button">
      {children}
    </div>
  );
};

export default Button;
