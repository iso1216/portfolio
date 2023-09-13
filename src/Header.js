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
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ホーム" {...a11yProps(0)} />
          <Tab label="プロフィール" {...a11yProps(1)} />
          <Tab label="経歴" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}