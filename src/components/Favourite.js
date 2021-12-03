import { TrashIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

function Favourite({
  title,
  poster,
  id,
  data,
  setData,
  year,
  runtime,
  imdbRating,
  rated,
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const removeFromFav = () => {
    const newFav = data?.filter((movie) => movie.imdbID !== id);

    setData(window.localStorage.setItem('favourites', JSON.stringify(newFav)));
    setData(newFav);
    setOpen(false);
  };
  return (
    <div
      className='flex sm:w-640 sm:mx-auto hover:bg-activeGray p-3 transform hover:scale-105 transition-all ease-out duration-200'
      id={id}>
      <Link to={`/${id}`}>
        <div className=' '>
          <img src={poster} alt='' className='max-h-40 max-w-xs' />
        </div>
      </Link>
      <div className='flex flex-col pl-4 flex-1'>
        <div className='flex justify-end pr-2 pb-4'>
          <div
            onClick={handleClickOpen}
            className='w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-lightGray'>
            <TrashIcon className='h-6' />
          </div>
        </div>
        <Link to={`/${id}`}>
          <span className='text-xl break-words cursor-pointer'>{title}</span>
        </Link>
        <div className='flex text-gray-800'>
          <span className='px-1'>{year}</span>
          <span className='px-1'>{runtime}</span>
          <span className='px-1'>{rated}</span>
        </div>
        <div className='flex items-center text-gray-800'>
          <StarIcon className='h-4 text-yellow-400' />
          <span>{imdbRating}</span>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {`Remove ${title} from your favourites list?`}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={removeFromFav} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Favourite;
