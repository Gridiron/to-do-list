import React from 'react';
import styles from './paragraph.module.scss';

const Paragraph = ({ text }) => {
  return <span className={styles.paragraph}>{text}</span>;
};

export default Paragraph;
