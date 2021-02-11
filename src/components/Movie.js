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
