/* modules */
import React from 'react';
import PropTypes from 'prop-types';

/* css */
import './Trailer.css';

const Trailer = ({ title, trailerCode }) => {
  const src = `https://www.youtube.com/embed/${trailerCode}?autoplay=1&mute=1`;
  const isTrailer = Boolean(trailerCode);

  return isTrailer ? (
    <iframe
      className="trailer"
      title={title}
      src={src}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : (
    <div className="trailer trailer--none"></div>
  );
};

Trailer.propTypes = {
  title: PropTypes.string.isRequired,
  trailerCode: PropTypes.string.isRequired,
};

export default Trailer;
