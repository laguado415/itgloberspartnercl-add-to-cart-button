import React from "react";
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm" 
import ButtonGroup from "./ButtonGroup";
import Totalizers from './Totalizers';
import ProductGroup from './ProductGroup';

const AddToCartInfo = ({blockClass}:{blockClass: string}) => {
  const productInfo = useProduct()
  const { orderForm: {
     items,
     totalizers
  } } = useOrderForm()
  console.log(productInfo,"\n",items,"\n" ,totalizers)
 
  return (
    <>
     <ProductGroup items={items} blockClass={blockClass} />
     <Totalizers itemsCount={items?.length} total={totalizers[0]?.value}/>
     <ButtonGroup/>
    </>
  )
}

export default AddToCartInfo
