import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
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

  // process.env.PUBLIC_URL は create-react-app がビルド時に
  // package.json の "homepage" フィールドに基づいて設定します。
  // 例: "homepage": "https://iso1216.github.io/portfolio" の場合、
  // process.env.PUBLIC_URL は "/portfolio" になります。
  const basename = process.env.PUBLIC_URL || "";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* basenameプロパティを設定 */}
      <Router basename={basename}>
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