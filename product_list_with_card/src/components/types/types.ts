export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    thumbnail: string;
  };
};
