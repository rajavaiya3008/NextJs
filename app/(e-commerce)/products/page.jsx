import ProductItem from "@/app/components/ProductItem";
import React from "react";

const page = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  // console.log("products", products);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">Product List</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
