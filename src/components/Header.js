import { HomeIcon, SearchIcon, StarIcon } from '@heroicons/react/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { dataActions } from '../store/data-slice';
import { inputActions } from '../store/input-slice';
import { loadingActions } from '../store/loading-slice';
import { getMoviesFetch } from '../store/fetch-slice';

function Header() {
  const [redirectHome, setRedirectHome] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.fetchMovies.movies);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const input = inputRef?.current?.value;
    try {
      if (input === undefined || input === null || input === '') return;
      const { REACT_APP_API_KEY } = process.env;
      dispatch(getMoviesFetch({ input, pageNum: 1 }));
      dispatch(inputActions.setInputState(input));
      setRedirectHome(window.location.pathname === '/' ? false : true);
    } catch (err) {
      console.log(err);
    }
    inputRef.current.value = '';
  };
  console.log(movies, 'movies form header');
  return (
    <header className='flex justify-between bg-gray-100 items-center md:border-b md:border-gray-300 md:justify-center md:space-x-40'>
      <Link to='/'>
        <HomeIcon className='h-8 ml-2 text-gray-800' />
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
          />
        </form>
      </div>
      <Link to='/favourites'>
        <SolidStarIcon className='h-8 mr-2 text-gray-800' />
      </Link>
    </header>
  );
}

export default Header;
