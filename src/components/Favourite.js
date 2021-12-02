import { TrashIcon, XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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
    // <div id={id} className='flex'>
    //   <Link className='w-full h-20 bg-gray-800 m-4 text-white' to={`/${id}`}>
    //     <div className=''>{title}</div>
    //   </Link>
    //   <div>
    //     <div className=''>
    //       <TrashIcon
    //         onClick={handleClickOpen}
    //         className='h-6 text-white right-2 cursor-pointer'
    //       />
    //     </div>
    // <Dialog
    //   open={open}
    //   onClose={handleClose}
    //   aria-labelledby='alert-dialog-title'
    //   aria-describedby='alert-dialog-description'>
    //   <DialogTitle id='alert-dialog-title'>
    //     {`Remove ${title} from your favourites list?`}
    //   </DialogTitle>
    //   <DialogContent>
    //     <DialogContentText id='alert-dialog-description'>
    //       {/* {`Are you sure you want to remove ${title} from you favourites list`} */}
    //     </DialogContentText>
    //   </DialogContent>
    //   <DialogActions>
    //     <Button onClick={handleClose}>No</Button>
    //     <Button onClick={removeFromFav} autoFocus>
    //       Yes
    //     </Button>
    //   </DialogActions>
    // </Dialog>
    //   </div>
    // </div>
    <div
      className='flex border-gray-600 border-t sm:w-640 sm:mx-auto sm:border-0 hover:bg-gray-700 p-3 transform hover:scale-105 transition-all ease-out duration-200'
      id={id}>
      <Link to={`/${id}`}>
        <div className=' '>
          <img src={poster} alt='' className='max-h-40 max-w-xs' />
        </div>
      </Link>
      <div className='flex flex-col pl-4 flex-1'>
        <div className='flex justify-end pr-2 pb-4'>
          <div className='w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full hover:bg-gray-300'>
            <TrashIcon
              onClick={handleClickOpen}
              className='h-6 text-white cursor-pointer'
            />
          </div>
        </div>
        <Link to={`/${id}`}>
          <span className='text-white text-xl break-words cursor-pointer bg-yellow-400'>
            {title}
          </span>
        </Link>
        <div className='flex text-gray-400'>
          <span className='px-1'>{year}</span>
          <span className='px-1'>{runtime}</span>
          <span className='px-1'>{rated}</span>
        </div>
        <div className='flex items-center text-gray-400'>
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
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {/* {`Are you sure you want to remove ${title} from you favourites list`} */}
          </DialogContentText>
        </DialogContent>
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
