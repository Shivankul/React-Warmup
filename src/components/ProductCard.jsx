import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-60 h-[320px] bg-slate-800 rounded-xl shadow-2xl hover:shadow-lg transition transform hover:scale-105 cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="w-full h-50 bg-slate-200 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-sm font-semibold text-white line-clamp-2">
          {product.title}
        </h3>
        <div>
          <p className="text-md font-bold text-white">${product.price}</p>
          <span className="inline-block mt-1 px-2 py-1 bg-blue-300 text-slate-800 text-xs rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}
