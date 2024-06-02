import React from "react";
import { ProductType } from "../_lib";

type Props = {
  item: ProductType[];
};

function Card({ item }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
      {item.map((item) => (
        <div key={item.id} className="bg-green-200 p-3 rounded-md">
          <h1 className="py-3">{item.description}</h1>
        </div>
      ))}
    </div>
  );
}

export default Card;
