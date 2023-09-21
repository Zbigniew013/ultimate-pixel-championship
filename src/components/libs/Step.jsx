import React from 'react';
import styles from './Step.module.css';

export const Step = ({ src }) => {
   return (
      <div className={styles.step}>
         <img src={src} width={146} height={24} />
      </div>
   );
};
