/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useContext, useReducer } from 'react';
import { useRouter } from 'next/router';
import reducer from '../store/reducer';

import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';
interface ILayoutProps {
  headerTitle?: string;
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const layoutWrapper = css`
    margin: -8px;
  `;

  const contentWrapper = css`
    padding: 64px;
    @media (max-width: 600px) {
      padding: 64px 12px;
    }
  `;

  return (
    <div css={layoutWrapper}>
      <main css={contentWrapper}>{children}</main>
      <Navbar />
      <BottomNavbar />
    </div>
  );
};

export default DefaultLayout;
