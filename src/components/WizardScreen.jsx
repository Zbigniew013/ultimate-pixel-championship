import React from 'react';
import styles from './WizardScreen.module.css';
import { ChooseButton } from './ChooseButton';
import Margin from '../../assets/Margin.png';
import Step from '../../assets/step_1.png';
import Ellipse from '../../assets/Ellipse 1.png';
import AnnoyedKaren from '../../assets/fighters/image 2.png';

const WizardScreen = () => {
   return (
      <div className={styles.container}>
         <img src={Margin} width={375} height={32} />

         <div className={styles.title}>
            <h3 style={{ color: '#DA8B14' }}>Choose your fighter</h3>
         </div>

         <div className={styles.step}>
            <img src={Step} width={146} height={24} />
         </div>

         <div className={styles.fighter_image}>
            <img src={AnnoyedKaren} width={166} height={166} />
         </div>

         <div className={styles.ellipse}>
            <img src={Ellipse} width={193} height={20} />
         </div>

         <div className={styles.fighter_name}>
            <h3>Annoyed Karen</h3>
         </div>

         <div className={styles.fighter_profile_wrapper}>
            <div className={styles.fighter_profile}>
               <div className={styles.frame_wrapper}>
                  <div className={styles.frame_1}>
                     <div className={styles.health_attack}>
                        <div>
                           <p>health</p>
                           <h4>67</h4>
                        </div>
                        <div>
                           <p>attack</p>
                           <h4>14 - 18</h4>
                        </div>
                     </div>
                  </div>

                  <div className={styles.frame_2}>
                     <p>special attack</p>
                     <h4>passive aggressiveness</h4>
                  </div>

                  <div className={styles.frame_3}>
                     <p>weakness</p>
                     <h4>logical thinking</h4>
                  </div>
               </div>
            </div>
         </div>

         <ChooseButton />
         <img src={Margin} width={375} height={32} style={{ transform: 'rotate(180deg)' }} />
      </div>
   );
};

export default WizardScreen;
