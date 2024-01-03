export type TProducts = {
  image: string;
  discount: number;
  price: number;
  sizes: string;
  gender: string;
  name: string;
  description: string;
  category: number;
  colors: string;
  status: string;
  condition: string;
  brand: number;
  stock: number;
}

export type TRenderProduct = {
  product_id: number;
  product_name: string;
  product_discount: string;
  brand_name: string;
  category_name: string;
  product_price: number;
}

export type FlagsPage = {
  createProduct: boolean;
  createCategory: boolean;
  createBrand: boolean;
  editProduct: boolean;
};

export type FormsTypes = {
  placeholder?: string;
  alt?: string;
  onClick?: () => void;
  type?: string;
};

export interface TCategorys {
  id: number;
  name: string;
  created_at: string;
  updated_at: string | undefined;
}

export interface TBrands {
  id: number;
  brand_name: string;
  brand_status: number;
  created_at: string;
  updated_at: string | undefined;
}

export type ListData = {
  category?: TCategorys[];
  brands?: TBrands[];
}

export type Props = {
  toogle: () => void;
  state: boolean;
  id?: number | string;
};
