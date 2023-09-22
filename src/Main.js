import Home from './components/Home';
import Profile from './components/Profile';
import History from './components/History';
import Products from './components/Products';

function Main({value}) {
  const ViewChange = (value) => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <Profile />;
      case 2:
        return <Products />;
      case 3:
        return <History />;
      default:
        break;
    }
  }

  return (
    <main>
      {ViewChange(value)}
    </main>
  );
}

export default Main;
