import React from 'react';
import styles from './listItem.module.scss';
import CheckBox from '../../atoms/checkBox/checkBox';
import Title from '../../atoms/title/title';
import IconButton from '../../atoms/iconButton/iconButton';

const ListItem = ({ title, icon }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.checkBoxContainer}>
        <CheckBox />
      </div>
      <div className={styles.titleContainer}>
        <Title>{title}</Title>
      </div>
      <div className={styles.closeButtonContainer}>
        <IconButton icon={icon} />
      </div>
    </div>
  );
};

ListItem.propTypes = {};

export default ListItem;
