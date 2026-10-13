import { JSX } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as DescriptionProps } from "../components/ProductDescription";
import { Props as ImageProps} from "../components/ProductImage";
import { Props as ButtonsProps} from "../components/ProductButtons";



export interface ButtonPlusMinusProps {
  incdecValue: number;
  sign: string;
  classname?:string
  styles?:React.CSSProperties
}

export interface ProductContextProps {
  counter: number;
  increment: (value: number) => void;
  product: Product;
  maxCount?: number;
}


export interface Product{
  id: number;
  title: string;
  description: string;
  img?: string;
  productimage?: boolean,
  productdescription?: boolean,
  productbuttons?: boolean
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Description: (Props: DescriptionProps) => JSX.Element;
    Image: ({ image }: ImageProps) => JSX.Element;
    Buttons: (Props: ButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?:number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increment: ( value: number ) => void;
    reset: () => void;
}