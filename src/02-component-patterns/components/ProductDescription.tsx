
import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from '../contexts/product-context';

export interface Props {
  title?: string;
  description: string;
  className?: string;
}


export const ProductDescription = ({title, description, className}: Props)=>{
  const { product } = useContext(ProductContext);
  const productTitle = title || product.title;
  const productDescription = description || product.description;
  return (
    <div className={`${styles.productDescription} ${className}`}>
      <h3>{productTitle}</h3>
      <p>{productDescription}</p>
    </div>
  )
}
