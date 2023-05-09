import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

const Title = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};

Title.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Title;
