import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const Layout = ({ content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.backgroundTop}></div>
        <div className={styles.backgroundBottom}></div>
      </div>

      <div className={styles.content}>{content}</div>
    </div>
  );
};

Layout.propTypes = {
  content: PropTypes.element,
};

export default Layout;
