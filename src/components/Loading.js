/* modules */
import React from 'react';
import PropTypes from 'prop-types';

/* css */
import './Loading.css';

const Loading = () => {
  return (
    <article className="loader">
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
    </article>
  );
};

export default Loading;
