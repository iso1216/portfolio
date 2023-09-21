import React from 'react';
import { Container, Typography, useMediaQuery } from '@mui/material';

export default function Home() {
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <Container maxWidth='md' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      {matches ? (
        <Typography variant="h2" sx={{ marginBottom: 2, textAlign: 'center' }}>
          Welcome to My Portfolio
        </Typography>
      ) : (
        <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center' }}>
          Welcome to My Portfolio
        </Typography>
      )}
    </Container>
  );
}
