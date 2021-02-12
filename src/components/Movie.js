/* modules */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* css */
import './Movie.css';

const Movie = ({ id, title, poster }) => {
  return (
    <Link
      className="movie"
      to={{
        pathname: '/movie-detail',
        state: { id },
      }}
    >
      <img src={poster} alt={title} title={title}></img>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
