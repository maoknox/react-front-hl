import { ProductCardHOCProps } from "../interfaces/product.interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";

export { ButtonPlusMinus } from "./ButtonPlusMinus";
export { ProductButtons } from "./ProductButtons";
export { ProductDescription } from "./ProductDescription";
export { ProductImage } from "./ProductImage";

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Description: ProductDescription,
    Image: ProductImage,
    Buttons: ProductButtons

})

export default ProductCard