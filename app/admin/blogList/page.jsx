"use client";

import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { BlogTableItem } from "@/components/adminComponents/BlogTableItem";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (id) => {
    const response = await axios.delete(`${BaseUrl}/api/blog`, {
      params: { id },
    });

    toast.success(response.data.message);

    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 p-2 pl-16">
      <h1>All blogs</h1>
      <div className="relative h-[55vh] w-[900px] overflow-x-auto mt-2 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(({ _id, authorImg, title, author, date }) => (
              <BlogTableItem
                key={_id}
                id={_id}
                authorImg={authorImg}
                title={title}
                author={author}
                date={date}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogListPage;
