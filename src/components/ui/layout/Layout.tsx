import * as React from 'react';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="md"
        // minHeight is 100vh height minus header and footer heights
        sx={{ py: 2, minHeight: { xs: 'calc(100vh - 96px)', md: 'calc(100vh - 125px)' } }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
