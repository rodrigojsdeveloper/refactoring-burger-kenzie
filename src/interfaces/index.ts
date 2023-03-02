export interface IProduct {
  id: string;
  img: string;
  name: string;
  description: string;
  category: string;
  price: number;
  count: number;
}

export interface IProductComponent {
  product: IProduct;
  handleListCartProducts: (product: IProduct) => void;
  handleClickCartProduct: (product: IProduct) => void;
  handleRemoveCartProducts: (product: IProduct) => void;
}

export interface IListProducts {
  products: IProduct[];
  handleListCartProducts: (product: IProduct) => void;
}

export interface ICart {
  cartProducts: IProduct[];
  clearAllProducts: () => void;
  handleClickCartProduct: (product: IProduct) => void;
  handleRemoveCartProducts: (product: IProduct) => void;
  handleListCartProducts: (product: IProduct) => void;
}
