import React from 'react';
import styles from './listFooter.module.scss';
import Paragraph from '../../atoms/paragraph/paragraph';
import TextButton from '../../atoms/textButton/textButton';
import ButtonGroup from '../buttonGroup/buttonGroup';

const ListFooter = ({ clearCompletedCallBack, itemsLeft, setFilterCallback }) => {
  return (
    <div className={styles.listFooter}>
      <div className={styles.leftoverContainer}>
        <Paragraph text={`${itemsLeft} items left`} />
      </div>
      <div className={styles.filterContainer}>
        <ButtonGroup activeButtonChangeCallback={setFilterCallback} />
      </div>
      <div className={styles.clearButtonContainer}>
        <TextButton buttonClickedHandler={clearCompletedCallBack}>Clear completed</TextButton>
      </div>
    </div>
  );
};

export default ListFooter;
