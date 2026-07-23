"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ProductCard from "@/src/components-pages/productCard";
async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
const page = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id as string),

  });
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong.</h1>;
  if (!data) return <h1>Product not found.</h1>;

  return (
    <div className="" >
      <ProductCard product={data} key={data.id} showDetails={true} showButton={true} showPrice={true}  />
    </div>
  );
};

export default page;
