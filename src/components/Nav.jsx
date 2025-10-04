import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
import { Link } from "react-router-dom";

const Nav = () => {
    const [products] = useContext(ProductContext);
  let distinct_cataegory =
    products &&
    products.reduce(
      (accumulator, currentValue) => [...accumulator, currentValue.category],
      []
    );
  distinct_cataegory = [...new Set(distinct_cataegory)];
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  return (
    <nav className="w-[15%] h-full bg-slate-200 flex flex-col items-center pt-5">
      <a className="mb-2 py-3 px-5 border rounded border-slate-500 text-blue-500" href="/create">Add New Products</a>
     
      <hr className="w-full" />
      <h1 className="font-bold mb-3">Category</h1>
      
      <div className="w-[80%]">
          {distinct_cataegory.map((c, i) => (
            <Link key={i} 
            to={`/?category=${c}`} className="flex items-center gap-1"> 
              {" "}
              <span 
              style={{backgroundColor:color()}}
              className="rounded-full  w-[15px] h-[15px] bg-blue-100"></span>
              {c}
            </Link>
          ))}
        </div>
    </nav>
  );
};

export default Nav;
