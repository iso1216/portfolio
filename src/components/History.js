import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import { HistData } from '../Data/HistData';

export default function History() {
  return (
    <Container maxWidth='lg'>
      <h1>経歴</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          {HistData.map((history, index) => (
            <Box key={index} sx={{"@media screen and (min-width:700px)": {my: 3}}}>
              <Box sx={{"@media screen and (min-width:700px)": {display: 'flex'}}}>
                <Typography sx={{"@media screen and (min-width:400px)": { fontSize: 20 }}} marginRight={2}>{history.Date}</Typography>
                <Typography fontSize={{"xs": '', "sm": 20}}>{history.name}</Typography>
              </Box>
              {history.detail ? <Typography fontSize={{"xs": 10, "sm": 15}} marginLeft={5}>*{history.detail}</Typography> : ''}
              {history.url ? <Typography component={'a'} fontSize={{"xs": 10, "sm": 12}} marginLeft={5} href={history.url} target='_blank' sx={{color: 'gray', wordBreak: 'break-all'}}>{history.url}</Typography> : ''}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
