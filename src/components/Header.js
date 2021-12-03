import { HomeIcon, SearchIcon, StarIcon } from '@heroicons/react/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { inputActions } from '../store/input-slice';
import { getMoviesFetch } from '../store/fetch-slice';

function Header() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage?.getItem('favourites'))
  );
  const [redirectHome, setRedirectHome] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const input = inputRef?.current?.value;

    try {
      if (input === undefined || input === null || input === '') return;
      dispatch(getMoviesFetch({ input, pageNum: 1 }));
      dispatch(inputActions.setInputState(input));
      setRedirectHome(window.location.pathname === '/' ? false : true);
    } catch (err) {
      console.log(err);
    }
    inputRef.current.value = '';
  };

  useEffect(() => {
    setFavourites(JSON.parse(localStorage?.getItem('favourites')));
  }, [localStorage.favourites]);
  return (
    <header className='flex justify-between bg-darkGray items-center md:border-b md:border-gray-300 md:justify-center md:space-x-40'>
      <Link to='/'>
        <HomeIcon className='h-8 ml-2 text-white' />
      </Link>
      {redirectHome && <Navigate to='/' />}
      <div className=' mt-1 relative p-3 rounded-md'>
        <div
          onClick={submitHandler}
          className='absolute inset-y-0 pl-3 flex items-center'>
          <SearchIcon className='h-5 w-5 text-gray-500 cursor-pointer' />
        </div>
        <form action='submit' onSubmit={submitHandler} className='md:w-80'>
          <input
            ref={inputRef}
            className=' block w-full text-gray-800 pl-10 sm:text-xl rounded-md'
            type='text'
            placeholder='Search'
            autoFocus={true}
          />
        </form>
      </div>
      <Link to='/favourites'>
        {favourites.length !== 0 ? (
          <SolidStarIcon className='h-8 mr-2 text-activePink' />
        ) : (
          <StarIcon className='h-8 mr-2 text-activePink' />
        )}
      </Link>
    </header>
  );
}

export default Header;
