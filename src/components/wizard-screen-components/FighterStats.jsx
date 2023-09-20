import React from 'react';
import styles from './FighterStats.module.css';

export const FighterStats = () => {
   return (
      <>
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
      </>
   );
};
