import React from 'react';
import Margins from '../../../assets/margins.png';

export const Margin = ({ transform }) => {
   return (
      <>
         <img src={Margins} width={375} height={32} style={{ transform }} />
      </>
   );
};
