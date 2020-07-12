import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
};

const StyledPage = styled.div`
  background-color: white;
  color: ${({ theme: { black } }) => black};
`;

const Inner = styled.div`
  max-width: ${({ theme: { maxWidth } }) => maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
