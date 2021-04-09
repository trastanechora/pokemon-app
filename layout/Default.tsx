/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'
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
        <main>
          {children}
        </main>
    </div>
  )
}

export default DefaultLayout
