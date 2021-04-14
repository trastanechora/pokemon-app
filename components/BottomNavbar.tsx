/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createRippleEffect } from '../utils';
import HomeIcon from '../components/icons/HomeIcon';
import ListIcon from '../components/icons/ListIcon';
import MonsterIcon from '../components/icons/MonsterIcon';

const BottomNavbar = () => {
  const router = useRouter();

  const handleOnClick = (event, to) => {
    createRippleEffect(event, 'white');
    router.push(to);
  };

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/pokemon');
    router.prefetch('/my-pokemon');
    router.prefetch('/my-pokemon');
    router.prefetch('/my-pokemon/action');
  }, []);

  const animateCirlce = keyframes`
    100% {
        transform: translate(-50%,-35px);
        opacity: 1;
    }
  `;
  const animateRo = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
  `;

  const navbarBody = css`
    list-style: none;
    height: 64px;
    background: #f04f5a;
    display: flex;
    flex-direction: row;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    padding: 0;

    li:nth-of-type(1) a::after {
      content: 'Home';
    }

    li:nth-of-type(2) a::after {
      content: 'Pokemon List';
    }

    li:nth-of-type(3) a::after {
      content: 'My Pokemon';
    }
    @media (min-width: 960px) {
      display: none;
    }
  `;

  const baseListItem = css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    a::before {
      content: '';
      width: 7px;
      height: 7px;
      background: white;
      display: block;
      border-radius: 100%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 5px);
      opacity: 0;
    }
    a::after {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      color: white;
      display: block;
      transform-origin: center;
      transition: all 200ms ease-in-out;
      @media (max-width: 600px) {
        font-size: 3vw;
      }
    }
    a:hover::before {
      animation: ${animateCirlce} 0.5s 1 ease-in-out;
    }
    a:hover svg {
      color: white;
      animation: ${animateRo} 0.2s 1 ease-in-out;
    }
  `;

  const baseLink = css`
    text-decoration: none;
    text-align: center;
    position: relative;
  `;

  return (
    <ul css={navbarBody}>
      <li css={baseListItem} onClick={(event) => handleOnClick(event, '/')}>
        <a css={baseLink} role="bottom-navigation-button">
          <HomeIcon color="white" />
        </a>
      </li>
      <li css={baseListItem} onClick={(event) => handleOnClick(event, '/pokemon')}>
        <a css={baseLink} role="bottom-navigation-button">
          <ListIcon color="white" />
        </a>
      </li>
      <li css={baseListItem} onClick={(event) => handleOnClick(event, '/my-pokemon')}>
        <a css={baseLink} role="bottom-navigation-button">
          <MonsterIcon color="white" />
        </a>
      </li>
    </ul>
  );
};

export default BottomNavbar;
