import React from 'react';
import styles from './title.module.scss';

const Title = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};

export default Title;
