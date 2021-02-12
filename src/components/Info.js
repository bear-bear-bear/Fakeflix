/* modules */
import React from 'react';
import PropTypes from 'prop-types';

/* css */
import './Info.css';

const Info = ({
  title,
  genres,
  desc,
  backImgPath,
  coverImgPath,
  rating,
  runtime,
  casts,
  trailer,
}) => {
  return (
    // temp code
    <article className="detail__info-wrap">
      <p>{title}</p>
      {genres.map((genre, idx) => (
        <p key={idx}>{genre}</p>
      ))}
      <p>{desc}</p>
      <p>{backImgPath}</p>
      <p>{coverImgPath}</p>
      <p>{rating}</p>
      <p>{runtime}</p>
      {casts.map((cast, idx) => (
        <p key={idx}>{cast.name}</p>
      ))}
      <p>{trailer}</p>
    </article>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  desc: PropTypes.string.isRequired,
  backImgPath: PropTypes.string.isRequired,
  coverImgPath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  casts: PropTypes.arrayOf(PropTypes.object).isRequired,
  trailer: PropTypes.string.isRequired,
};

export default Info;
