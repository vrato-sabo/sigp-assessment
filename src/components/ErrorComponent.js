import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function ErrorComponent() {
  return (
    <div className='h-screen flex flex-col justify-center items-center uppercase'>
      <div className='text-9xl font-semibold'>404</div>
      <p className='py-3'>this page doesn&apos;t exist or is unavailable</p>
      <Link to='/'>
        <Button variant='contained' disableElevation>
          go to home page
        </Button>
      </Link>
    </div>
  );
}

export default ErrorComponent;
