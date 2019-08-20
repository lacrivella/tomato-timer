import React from 'react';
import PropTypes from 'prop-types';

function Control({ resetClick, startStopClick, startOrStop }) {
  return (
    <>
      <button onClick={startStopClick}>{startOrStop}</button>
      <button onClick={resetClick}>Reset</button>
    </>
  );
}

Control.propTypes = {
  resetClick: PropTypes.func.isRequired,
  startStopClick: PropTypes.func.isRequired,
  startOrStop: PropTypes.string.isRequired
};

export default Control;