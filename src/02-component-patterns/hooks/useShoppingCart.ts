import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/product.interfaces";

export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({  });
    const onProductCountChange = ({count, product}:{count:number, product:Product}) => {
        console.log("prueba click")
        console.log(count,product)
       setShoppingCart((oldShoppingCart) => {
         if (count === 0) {
           //const { [product.id]: toDelete, ...rest } = oldShoppingCart;
           delete oldShoppingCart[product.id];
           return { ... oldShoppingCart };
         }
         const updatedCart = { ...oldShoppingCart };
         updatedCart[product.id] = { ...product, count };
         return updatedCart;
       });
     };

     return {shoppingCart, onProductCountChange};

}   

