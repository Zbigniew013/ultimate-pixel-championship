import React from 'react';
import styles from './Title.module.css';

export const Title = ({ textColor, children }) => {
   return (
      <div className={styles.title}>
         <h3 style={{ color: textColor }}>{children}</h3>
      </div>
   );
};
