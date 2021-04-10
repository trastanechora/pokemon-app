/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import PokeballIcon from '../components/icons/PokeballIcon'
export interface INavbarProps {
  type?: 'primary' | 'secondary'
  onClick?: (event: any) => void
}

const Navbar = ({ onClick }: INavbarProps) => {
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

  const titleLink = css`
    font-weight: 700;
    font-size: 20px;
  `

  const leftMenuGroup = css`
    display: flex;
    padding-left: 40px;
    @media (max-width: 960px) {
      width: 100%;
      justify-content: center;
    }
  `

  const rightMenuGroup = css`
    padding-right: 40px;
    @media (max-width: 960px) {
      display: none;
    }
  `

  const iconWrapper = css`
    margin-top: 12px
  `

  return (
    <div
      css={navbarBody}
    >
      <div
        css={navbarContainer}
      >
        <div css={leftMenuGroup}>
          <PokeballIcon css={iconWrapper} color="white" />
          <a
            css={css`
              ${baseLink}
              ${titleLink}
            `}
          >
              Pokemon App
          </a>
        </div>
        <div css={rightMenuGroup}>
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
