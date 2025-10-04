import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  useEffect(() => {
  console.log("Products in context:", products);
}, [products]);

  const changeHandler = (e) => {
    setProduct({...product,[e.target.name]:e.target.value})
  };
  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);
  const AddProductHandler = (e) => {
    e.preventDefault();
    // ab page refresh hone se ruk jayega
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.toString().trim().length < 1 ||
      product.category.trim().length < 5 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every input have atleast 4 characters");
      return;
    }
    console.log(products)
    const pi=products.findIndex((p)=>p.id==id)
    const copydata=[...products];
    copydata[pi]={...product[pi], ...product}
    console.log(copydata)
    setProducts(copydata);

    // ab database me set kr do new product jo add kr rhe ho
    localStorage.setItem("products", JSON.stringify(copydata));
    // // toast.succes("New product added")n
    navigate(-1);
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="text-3xl w-1/2 mb-3 font-semibold">Edit Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-2xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-2xl bg-zinc-200 rounded-md p-3 w-[48%] mb-3"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-2xl bg-zinc-200 rounded-md p-3 w-[48%] mb-3"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
      name="Description"
        onChange={changeHandler}
        value={product && product.description}
        className="text-2xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
        placeholder="Enter product description  here"
        rows="8"
      ></textarea>
      <div className="w-1/2">
        <button className="py-1/2 text-2xl text-indigo-400 font-semibold px-5 border rounded-md border-blue-200 ">
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;