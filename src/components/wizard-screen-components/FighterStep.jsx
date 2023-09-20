import React from 'react';
import Step from '../../../assets/step_1.png';
import styles from './FighterStep.module.css';

export const FighterStep = () => {
   return (
      <div className={styles.step}>
         <img src={Step} width={146} height={24} />
      </div>
   );
};
