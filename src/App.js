import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Box } from '@mui/material';

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={ value ? '' :  {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(/img/home.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      <Header setValue={setValue} />
      <Main value={value} />
      <Footer />
    </Box>
  );
}

export default App;
