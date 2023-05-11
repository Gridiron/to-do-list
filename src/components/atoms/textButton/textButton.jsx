import React from 'react';
import styles from './textButton.module.scss';

const TextButton = ({ children, isActive, buttonClickedHandler }) => {
  const onButtonClicked = () => {
    buttonClickedHandler(children);
  };
  const className = `${styles.textButton} ${isActive ? styles.active : styles.notActive}`;
  return (
    <span className={className} onClick={onButtonClicked}>
      {children}
    </span>
  );
};

export default TextButton;
