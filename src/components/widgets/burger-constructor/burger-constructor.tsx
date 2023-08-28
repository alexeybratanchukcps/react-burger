import React, {useContext} from "react";

import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {ProductsContext} from "components/entities/products";

import {CardPosition} from "./card-position/card-position";
import {OrderDetails} from "./оrder-details/order-details";

import styles from './burger-constructor.module.css'


export const BurgerConstructor = () => {
    const price = 610
    const products = useContext(ProductsContext)


    const selectedUser = ["60666c42cc7b410027a1a9b7", "60666c42cc7b410027a1a9b6",
    "60666c42cc7b410027a1a9b9", "60666c42cc7b410027a1a9b8", "60666c42cc7b410027a1a9bb",
    "60666c42cc7b410027a1a9ba"]
    const selectedProducts = products && products.filter((v)=>
        v._id === selectedUser.find((id)=>id===v._id)
    )

   return (
       <section>
           <div className={styles.content + ' pl-4 mb-10'} >
               <div className="pr-4">
                   <CardPosition
                       type="top"
                       isLocked={true}
                       text="Краторная булка N-200i (верх)"
                       price={200}
                   />
               </div>
               <div className={styles.box + ' pr-2'}>
                   {selectedProducts && selectedProducts.map((v)=>
                       <CardPosition
                           key={v._id}
                           text={v.name}
                           price={v.price}
                           thumbnail={v.image}
                       />
                   )}
               </div>
               <div className="pr-4">
                   <CardPosition
                       type="bottom"
                       isLocked={true}
                       text="Краторная булка N-200i (низ)"
                       price={200}
                   />
               </div>
           </div>
           <div className={styles.button_order}>
               <span className="mr-10">
                   <p className="text text_type_digits-medium">{price}&nbsp;
                   <CurrencyIcon type="primary" /></p>
               </span>
               <OrderDetails />
           </div>
       </section>
   );
}