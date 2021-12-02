import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as SoldiStar } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Header from '../components/Header';

function MovieDetail() {
  const params = useParams();
  const [favourites, setFavourites] = useLocalStorage('favourites', []);
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          `http://omdbapi.com/?apikey=56873f9e&i=${params.imdbID}`
        );
        const data = await res.json();
        console.log(data, 'data in detail');
        setData(data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [params]);

  const filter = favourites.filter((movie) => movie?.imdbID === data?.imdbID);

  const addMovieToFav = (e) => {
    e.preventDefault();
    if (filter.length === 0) {
      setFavourites([...favourites, data]);
    }
  };
  const removeMovieFromFav = (e) => {
    e.preventDefault();
    setFavourites([
      ...favourites.filter((movie) => movie?.imdbID !== data?.imdbID),
    ]);
  };
  if (data?.Error === 'Incorrect IMDb ID.' || data?.Response === 'False') {
    return (window.location = '/');
  }
  return (
    <>
      <Header />
      <div className='bg-gray-800 text-white p-3 border-gray-300 border-t sm:max-w-sm sm:mx-auto sm:border-0'>
        <div className='flex justify-end'>
          {filter.length === 0 ? (
            <button onClick={addMovieToFav}>
              <StarIcon className='h-7 right-2 top-2 cursor-pointer' />
            </button>
          ) : (
            <button onClick={removeMovieFromFav}>
              <SoldiStar className='h-7 right-2 top-2 cursor-pointer' />
            </button>
          )}
        </div>
        <div className=''>
          <h1 className=' font-semibold text-3xl'>{data?.Title}</h1>
          <div>
            <span className='px-1'>{data?.Year}</span>
            <span className='px-1'>{data?.Rated}</span>
            <span className='px-1'>{data?.Runtime}</span>
          </div>
        </div>
        <div className='flex justify-center my-3'>
          {data?.Poster !== 'N/A' || !data?.Poster ? (
            <img src={data?.Poster} alt='' className=' max-h-96' />
          ) : (
            <div className='h-96 flex justify-center items-center'>
              No image found
            </div>
          )}
        </div>
        <div className='py-3'>
          {data?.Genre.split(',').map((genre, i) => (
            <button
              key={genre + i}
              className=' py-1 px-3 mx-2 border border-white rounded-full hover:bg-opacity-10 hover:bg-white'>
              {genre}
            </button>
          ))}
        </div>
        <div>{data?.Plot}</div>
        <div className='flex my-2'>
          <SoldiStar className='h-6 text-yellow-300' />
          <span>
            {data?.imdbRating}
            <span className='text-gray-500'>/10</span>
          </span>
        </div>
        <div className='flex flex-col space-y-1'>
          <p>
            <span className='pr-1'>Writer:</span>
            {data?.Writer}
          </p>
          <p>
            <span className='pr-1'>Director:</span>
            {data?.Director}
          </p>
          <p>
            <span className='pr-1'>Actors:</span>
            {data?.Actors}
          </p>
          <p>
            <span className='pr-1'>BoxOffice:</span>
            {data?.BoxOffice}
          </p>
          <p>
            <span className='pr-1'>Awards:</span>
            {data?.Awards}
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
