import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../atoms/header/header';
import SearchBar from '../../molecules/searchBar/searchBar';
import ListFooter from '../../molecules/listFooter/listFooter';
import ListItem from '../../molecules/listItem/listItem';
import Paragraph from '../../atoms/paragraph/paragraph';
import styles from './toDoList.module.scss';
import { FaTimes } from 'react-icons/fa';

const ToDoList = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <Header headerText="TODO" />
      </div>

      <div className={styles.searchBarContainer}>
        <SearchBar title="Currently typing  " />
      </div>

      <div>
        <div className={styles.listItemContainer}>
          <ListItem title="Complete online JavaScript course" icon={<FaTimes />} />
        </div>
        <div className={styles.listItemContainer}>
          <ListItem title="Jog around the park 3x" icon={<FaTimes />} />
        </div>
        <div className={styles.listItemContainer}>
          <ListItem title="10 minutes meditation" icon={<FaTimes />} />
        </div>
        <div className={styles.listItemContainer}>
          <ListItem title="Read 1 hour" icon={<FaTimes />} />
        </div>
        <div className={styles.listItemContainer}>
          <ListItem title="Pick up groceries" icon={<FaTimes />} />
        </div>
        <div className={styles.listItemContainer}>
          <ListItem title="Complete Todo App on Frontend Mentor" icon={<FaTimes />} />
        </div>

        <div className={styles.listFooterContainer}>
          <ListFooter />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Paragraph text="Drag and drop to reorder list" />
      </div>
    </div>
  );
};

ToDoList.propTypes = {
  header: PropTypes.element,
  mainContent: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default ToDoList;
