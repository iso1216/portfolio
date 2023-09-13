import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Container } from '@mui/material';

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <Container sx={{ width: '80%' }}>
      <Header value={value} setValue={setValue} />
      <Main value={value} />
      <Footer />
    </Container>
  );
}

export default App;
