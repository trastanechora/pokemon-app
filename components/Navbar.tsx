/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'

import PokeballIcon from '../components/icons/PokeballIcon'
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
    position: fixed;
    top: 0;
    width: 100%;
  `

  const navbarContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: auto;
  `

  const baseLink = css`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
  `

  return (
    <div
      css={navbarBody}
    >
      <div
        css={navbarContainer}
      >
        <div css={css`display: flex`}>
          <PokeballIcon css={css`margin-top: 12px`} color="white" />
          <a
            css={css`
              ${baseLink}
              font-weight: 700;
              font-size: 20px;
            `}
          >
              Pokemon App
          </a>
        </div>
        <div>
          <a
            css={css`
              ${baseLink}
            `}
            href="/">Pokemon List
          </a>
          <a
            css={css`
              ${baseLink}
            `}
            href="/my-pokemon">My Pokemon
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
