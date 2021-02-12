/* modules */
import React from 'react';
import PropTypes from 'prop-types';

/* css */
import './Info.css';

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

const Picture = ({ src, name }) => {
  const className = 'info__' + name;

  return <img src={src} alt={name} className={className}></img>;
};

const Casts = ({ casts }) => {
  const Cast = ({ cast }) => {
    const { name, character_name: char_name, url_small_image: imgSRC } = cast;

    return (
      <li className="info__cast">
        <img src={imgSRC} alt={name}></img>
        <p>name: {name}</p>
        <p>character: {char_name}</p>
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

const Trailer = ({ title, code }) => {
  const src = `https://www.youtube.com/embed/${code}?autoplay=1&mute=1`;

  return (
    <iframe
      className="detail__trailer"
      title={title}
      width="560"
      height="315"
      src={src}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

const Info = ({
  title,
  year,
  genres,
  desc,
  backImgSRC,
  coverImgSRC,
  rating,
  runtime,
  casts,
  trailerCode,
}) => {
  return (
    // temp code
    <article className="info">
      <h1 className="info__title">{title}</h1>
      <p className="info__rating">{rating}</p>
      <p className="info__year">{year}</p>
      <Genre genres={genres} />
      <p className="info__runtime">{runtime}m</p>
      <p className="info__desc">{desc}</p>
      <Picture src={backImgSRC} name="back-image" />
      <Picture src={coverImgSRC} name="cover-image" />
      <Casts casts={casts} />
      <Trailer title={title} code={trailerCode} />
    </article>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  desc: PropTypes.string.isRequired,
  backImgSRC: PropTypes.string.isRequired,
  coverImgSRC: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  casts: PropTypes.arrayOf(PropTypes.object).isRequired,
  trailerCode: PropTypes.string.isRequired,
};

export default Info;
