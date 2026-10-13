import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/product.interfaces";

interface UseProductParams {
  product: Product;
  initialValue: number;
  onChange?: (args:OnChangeArgs) => void;
}

export const userProduct = ({initialValue, onChange, product}:UseProductParams)=>{
    const [counter, setCounter] = useState(initialValue);
    const isControlledByOnchange = useRef(!!onChange);
    console.log(isControlledByOnchange)
    const increment = (value:number) => {
        /*  if(isControlledByOnchange.current){
            return onChange!({product, count:value});
        } */
        const newCount = Math.max(counter + value, 0);
        setCounter(newCount);
        onChange && onChange({product, count:newCount});
    }

    useEffect(()=>{
        setCounter(initialValue)
    },[initialValue])
    
    return {counter, increment}
}