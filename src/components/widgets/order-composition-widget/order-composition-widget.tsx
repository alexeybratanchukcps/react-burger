import React, {FC} from 'react'

import {useGetProductsQuery} from "components/entities/products";
import {IOrder} from "components/entities/order";

import {OrderComposition} from "components/entities/order/ui/order-composition";
import {ProductsLongComposition} from "components/entities/products/ui/products-long-composition";

import {CalcPrice} from "components/features/calc-price";

// import styles from './order-composition-widget.module.css'




interface IOrderCompositionWidgetProps {
    order: IOrder
}


export const OrderCompositionWidget:FC<IOrderCompositionWidgetProps> = ({order}) => {
    const {
        data: products = [],
        // isLoading,
        // isSuccess,
        isError,
        error
    } = useGetProductsQuery()

    return(
        <>
            <OrderComposition order={order}
                childrenPositions={<ProductsLongComposition ids={order.ingredients} products={products} />}
                childrenCalcPrice={<CalcPrice ids={order.ingredients} products={products} />}
            />
        </>
    )
}