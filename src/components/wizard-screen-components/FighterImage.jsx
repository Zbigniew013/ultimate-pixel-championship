import React from 'react';
import styles from './FighterImage.module.css';
import Ellipse from '../../../assets/Ellipse 1.png';
import AnnoyedKaren from '../../../assets/fighters/image 2.png';

export const FighterImage = () => {
   return (
      <>
         <div className={styles.fighter_image}>
            <img src={AnnoyedKaren} width={166} height={166} />
         </div>

         <div className={styles.ellipse}>
            <img src={Ellipse} width={193} height={20} />
         </div>
      </>
   );
};
