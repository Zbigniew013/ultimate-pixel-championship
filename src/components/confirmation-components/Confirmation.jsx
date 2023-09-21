import React from 'react';
import styles from './Confirmation.module.css';

import { Title } from './../libs/Title';
import { AppLayout } from '../AppLayout';
import { Step } from '../libs/Step';
import image from '../../../assets/step_3.png';

export const Confirmation = () => {
   return (
      <div className={styles.container}>
         <AppLayout>
            <Title textColor="#DA8B14">Confirmation</Title>
            <Step src={image} />
         </AppLayout>
      </div>
   );
};
