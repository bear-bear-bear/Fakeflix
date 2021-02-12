/* modules */
import React from 'react';
import PropTypes from 'prop-types';

/* css */
import './Loading.css';

const Loading = ({ msg }) => {
  return (
    <div className="loader">
      <p className="loader__text">{msg}</p>
    </div>
  );
};

Loading.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Loading;
