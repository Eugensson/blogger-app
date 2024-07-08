"use client";

import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="flex-1 p-5">
      <Table>
        <TableCaption>A list of your blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Author name</TableHead>
            <TableHead className="w-1/3">Blog title</TableHead>
            <TableHead className="w-1/6">Date</TableHead>
            <TableHead className="w-1/6">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map(({ _id, authorImg, title, author, date }) => {
            const blogDate = new Date(date);
            return (
              <TableRow key={_id}>
                <TableCell className="flex items-center gap-2 font-medium">
                  <Image
                    src={authorImg ? authorImg : assets.profile_icon}
                    alt="User profile avatar"
                    width={60}
                    height={60}
                  />
                  {author}
                </TableCell>
                <TableCell className="w-1/3">{title}</TableCell>
                <TableCell className="w-1/6">
                  {blogDate.toDateString()}
                </TableCell>
                <TableCell className="w-1/6 text-right">
                  <IoTrashBinSharp
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => deleteBlog(_id)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogListPage;
