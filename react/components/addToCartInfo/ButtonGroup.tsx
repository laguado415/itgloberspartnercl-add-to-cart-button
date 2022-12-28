import React from 'react';
import { generateBlockClass } from '@vtex/css-handles';
import styles  from './styles.css';

const ButtonGroup = ({blockClass}:any) => {
  const buttonGroup = generateBlockClass(styles.buttonGroup, blockClass),
        checkoutButton = generateBlockClass(styles.checkout, blockClass),
        continueButton = generateBlockClass(styles.continue, blockClass),
        minicartButton = generateBlockClass(styles.minicart, blockClass)

    return (
       <div className={buttonGroup}>
         <div className={checkoutButton}>
          <a href="/checkout">CHECKOUT</a>
         </div>
         <div className={continueButton}>
          <a href='#'>CONTINÚA COMPRANDO</a>
         </div>
         <div className={minicartButton}>
          <a href="#">MINICART</a>
         </div>
       </div>
    )
}

export default ButtonGroup
