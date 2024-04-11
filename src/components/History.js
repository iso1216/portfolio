import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import { HistData } from '../Data/HistData';

export default function History({ darkMode }) {
  return (
    <Container maxWidth='lg'>
      <h1>経歴</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb:2 }}>
        <Box>
          {HistData.map((history, index) => (
            <Box key={index} sx={{
              "@media screen and (min-width:700px)": {
                pb: 2,
                mb: 0.3,
                mt: 0,
                pt: 0,
                pl: 2,
                position: 'relative',
                '::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 9,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: darkMode ? "#c1c5c2" : 'gray',
                  transform: 'translateX(-50%)', // X軸に沿って中央に移動
                },
                '::after': {
                  content: '""',
                  position: 'absolute',
                  left: -0.5, // ボーダーの太さに応じて調整
                  top: 25, // ボーダーの開始位置を10px下げる
                  height: 'calc(100% - 20px)', // ボーダーの高さを調整して全体の高さから10pxを引く
                  borderLeft: '2px solid',
                  borderColor: darkMode ? "#c1c5c2" : 'gray',
                }
              }
            }}>
              <Box sx={{"@media screen and (min-width:700px)": {display: 'flex'}}}>
                <Typography sx={{"@media screen and (min-width:400px)": { fontSize: 20 }}} marginRight={2}>{history.Date}</Typography>
                <Typography fontSize={{"xs": '', "sm": 20}}>{history.name}</Typography>
              </Box>
              {history.detail ? <Typography fontSize={{"xs": 10, "sm": 15}} marginLeft={5} sx={{ whiteSpace: 'pre-line' }}>{history.detail}</Typography> : ''}
              {history.url ? <Typography component={'a'} fontSize={{"xs": 10, "sm": 12}} marginLeft={5} href={history.url} target='_blank' sx={{color: darkMode ? "white" : 'gray', wordBreak: 'break-all'}}>{history.url}</Typography> : ''}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
