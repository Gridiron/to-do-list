import React from 'react';
import styles from './checkBox.module.scss';

const CheckBox = ({ checkBoxValue, setCheckBoxValue }) => {
  const handleInputChange = (event) => {
    setCheckBoxValue(event.target.checked);
  };

  return (
    <div className={styles.customCheckBox}>
      <label>
        <input
          className={styles.checkBox}
          type="checkbox"
          checked={checkBoxValue}
          onChange={handleInputChange}
        />
        <span className={styles.checkMark}></span>
      </label>
    </div>
  );
};

export default CheckBox;
