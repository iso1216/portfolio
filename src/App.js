import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Header setValue={setValue} />
      <Main value={value} />
      <Footer />
    </>
  );
}

export default App;
