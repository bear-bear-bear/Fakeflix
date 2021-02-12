/* modules */
import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../image/no-image.jpg';

/* css */
import './Info.css';

const Rating = ({ rating }) => {
  // rating: 0~10
  const starNum = Math.round(rating / 2);
  const stars = '★'.repeat(starNum);

  return <span className="info__rating">{stars}</span>;
};

const Genre = ({ genres }) => {
  return (
    <ul className="info__genres">
      {genres.map((genre, idx) => (
        <li key={idx} className="info__genre">
          {genre}
        </li>
      ))}
    </ul>
  );
};

const Desc = ({ desc }) => {
  return (
    <div className="info__desc">
      <p>{desc && `Official Trailer: ${desc}`}</p>
    </div>
  );
};

const Casts = ({ casts }) => {
  if (casts === undefined) return null;

  const Cast = ({ cast }) => {
    const { name, character_name: char_name, url_small_image: imgSRC } = cast;

    return (
      <li className="info__cast">
        <img src={imgSRC || noImage} alt=""></img>
        <p>{name}</p>
        <p>{char_name}</p>
      </li>
    );
  };

  return (
    <ul className="info__casts">
      {casts.map((cast, idx) => (
        <Cast key={idx} cast={cast} />
      ))}
    </ul>
  );
};

const Info = ({ coverImgSRC, title, year, genres, desc, rating, runtime, casts }) => {
  return (
    <article className="info">
      <section className="info__summary">
        <img className="info__cover" src={coverImgSRC || noImage} alt={title}></img>
        <section className="info__summary__text-wrap">
          <h1 className="info__title">{title}</h1>
          <Rating rating={rating} />
          <span className="info__year">{year}</span>
          {runtime !== 0 && <span className="info__runtime">{runtime}m</span>}
          <Genre genres={genres} />
        </section>
      </section>
      {desc && <Desc desc={desc} />}
      <Casts casts={casts} />
    </article>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  desc: PropTypes.string.isRequired,
  coverImgSRC: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  casts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Info;
