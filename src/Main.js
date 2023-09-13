import Home from './components/Home';
import Profile from './components/Profile';
import History from './components/History';
import Creation from './components/Creation';

function Main({value}) {
  const ViewChange = (value) => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <Profile />;
      case 2:
        return <Creation />;
      case 3:
        return <History />;
      default:
        break;
    }
  }

  return (
    <div>
      {ViewChange(value)}
    </div>
  );
}

export default Main;
