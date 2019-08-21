import React from 'react';
import PropTypes from 'prop-types';
import styles from './SetTimer.css';

function SetTimer({ type, addMinutes, subMinutes, minuteAmount }) {
  return (
    <section className={styles.SetTimer}>
      <p>{type} length</p>
      <div>
        <div>{minuteAmount}</div>
        <button name={type} onClick={addMinutes}>↟</button>
        <button name={type} onClick={subMinutes}>↡</button>
      </div>
    </section>
  );
}

SetTimer.propTypes = {
  type: PropTypes.string.isRequired,
  minuteAmount: PropTypes.number.isRequired,
  addMinutes: PropTypes.func.isRequired,
  subMinutes: PropTypes.func.isRequired,
};

export default SetTimer;
