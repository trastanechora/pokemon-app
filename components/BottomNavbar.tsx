/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react'
import React from 'react'

import BurgerMenu from '../components/icons/BurgerMenu'
import HomeIcon from '../components/icons/HomeIcon'
import ListIcon from '../components/icons/ListIcon'
import MonsterIcon from '../components/icons/MonsterIcon'

export interface IBottomNavbarProps {
  type?: 'primary' | 'secondary'
  onClick?: (event: any) => void
}

const BottomNavbar = ({ onClick }: IBottomNavbarProps) => {
  const animateCirlce = keyframes`
    100% {
        transform: translate(-50%,-35px);
        opacity: 1;
    }
  `
  const animateRo = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
  `

  const navbarBody = css`
    list-style: none;
    height: 64px;
    background: #6200ee;
    display: flex;
    flex-direction: row;
    box-shadow: 0 15px 30px rgba(0,0,0,.2);
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    padding: 0;

    li:nth-child(1) a::after {
      content: 'Home';
    }

    li:nth-child(2) a::after {
      content: 'Pokemon List';
    }

    li:nth-child(3) a::after {
        content: 'My Pokemon';
    }
    @media (min-width: 960px) {
      display: none;
    }
  `

  const baseListItem = css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    a::before {
      content: '';
      width: 7px;
      height: 7px;
      background: white;
      display: block;
      border-radius: 100%;
      position: absolute;
      left: 50%;
      transform: translate(-50%,5px);
      opacity: 0;
    }
    a::after {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      color: white;
      display: block;
      transform-origin: center;
      transition: all 200ms ease-in-out;
    }
    a:hover::before {
      animation: ${animateCirlce} .5s 1 ease-in-out ;
    }
    a:hover svg {
      color: white;
      animation: ${animateRo} 0.2s 1 ease-in-out ;
    }
  `

  const baseLink = css`
    text-decoration: none;
    text-align: center;
    position: relative
  `

  return (
    <ul css={navbarBody}>
      <li css={baseListItem}><a href="#" css={baseLink}><HomeIcon color="white" /></a></li>
      <li css={baseListItem}><a href="#" css={baseLink}><ListIcon color="white" /></a></li>
      <li css={baseListItem}><a href="#" css={baseLink}><MonsterIcon color="white" /></a></li>
    </ul>
  )
}

export default BottomNavbar
