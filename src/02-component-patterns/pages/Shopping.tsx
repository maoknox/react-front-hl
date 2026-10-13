//import  {ProductCard} from "../components/ProductCard";
//import { ProductButtons, ProductCard, ProductDescription, ProductImage } from "../components";
import { ProductCard } from "../components";
import "../styles/custom-styles.css";
import styles from '../styles/styles.module.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import products from "../data/productData";

  /* const product = 
  { id: 1, title: "Coffee Mug", description: "A nice coffee mug for your morning brew", img: "./coffee-mug.png" };
 */


export const Shopping = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Page</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap"

      }}>
        {products.map((product) =>  (
            <ProductCard key={product.id} product={product} className="bk-color" onChange={onProductCountChange} value={shoppingCart[product.id]?.count || 0}>
              {product.productimage ? <ProductCard.Image image={product.img} className="custom-image"/> : <></>}
              {product.productdescription ? <ProductCard.Description title={product.title} description={product.description} className="text-description"/> : <></>}
              {product.productbuttons ? <ProductCard.Buttons className="custom-buttons" classNameButtonAdd={styles.buttonAdd} classNameButtonMinus={styles.buttonMinus}/> : <></>}
              {/* {product.productimage ? <ProductImage image={product.img} className="custom-image" /> : <></>}
              {product.productdescription ? <ProductDescription title={product.title} description={product.description} className="text-description" /> : <></>}
              {product.productbuttons ? <ProductButtons className="custom-buttons" /> : <></>} */}
            </ProductCard>
          ))
        }
      </div>
      <div className="shopping-cart"> 
        {
          Object.values(shoppingCart).map(productInCart => (
            <ProductCard 
                key={productInCart.id}
                product={productInCart}
                className="bk-color"
                cardStyles={{ width: '100px' }}
                value={productInCart.count}
                onChange={onProductCountChange}
            > 
              <ProductCard.Image image={productInCart.img} className="custom-image"/>
              <ProductCard.Buttons className="custom-buttons" classNameButtonAdd={styles.buttonAdd} classNameButtonMinus={styles.buttonMinus}/>

            </ProductCard>
          ))
        }
         
      </div>
    </div>
    
    
  )
};

export default Shopping;
