import React from 'react';
import styles from './Booking.module.css';

import { Title } from './../libs/Title';
import { AppLayout } from '../AppLayout';
import { Step } from '../libs/Step';
import image from '../../../assets/step_2.png';

export const Booking = () => {
   return (
      <div className={styles.container}>
         <AppLayout>
            <Title textColor="#DA8B14">Booking details</Title>
            <Step src={image} />
         </AppLayout>
      </div>
   );
};
