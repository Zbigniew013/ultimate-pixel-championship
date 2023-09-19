import React from 'react';
import Button from '../../assets/Button.png';
import styles from './ChooseButton.module.css';

export const ChooseButton = () => {
   return (
      <div className={styles.button}>
         <img src={Button} width={263} height={64} />
      </div>
   );
};
