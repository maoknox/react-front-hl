
import { useContext } from 'react';
import styles from '../styles/styles.module.css'
import { ButtonPlusMinus } from './ButtonPlusMinus';
import { ProductContext } from '../contexts/product-context';

export interface Props {
  className?: string;
  classNameButtonAdd?: string;
  classNameButtonMinus?: string;
}

export const ProductButtons = ({ className, classNameButtonAdd, classNameButtonMinus }: Props)=>{
  const { counter } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <ButtonPlusMinus  incdecValue={-1} sign="-" classname={classNameButtonMinus} />
      <span className={styles.countLabel}>{counter}</span>
      <ButtonPlusMinus  incdecValue={1} sign="+" classname={classNameButtonAdd} />
    </div>
  )
}
