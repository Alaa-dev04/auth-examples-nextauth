export type Product = {
  id: number;
  name: string;
  image: string;
  details: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16",
    image: "/products/macbook-pro.jpg",
    details:
      "Apple MacBook Pro with M3 Pro chip, 18GB RAM, and 512GB SSD.",
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    image: "/products/iphone-16-pro.jpg",
    details:
      "Apple iPhone 16 Pro with 256GB storage and advanced camera system.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S25",
    image: "/products/galaxy-s25.jpg",
    details:
      "Samsung flagship smartphone featuring a Dynamic AMOLED display.",
  },
  {
    id: 4,
    name: "Sony WH-1000XM6",
    image: "/products/sony-headphones.jpg",
    details:
      "Premium wireless noise-canceling headphones with 30-hour battery life.",
  },
  {
    id: 5,
    name: "iPad Air",
    image: "/products/ipad-air.jpg",
    details:
      "Apple iPad Air with M2 chip, 11-inch Liquid Retina display.",
  },
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};