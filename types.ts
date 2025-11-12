
export interface Image {
  id: number;
  url: string;
}

export interface ProductData {
  title: string;
  price: number;
  regularPrice: number;
  gallery: Image[];
}
