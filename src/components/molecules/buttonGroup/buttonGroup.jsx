import React, { useState } from 'react';
import styles from './buttonGroup.module.scss';
import TextButton from '../../atoms/textButton/textButton';

const ButtonGroup = ({ activeButtonChangeCallback }) => {
  const [currentlyActive, SetCurrentlyActive] = useState('All');

  const handleClick = (value) => {
    activeButtonChangeCallback(value);
    SetCurrentlyActive(value);
  };

  const all = 'All';
  const completed = 'Completed';
  const active = 'Active';

  return (
    <div className={styles.buttonGroup}>
      <div className={styles.buttonsInGroup}>
        <TextButton isActive={currentlyActive === all} buttonClickedHandler={handleClick}>
          {all}
        </TextButton>
      </div>
      <div className={styles.buttonsInGroup}>
        <TextButton isActive={currentlyActive === completed} buttonClickedHandler={handleClick}>
          {completed}
        </TextButton>
      </div>
      <div className={styles.buttonsInGroup}>
        <TextButton isActive={currentlyActive === active} buttonClickedHandler={handleClick}>
          {active}
        </TextButton>
      </div>
    </div>
  );
};

export default ButtonGroup;
