import { Container } from '@mui/material';
import type { NextPage } from 'next';
import * as React from 'react';
import Maintenance from '../src/components/Maintenance';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Maintenance />
    </Container>
  );
};

export default Home;
