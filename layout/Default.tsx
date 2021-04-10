/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar'
interface ILayoutProps {
  headerTitle?: string
  children?: React.ReactNode
}

const DefaultLayout: React.FC<ILayoutProps> = ({
  children
}) => {
  const router = useRouter()

  const back = () => {
    router.back();
  }

  return (
    <div css={css`
      margin: -8px;
    `}>
        <Navbar />
        <main css={css`
          padding: 64px;
        `}>
          {children}
        </main>
      <BottomNavbar />
    </div>
  )
}

export default DefaultLayout
