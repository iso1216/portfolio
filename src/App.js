import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Box>
        <Header />
        <Main />
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
