import React from 'react';
import PropTypes from 'prop-types';
import styles from './textBox.module.scss';

const TextBox = ({ headerText }) => {
  return <h1 className={styles.header}>{headerText}</h1>;
};

TextBox.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default TextBox;
