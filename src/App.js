import Header from './components/Header';
import Movies from './components/Movies';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

function App() {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <div className=''>
      <Header />
      {isLoading ? (
        <div className='flex justify-center items-center h-60'>
          <CircularProgress />
        </div>
      ) : (
        <Movies />
      )}
    </div>
  );
}

export default App;
