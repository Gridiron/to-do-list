import React from 'react';
import styles from './textBox.module.scss';

const TextBox = ({ textValue, setTextValue }) => {
  const handleInputChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <input
      className={styles.customInput}
      type="text"
      placeholder="Start typing"
      value={textValue}
      onChange={handleInputChange}
    />
  );
};

export default TextBox;
