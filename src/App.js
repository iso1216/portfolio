import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Box } from '@mui/material';
import { HashRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      
    },
    typography: {
      fontFamily: [
        'M PLUS 1 Code',
      ].join(','),
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main darkMode={darkMode} />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
