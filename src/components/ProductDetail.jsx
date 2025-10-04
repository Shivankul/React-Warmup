import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Loading from "./Loading";

export default function ProductDetail() {
  const [products] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  // const getsingleProduct = async()=>{
  //     try {
  //         const {data} = await axios.get(`/products/${id}`)
  //         setProduct(data);
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
   useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((p) => p.id == id);
      setProduct(foundProduct || null);
    }
  }, [products, id]);

  return product ? (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left: Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt="A bitch Bag"
            className="w-[60%] h-80 md:h-full object-contain ml-8"
          />
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            {product.title}
          </h2>
          <p className="text-xl font-bold text-zinc-700">$ {product.price}</p>
          <p className="text-slate-600 text-sm leading-relaxed">
           {product.description}
          </p>
          <span className=" inline-block w-fit px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full ">
            {product.category}
          </span>
          <button className="mt-2 w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
