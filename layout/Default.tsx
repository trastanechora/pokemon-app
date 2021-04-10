/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useContext, useReducer } from 'react';
import { useRouter } from 'next/router';
import StoreContext from '../store/context';
import reducer from '../store/reducer';

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
  const initialState = useContext(StoreContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const back = () => {
    router.back();
  }

  const layoutWrapper = css`
    margin: -8px;
  `

  const contentWrapper = css`
    padding: 64px;
  `

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div css={layoutWrapper}>
          <Navbar />
          <main css={contentWrapper}>
            {children}
          </main>
        <BottomNavbar />
      </div>
    </StoreContext.Provider>
  )
}

export default DefaultLayout
