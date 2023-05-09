import React from 'react';
import styles from './textButton.module.scss';

const TextButton = ({ children, isActive }) => {
  console.log(isActive);
  const className = `${styles.textButton} ${isActive ? styles.active : styles.notActive}`;
  console.log(className);
  return <span className={className}>{children}</span>;
};

export default TextButton;
