import { StaticImageData } from "next/image";
//products data types
export type IProduct = {
  id: number;
  title: string;
  image?: string[] | StaticImageData | undefined;
  slug: string;
  price: number;
  category: string;
  description: string;
  size: string[];
  color: string[];
  qty: number;
  discount?: number;
};

//Card Data type
export type Cart = {
    id: number;
    title: string;
    image?: string[] | StaticImageData | undefined;
    slug: string;
    price: number;
    size: string[];
    color: string[];
    qty: number;
    discount?: number;
    uuid: number | string | undefined;
}