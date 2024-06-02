"use server";

import { ProductType } from "./_lib";

export const getData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products as ProductType[];
};
