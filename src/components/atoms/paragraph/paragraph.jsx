import React from 'react';
import PropTypes from 'prop-types';
import styles from './paragraph.module.scss';

const Paragraph = ({ text }) => {
  return <span className={styles.paragraph}>{text}</span>;
};

Paragraph.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Paragraph;
