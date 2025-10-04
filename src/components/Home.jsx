import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);
  const [filterProducts, setfilterProducts] = useState(null);
  const { search } = useLocation();
  // ye mujhe search me jo bhi milega de dega laake likea agar jwllery pe click kiya to jewelley wala query parameter mil jayega
  // abhi exact category nikalne ke liye ham use string me convert krke find kr lenge
  const category = decodeURIComponent(search.split("=")[1]);

//   const getproductCategory = async () => {
//     try {
//       const { data } = await axios.get(`/products/category/${category}`);
//       setfilterProducts(data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
  useEffect(() => {
    if (!filterProducts || category == "undefined") setfilterProducts(products); // in this if there is no filter product or the category is undefined then render all the products in this 
    if (category != "undefined") {
      setfilterProducts(products.filter((p) => p.category === category));
      // getproductCategory()
    }
  }, [category, products]);
  console.log(filterProducts);
  return products ? (
    <>
      <div className="w-full h-screen flex">
        {/* Sidebar */}

        <Nav />

        {/* Main content */}
        <div className="w-[85%] overflow-x-hidden overflow-y-auto p-6">
          {/* Product Grid */}
          <div className="flex flex-wrap gap-4">
            {filterProducts && filterProducts.map((item) => {
              return (
                <Link to={`details/${item.id}`} key={item.id}>
                  <ProductCard product={item} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
