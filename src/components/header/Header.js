import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import tomato from '../../assets/tomato.png';

function Header({ title }) {
  return (
    <header className={styles.Header}>
      <h1>{title}</h1>
      <span><img src={tomato} /></span>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
