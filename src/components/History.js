import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import { HistData } from './HistData';

export default function History() {
  return (
    <Container maxWidth='lg'>
      <h1>経歴</h1>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{width: '80%'}}>
          {HistData.map((history) => (
            <Box sx={{display: 'flex', my: 3}}>
            <Typography fontSize={20} marginRight={2}>{history.Date}</Typography>
            <Typography fontSize={20}>{history.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
