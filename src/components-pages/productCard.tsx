import React from "react";
import Image from "next/image";
export type Product = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price?: number;
};
type ProductCardProps = {
  product: Product;
  showDetails?: boolean;
  showPrice?: boolean;
  showButton?: boolean;
};

const ProductCard = ({
  product,
  showDetails = false,
  showPrice = false,
  showButton = false,
}: ProductCardProps) => {
  return (
    <div className="rounded-lg border p-4 shadow flex flex-col items-center">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
        className="transform transition-transform duration-200 hover:scale-105 cursor-pointer "
      />

      <h2>{product.title}</h2>

      {showDetails && <p>{product.description}</p>}
      {showPrice && (
        <p className="text-2xl font-bold text-green-600">
          ${product.price ?? "0.00"}
        </p>
      )}
      {showButton && (
        <button className="mt-4 rounded-lg bg-black px-6 py-2 text-white cursor-pointer">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
