import { Product } from "../interfaces/product.interfaces";

const products: Product[] = [
  { id: 1, title: "Coffee Mug", description: "A nice coffee mug for your morning brew", img: "./coffee-mug.png", productimage: true, productdescription: true, productbuttons: true },
  { id: 2, title: "Notebook", description: "A notebook for your thoughts and ideas", img: "./coffee-mug2.png", productimage: true, productdescription: true, productbuttons: false },
  { id: 3, title: "Pen", description: "A pen to write down your notes",productimage: true, productdescription: false, productbuttons: true},
]; 

export default products;