"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import { toast } from "react-toastify";

const initialData = {
  title: "",
  description: "",
  category: "Startup",
  author: "Alex Bennet",
  authorImg: "/author_img.png",
};

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const AddBlogPage = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState(initialData);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    const response = await axios.post(`${BaseUrl}/api/blog`, formData);

    if (response.data.success) {
      toast.success(response.data.message);
      setImage(false);
      setData(initialData);
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="py-5 px-5 sm:py-12 sm:pl-16">
        <p className="text-xl capitalize">Upload thumbnail</p>
        <label htmlFor="image">
          {!image ? (
            <div className="mt-4 w-[200px] h-[100px] inline-flex flex-col items-center gap-1 justify-center border-2 border-dashed text-lg text-gray-500 border-gray-500 p-2">
              <IoCloudUpload className="w-12 h-12" />
              Upload
            </div>
          ) : (
            <Image
              src={URL.createObjectURL(image)}
              alt=""
              width={200}
              height={100}
            />
          )}
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name="image"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4 capitalize">Blog title</p>
        <input
          name="title"
          value={data.title}
          onChange={onChangeHandler}
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border"
        />
        <p className="text-xl mt-4 capitalize">Blog description</p>
        <textarea
          name="description"
          value={data.description}
          onChange={onChangeHandler}
          type="text"
          placeholder="Write content here"
          rows={6}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border"
        />
        <p className="text-xl mt-4 capitalize">Blog category</p>
        <select
          name="category"
          value={data.category}
          onChange={onChangeHandler}
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border text-gray-500"
        >
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <button
          type="submit"
          className="flex items-center justify-center capitalize mt-8 w-40 h-12 bg-black text-white hover:bg-black/80"
        >
          Create post
        </button>
      </form>
    </>
  );
};

export default AddBlogPage;
