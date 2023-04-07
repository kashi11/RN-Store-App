export type User = {
  username: string;
  password?: string;
  phoneNumber: string;
  email?: string;
};

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
