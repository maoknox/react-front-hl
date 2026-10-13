//import  {ProductCard} from "../components/ProductCard";
//import { ProductButtons, ProductCard, ProductDescription, ProductImage } from "../components";
import { ProductCard } from "../components";
import "../styles/custom-styles.css";
import styles from '../styles/styles.module.css';
import products from "../data/productData";

  /* const product = 
  { id: 1, title: "Coffee Mug", description: "A nice coffee mug for your morning brew", img: "./coffee-mug.png" };
 */


export const Shopping = () => {
 return (
    <div>
      <h1>Shopping Page</h1>
      
      <ProductCard 
        key={products[0].id} 
        product={products[0]} 
        className="bk-color" 
        initialValues = {{
          count: 4,
          maxCount: 14
        }}
      >
        {
          ({reset, count, isMaxCountReached, maxCount, increment }) =>  (
              <>
                {products[0].productimage ? <ProductCard.Image image={products[0].img} className="custom-image"/> : <></>}
                {products[0].productdescription ? <ProductCard.Description title={products[0].title} description={products[0].description} className="text-description"/> : <></>}
                {products[0].productbuttons ? <ProductCard.Buttons className="custom-buttons" classNameButtonAdd={styles.buttonAdd} classNameButtonMinus={styles.buttonMinus}/> : <></>}
                <button onClick={ reset }>Reset</button>
                <button onClick={ () => increment(-2) }> -2 </button>
                {
                    ( !isMaxCountReached && <button onClick={ ()=> increment(+2) }> +2 </button> )
                }
                <span>{ count } - { maxCount }</span>
              
              </>
          )
        }
        
        {/* {product.productimage ? <ProductImage image={product.img} className="custom-image" /> : <></>}
        {product.productdescription ? <ProductDescription title={product.title} description={product.description} className="text-description" /> : <></>}
        {product.productbuttons ? <ProductButtons className="custom-buttons" /> : <></>} */}
      </ProductCard>
    </div>
  )
};

export default Shopping;
