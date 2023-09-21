import React from 'react';
import styles from './AppLayout.module.css';
import { Margin } from './libs/Margin';

export const AppLayout = ({ children }) => {
   return (
      <div className={styles.layout}>
         <Margin />
         {children}
         <Margin transform="rotate(180deg)" />
      </div>
   );
};
