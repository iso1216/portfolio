import * as React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Header({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
        <Tabs value={value} onChange={handleChange} aria-label="hometab"  >
          <Tab label="ホーム" {...a11yProps(0)} sx={{fontSize: 24}} />
          <Tab label="プロフィール" {...a11yProps(1)} sx={{fontSize: 24}} />
          <Tab label="製作物" {...a11yProps(2)} sx={{fontSize: 24}} />
          <Tab label="経歴" {...a11yProps(3)} sx={{fontSize: 24}} />
        </Tabs>
      </Box>
    </Box>
  );
}