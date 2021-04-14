/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import PokeballIcon from '../components/icons/PokeballIcon';
import BackIcon from '../components/icons/BackIcon';
import { createRippleEffect } from '../utils';

const Navbar = () => {
  const router = useRouter();

  const handleOnClick = (event) => {
    createRippleEffect(event, 'white');
    router.back();
  };

  const navbarBody = css`
    overflow: hidden;
    background-color: #f04f5a;
    position: fixed;
    top: 0;
    width: 100%;
  `;

  const navbarContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: auto;
  `;

  const baseLink = css`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
  `;

  const titleLink = css`
    font-weight: 700;
    font-size: 20px;
  `;

  const leftMenuGroup = css`
    display: flex;
    padding-left: 40px;
    @media (max-width: 960px) {
      width: 100%;
      justify-content: center;
      padding-left: 0;
    }
  `;

  const rightMenuGroup = css`
    padding-right: 40px;
    @media (max-width: 960px) {
      display: none;
    }
  `;

  const iconWrapper = css`
    margin-top: 12px;
  `;

  const backIcon = css`
    pointer-events: none;
  `;

  const backButton = css`
    position: absolute;
    overflow: hidden;
    cursor: pointer;
    width: 52px;
    height: 40px;
    left: 0;
    top: 0;
    text-align: center;
    padding-top: 12px;
    @media (min-width: 960px) {
      display: none;
    }
  `;

  return (
    <div css={navbarBody}>
      <div css={navbarContainer}>
        <div css={leftMenuGroup}>
          <div css={backButton} onClick={handleOnClick}>
            <BackIcon css={backIcon} color="white" />
          </div>
          <PokeballIcon css={iconWrapper} color="white" />
          <Link href="/">
            <a
              css={css`
                ${baseLink}
                ${titleLink}
              `}
              >
                Pokemon App
            </a>
          </Link>
        </div>
        <div css={rightMenuGroup}>
          <Link href="/pokemon">
            <a
              css={css`
                ${baseLink}
              `}
            >
                Pokemon List
            </a>
          </Link>
          <Link href="/my-pokemon">
          <a
            css={css`
              ${baseLink}
            `}
            >
              My Pokemon
          </a>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
