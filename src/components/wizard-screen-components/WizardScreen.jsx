import React from 'react';
import styles from './WizardScreen.module.css';

import { ChooseButton } from '../libs/ChooseButton';
import { FighterName } from './FighterName';
import { FighterImage } from './FighterImage';
import { FighterStats } from './FighterStats';
import { Title } from './../libs/Title';
import { AppLayout } from '../AppLayout';
import { Step } from '../libs/Step';
import image from '../../../assets/step_1.png';

export const WizardScreen = () => {
   return (
      <div className={styles.container}>
         <AppLayout>
            <Title textColor="#DA8B14">Choose your fighter</Title>
            <Step src={image} />
            <FighterImage />
            <FighterName />
            <FighterStats />
            <ChooseButton />
         </AppLayout>
      </div>
   );
};
