import { JSX, ReactElement } from 'react';
import { userProduct } from '../hooks/userProduct';
import {  InitialValues, OnChangeArgs, Product, ProductCardHandlers } from '../interfaces/product.interfaces';
import { ProductContext } from '../contexts/product-context';
import styles from '../styles/styles.module.css'
import "../styles/custom-styles.css";

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args:ProductCardHandlers) => JSX.Element
  className?: string;
  cardStyles?: React.CSSProperties;
  onChange?: (args:OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, cardStyles, onChange, value , initialValues}: Props) => {

  const {counter, increment, maxCount, isMaxCountReached, reset } = userProduct({ value , onChange, product, initialValues });
  
  return (
    <Provider value={{ counter, increment, product, maxCount}}>
      <div className={`${styles.productCard} ${className}`} style={cardStyles}>
        {children(
          {
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product, 

            increment,
            reset,
          }
        )}
      </div>
    </Provider>

  )
};