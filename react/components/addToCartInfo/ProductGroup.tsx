import React from "react"
import { generateBlockClass } from "@vtex/css-handles"
import  styles from "./styles.css"

const ProductGroup = ({items, blockClass}:any) => {
  const containerItems = generateBlockClass(styles.container,blockClass),  
  item = generateBlockClass(styles.item,blockClass),
  image = generateBlockClass(styles.image,blockClass),
  name = generateBlockClass(styles.name,blockClass),
  price = generateBlockClass(styles.price,blockClass),
  quantity = generateBlockClass(styles.quantity,blockClass)
   
  return (
    <div className={containerItems}>
    { items.length &&
       items.map((product:any, index:any)=>(
         <div key={index} className={item}>
           <div className={image}>
            <img src={product.imageUrls?.at1x} alt={product.name} width="100%" height="100%" />
           </div>
           <div className={name}>
            <p>{product.name}</p>
           </div>
           <div className={price}>
            <p>precio: {product.price}</p>
           </div>
           <div className={quantity}>
            <p>Cant: {product.quantity}</p>
           </div>
         </div>
       ))     
      }
    </div>
   )
}

export default ProductGroup
