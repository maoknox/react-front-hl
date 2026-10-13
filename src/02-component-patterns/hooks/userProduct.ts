import { useEffect, useRef, useState } from "react"
import { InitialValues, OnChangeArgs, Product } from "../interfaces/product.interfaces";

interface UseProductParams {
  product: Product;
  value?: number;
  onChange?: (args:OnChangeArgs) => void;
  initialValues?: InitialValues
}

export const userProduct = ({initialValues, value = initialValues?.count || 0, onChange, product}:UseProductParams)=>{
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    /* const isControlledByOnchange = useRef(!!onChange);
    console.log(isControlledByOnchange) */
    const increment = (value:number) => {
        /*  if(isControlledByOnchange.current){
            return onChange!({product, count:value});
        } */
        let newCount = Math.max(counter + value, 0);
        if( initialValues?.maxCount){
            newCount = Math.min(initialValues?.maxCount,newCount)
        }
        console.log(newCount);
        setCounter(newCount);
        onChange && onChange({product, count:newCount});
    }
    const reset = () => {
        setCounter(initialValues?.count || value )
    }
    
    useEffect(()=>{
        console.log(isMounted.current);
        console.log(value);
        if(!isMounted.current) return;
        setCounter(value);
    },[value]);
    useEffect(() => {  
        console.log(isMounted.current)      
        isMounted.current = true;
    },[]);

  


    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increment,
        reset
    }
}