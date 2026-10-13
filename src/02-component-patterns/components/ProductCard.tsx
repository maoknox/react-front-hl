import { ReactElement } from 'react';
import { userProduct } from '../hooks/userProduct';
import {  OnChangeArgs, Product } from '../interfaces/product.interfaces';
import { ProductContext } from '../contexts/product-context';
import styles from '../styles/styles.module.css'
import "../styles/custom-styles.css";

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  cardStyles?: React.CSSProperties;
  onChange?: (args:OnChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({ children, product, className, cardStyles, onChange, value }: Props) => {

  const {counter, increment} = userProduct({ initialValue: value || 0, onChange, product });
  
  return (
    <Provider value={{ counter, increment, product }}>
      <div className={`${styles.productCard} ${className}`} style={cardStyles}>
        {children}
      </div>
    </Provider>

  )
};