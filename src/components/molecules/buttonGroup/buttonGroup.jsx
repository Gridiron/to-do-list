import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttonGroup.module.scss';
import TextButton from '../../atoms/textButton/textButton';

const ButtonGroup = () => {
  return (
    <div className={styles.buttonGroup}>
      <div className={styles.buttonsInGroup}>
        <TextButton isActive={true}>All</TextButton>
      </div>
      <div className={styles.buttonsInGroup}>
        <TextButton>Active</TextButton>
      </div>
      <div className={styles.buttonsInGroup}>
        <TextButton>Completed</TextButton>
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default ButtonGroup;
