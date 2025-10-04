import React, { useContext, useState } from "react";
import { ProductContext } from "../context/Context.jsx";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    // ab page refresh hone se ruk jayega
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      category.trim().length < 5 ||
      description.trim().length < 5
    ) {
      alert("Each and every input have atleast 4 characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);

    // ab database me set kr do new product jo add kr rhe ho
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("New product added Succesfully")
    navigate("/");
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="text-3xl w-1/2 mb-3 font-semibold">Add new Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-2xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-2xl bg-zinc-200 rounded-md p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-2xl bg-zinc-200 rounded-md p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="text-2xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
        placeholder="Enter product description  here"
        rows="8"
      ></textarea>
      <div className="w-1/2">
        <button className="py-1/2 text-2xl text-indigo-400 font-semibold px-5 border rounded-md border-blue-200 ">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;