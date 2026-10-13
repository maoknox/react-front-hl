import  noImg  from '../assets/no-image.jpg';
import { useContext } from "react";
import styles from '../styles/styles.module.css'
import { ProductContext } from '../contexts/product-context';

export interface Props {
  image?: string,
  className?: string
}

export const ProductImage = ({image, className}: Props)=>{
  const { product } = useContext(ProductContext);
  const img = image || product.img || noImg;
  return (
    <img src={img} alt="Product Image" className={`${styles.productImg} ${className}`} />
  )
}