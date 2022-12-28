import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from "./styles.css"

// type Props = {
//    total: number
//    itemsCount: number
// }

const Totalizers = ({total, itemsCount, blockClass}:any) => {
   const totalizers = generateBlockClass(styles.totalizers,blockClass)

   return (
      <div className={totalizers}>
         <p>Tenemos {itemsCount} items en tu compra</p>
         <p>Total: {total}</p>
      </div>
   )
}

export default Totalizers
