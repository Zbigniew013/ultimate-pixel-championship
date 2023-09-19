import React from 'react';
import styles from './AppLayout.module.css';
import Margin from '../../assets/Margin.png';

export const AppLayout = ({ children }) => {
   return (
      <div className={styles.layout}>
         <img src={Margin} width={375} height={32} />
         {children}
         <img src={Margin} width={375} height={32} style={{ transform: 'rotate(180deg)' }} />
      </div>
   );
};
