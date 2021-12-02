import { Link } from 'react-router-dom';

function Movie({ id, title, poster, year, type }) {
  return (
    <Link to={`/${id}`}>
      <div
        id={id}
        className='w-full flex flex-col justify-center items-center p-3 cursor-pointer relative '>
        <div className=' w-72 h-450 flex flex-col justify-center items-center rounded-xl hover:bg-gray-700 p-3 transform hover:scale-105 transition-all ease-out duration-200'>
          <div>
            {poster !== 'N/A' || !poster ? (
              <img src={poster} alt='' className=' max-h-96' />
            ) : (
              <div className=' h-360 flex justify-center items-center'>
                No image found
              </div>
            )}
          </div>

          <h1 className=' truncate w-full text-center font-semibold p-1'>
            {title}
          </h1>
          <div className='flex w-56 justify-between text-sm'>
            <span className=' pl-1'>{year}</span>
            <span className='capitalize pr-1'>{type}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
