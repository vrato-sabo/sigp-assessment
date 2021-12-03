import { useState } from 'react';
import { Link } from 'react-router-dom';
import Favourite from '../components/Favourite';
import Header from '../components/Header';

function Favourites() {
  const [data, setData] = useState(
    JSON.parse(localStorage?.getItem('favourites'))
  );

  return (
    <>
      <Header />
      <div className='flex flex-col justify-center mt-4'>
        {data?.length !== 0 ? (
          data?.map(
            ({ Title, Poster, imdbID, Year, imdbRating, Runtime, Rated }) => (
              <Favourite
                key={imdbID}
                id={imdbID}
                title={Title}
                poster={Poster}
                year={Year}
                imdbRating={imdbRating}
                runtime={Runtime}
                rated={Rated}
                data={data}
                setData={setData}
              />
            )
          )
        ) : (
          <div className='flex flex-col items-center justify-center mt-32 uppercase'>
            <h1 className='text-3xl mb-10'>Your favourites list is empty</h1>
            <Link to={'/'}>
              <button className='h-16 w-64 bg-activePink text-white rounded-full uppercase'>
                Start your favourites list
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Favourites;
