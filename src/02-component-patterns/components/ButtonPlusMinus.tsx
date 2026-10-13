import { useContext } from 'react';
import { ProductContext } from '../contexts/product-context';
import { ButtonPlusMinusProps } from '../interfaces/product.interfaces';


export const ButtonPlusMinus = ({incdecValue,sign, classname, styles}: ButtonPlusMinusProps) =>{
  const { increment } = useContext(ProductContext);
  return (
    <button className={classname} onClick={() => increment(incdecValue)} style={styles as React.CSSProperties}>
        {sign}
      </button>
  )
}