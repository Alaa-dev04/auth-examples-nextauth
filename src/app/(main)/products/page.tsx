"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Product } from "@/src/components-pages/productCard";
import ProductCard from "@/src/components-pages/productCard";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
const ProductListPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong.</h1>;
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {data.products.map((product: Product) => (
           <Link key={product.id} href={`/products/${product.id}`}>
          <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductListPage;
