import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Favourite from '../components/Favourite';
import Header from '../components/Header';

function Favourites() {
  const params = useParams();
  const [data, setData] = useState(
    JSON.parse(localStorage?.getItem('favourites'))
  );
  console.log(params);
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
          <div className='flex flex-col items-center justify-center mt-32'>
            <h1>
              Your favourites list <span>{data?.length}</span>
            </h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link to={'/'}>
              <button className='h-16 w-60 bg-yellow-400 rounded-full'>
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
