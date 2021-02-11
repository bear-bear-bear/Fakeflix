/* modules */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* css */
import './Movie.css';

const Movie = ({ title, year, summary, poster, genres }) => {
  return (
    <Link
      className="movie"
      to={{
        pathname: '/movie-detail',
        state: { title, year, summary, poster, genres },
      }}
    >
      <img src={poster} alt={title} title={title}></img>
      {/* <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, idx) => {
            return (
              <li key={idx} className="movie__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div> */}
    </Link>
  );
};

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
