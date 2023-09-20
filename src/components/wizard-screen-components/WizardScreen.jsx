import React from 'react';
import styles from './WizardScreen.module.css';
import Margin from '../../../assets/Margin.png';

import { ChooseButton } from '../ChooseButton';
import { FighterName } from './FighterName';
import { FighterImage } from './FighterImage';
import { FighterStep } from './FighterStep';
import { FighterStats } from './FighterStats';

const WizardScreen = () => {
   return (
      <div className={styles.container}>
         <img src={Margin} width={375} height={32} />
         <div className={styles.title}>
            <h3 style={{ color: '#DA8B14' }}>Choose your fighter</h3>
         </div>
         <FighterStep />
         <FighterImage />
         <FighterName />
         <FighterStats />
         <ChooseButton />
         <img src={Margin} width={375} height={32} style={{ transform: 'rotate(180deg)' }} />
      </div>
   );
};

export default WizardScreen;
