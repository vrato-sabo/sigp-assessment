import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import Movie from './Movie';

function Movies() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(2);
  const movies = useSelector((state) => state.fetchMovies.movies);
  const inputState = useSelector((state) => state.inputState.emptyString);
  const { REACT_APP_API_KEY } = process.env;
  const input = inputState;

  const fetchData = async () => {
    try {
      setPageNum((prevState) => prevState + 1);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${input}&page=${pageNum}&type=movie`
      );
      const data = await res.json();
      setData(Number(data.totalResults));
      items.length === 0
        ? setItems(data.Search)
        : setItems(items?.concat(data.Search));
    } catch (err) {
      console.log(err);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (movies.Error) {
    return (
      <div className='flex justify-center items-center text-3xl mt-10'>
        {movies.Error}
      </div>
    );
  }
  return (
    <InfiniteScroll
      dataLength={items?.length + 10}
      next={fetchData}
      hasMore={items?.length + 10 === data ? false : true}
      loader={null}
      endMessage={
        <div className='flex justify-center'>
          <button
            onClick={scrollToTop}
            className=' h-14 my-4 w-60 rounded-full bg-gray-600 font-bold cursor-pointer'>
            Press to scroll to the top
          </button>
        </div>
      }>
      <section className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {movies?.Search?.map(({ imdbID, Title, Poster, Year, Type }) => (
          <Movie
            key={imdbID}
            id={imdbID}
            title={Title}
            poster={Poster}
            year={Year}
            type={Type}
          />
        ))}
        {items?.map(({ imdbID, Title, Poster, Year, Type }) => (
          <Movie
            key={imdbID}
            id={imdbID}
            title={Title}
            poster={Poster}
            year={Year}
            type={Type}
          />
        ))}
      </section>
    </InfiniteScroll>
  );
}

export default Movies;
