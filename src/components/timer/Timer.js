import React from 'react';
import PropTypes from 'prop-types';

function Timer({ mode, time }) {
  return (
    <>
      <h2>{mode}</h2>
      <h2>{time}</h2>
    </>
  );
}

Timer.propTypes = {
  mode: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default Timer;
