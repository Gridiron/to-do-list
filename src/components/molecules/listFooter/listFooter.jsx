import React from 'react';
import PropTypes from 'prop-types';
import styles from './listFooter.module.scss';
import Paragraph from '../../atoms/paragraph/paragraph';
import TextButton from '../../atoms/textButton/textButton';
import ButtonGroup from '../buttonGroup/buttonGroup';

const ListFooter = () => {
  return (
    <div className={styles.listFooter}>
      <div className={styles.leftoverContainer}>
        <Paragraph text="5 items left" />
      </div>
      <div className={styles.filterContainer}>
        <ButtonGroup />
      </div>
      <div className={styles.clearButtonContainer}>
        <TextButton>Clear completed</TextButton>
      </div>
    </div>
  );
};

ListFooter.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default ListFooter;
