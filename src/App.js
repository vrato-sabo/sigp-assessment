import { useEffect } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';

function App() {
  useEffect(() => {
    document.title = 'MovieDatabase';
  }, []);
  return (
    <div>
      <Header />
      <Movies />
    </div>
  );
}

export default App;
