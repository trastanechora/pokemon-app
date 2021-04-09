/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'

import BurgerMenu from '../components/icons/BurgerMenu'


export interface INavbarProps {
  type?: 'primary' | 'secondary'
  onClick?: (event: any) => void
}

const Navbar = ({ onClick }: INavbarProps) => {
  const toggleMenu = () => {
    var drawer = document.getElementById("myLinks");
    if (drawer.style.height === "auto") {
      drawer.style.height = "0";
    } else {
      drawer.style.height = "auto";
    }
  };

  const navbarBody = css`
    overflow: hidden;
    background-color: #6200ee;
    position: relative;
    margin-bottom: 20px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    font-family: 'Roboto', sans-serif;
  `

  const baseLink = css`
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.1rem;
    display: block;
  `

  return (
    <div
      css={navbarBody}
    >
      <a
        css={css`
          ${baseLink};
          font-size: 1.5rem;
        `}>
        Pokemon App
      </a>
      <div
        id="myLinks"
        css={css`
          height: 0;
        `}
      >
        <a css={baseLink} href="#news">Pokemon List</a>
        <a css={baseLink} href="#contact">My Pokemon</a>
      </div>
      <a
        css={css`
          ${baseLink};
          display: block;
          position: absolute;
          right: 0;
          top: 0;
        `}
        href="#"
        onClick={toggleMenu}>
        <i><BurgerMenu color="white" /></i>
      </a>
    </div>
  )
}

export default Navbar
