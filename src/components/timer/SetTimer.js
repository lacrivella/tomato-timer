import React from 'react';
import PropTypes from 'prop-types';

function SetTimer({ type, addMinutes, subMinutes, minuteAmount }) {
  return (
    <section>
      <p>{type} Length</p>
      <div>
        <div>{minuteAmount}</div>
        <button onClick={addMinutes}>↟</button>
        <button onClick={subMinutes}>↡</button>
      </div>
    </section>
  );
}

SetTimer.propTypes = {
  type: PropTypes.string.isRequired,
  minuteAmount: PropTypes.string.isRequired,
  addMinutes: PropTypes.func.isRequired,
  subMinutes: PropTypes.func.isRequired,
};

export default SetTimer;
