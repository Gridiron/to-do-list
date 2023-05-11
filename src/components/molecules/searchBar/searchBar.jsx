import React, { useState } from 'react';
import styles from './searchBar.module.scss';
import CheckBox from '../../atoms/checkBox/checkBox';
import TextBox from '../../atoms/textBox/textBox';

const SearchBar = ({ callBack }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [title, setTitle] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      callBack(title, isCompleted);
      setTitle('');
      setIsCompleted(false);
    }
  };

  return (
    <div className={styles.seachBarContainer} onKeyDown={handleKeyDown}>
      <div className={styles.checkBoxContainer}>
        <CheckBox checkBoxValue={isCompleted} setCheckBoxValue={setIsCompleted} />
      </div>
      <div className={styles.titleContainer}>
        <TextBox textValue={title} setTextValue={setTitle} />
      </div>
    </div>
  );
};

export default SearchBar;
