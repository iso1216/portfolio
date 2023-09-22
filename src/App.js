import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Box } from '@mui/material';

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <Box>
      <Header setValue={setValue} />
      <Main value={value} />
      <Footer setValue={setValue} />
    </Box>
  );
}

export default App;
