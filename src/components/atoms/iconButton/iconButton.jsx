import React from 'react';
import styles from './iconButton.module.scss';

const IconButton = ({ icon, buttonClickedHandler }) => {
  const onButtonClicked = () => {
    buttonClickedHandler();
  };

  return (
    <button className={styles.iconButton} onClick={onButtonClicked}>
      <i className={styles.icon}>{icon}</i>
    </button>
  );
};

export default IconButton;
