import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchBar.module.scss';
import CheckBox from '../../atoms/checkBox/checkBox';
import Title from '../../atoms/title/title';

const SearchBar = ({ title }) => {
  return (
    <div className={styles.seachBarContainer}>
      <div className={styles.checkBoxContainer}>
        <CheckBox />
      </div>
      <div className={styles.titleContainer}>
        <Title>{title}</Title>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default SearchBar;
