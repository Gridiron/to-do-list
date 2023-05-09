import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkBox.module.scss';

const CheckBox = () => {
  return (
    <div className={styles.customCheckBox}>
      <label>
        <input className={styles.checkBox} type="checkbox" />
        <span className={styles.checkMark}></span>
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default CheckBox;
