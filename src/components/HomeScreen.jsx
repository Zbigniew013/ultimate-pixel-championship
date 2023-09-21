import React from 'react';
import styles from './HomeScreen.module.css';
import Line from '../../assets/Line 15.png';
import Sword from '../../assets/image 5.png';
import { ChooseButton } from '../components/libs/ChooseButton';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
   return (
      <div className="container">
         <div className={styles.title}>
            <h1>Ultimate Pixel</h1>
            <h1 style={{ color: '#DA8B14' }}>Championship</h1>
         </div>
         <div className={styles.line}>
            <img src={Line} width={256} height={4} />
         </div>
         <div className={styles.swords}>
            <img src={Sword} width={60} height={60} />
         </div>
         <div className={styles.description}>
            <p>Fill out the form to sign up for upcoming tournee.</p>
         </div>
         <Link to="wizardscreen">
            <ChooseButton />
         </Link>
      </div>
   );
};
