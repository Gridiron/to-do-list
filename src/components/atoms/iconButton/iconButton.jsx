import React from 'react';
import PropTypes from 'prop-types';
import styles from './iconButton.module.scss';

const IconButton = ({ icon }) => {
  return (
    <button className={styles.iconButton}>
      <i className={styles.icon}>{icon}</i>
    </button>
  );
};

IconButton.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default IconButton;
