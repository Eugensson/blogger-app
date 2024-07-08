"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { BlogItem } from "@/components/BlogItem";

export const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="flex flex-col gap-10">
      <ul className="mx-auto flex flex-wrap justify-center items-center gap-6">
        <li>
          <button
            onClick={() => setMenu("All")}
            type="button"
            className={`${
              menu === "All" && "bg-black text-white"
            } px-4 py-1 min-w-[120px] min-h-[50px] text-sm border border-black`}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => setMenu("Technology")}
            type="button"
            className={`${
              menu === "Technology" && "bg-black text-white"
            } px-4 py-1 min-w-[120px] min-h-[50px] text-sm border border-black`}
          >
            Tech
          </button>
        </li>
        <li>
          <button
            onClick={() => setMenu("Startup")}
            type="button"
            className={`${
              menu === "Startup" && "bg-black text-white"
            } px-4 py-1 min-w-[120px] min-h-[50px] text-sm border border-black`}
          >
            Startup
          </button>
        </li>
        <li>
          <button
            onClick={() => setMenu("Lifestyle")}
            type="button"
            className={`${
              menu === "Lifestyle" && "bg-black text-white"
            } px-4 py-1 min-w-[120px] min-h-[50px] text-sm border border-black`}
          >
            Lifestyle
          </button>
        </li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center gap-x-5 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map(({ _id, image, title, category, description }) => (
            <li key={_id}>
              <BlogItem
                id={_id}
                image={image}
                title={title}
                category={category}
                description={description}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
