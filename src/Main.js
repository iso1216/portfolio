import Home from './components/Home';
import Profile from './components/Profile';
import History from './components/History';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';

function Main({ darkMode }) {
  return (
    <main>
      <Routes>
        {/* basenameが "/portfolio" の場合、実際のURLは /portfolio/ になる */}
        <Route path="/" element={<Home />} /> 
        {/* basenameが "/portfolio" の場合、実際のURLは /portfolio/profile になる */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/history" element={<History  darkMode={darkMode} />} />
      </Routes>
    </main>
  );
}
export default Main;