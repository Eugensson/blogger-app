"use server";

import fs from "fs";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

import Blog from "@/lib/models/blog";
import { connectDB } from "@/lib/config/db";

const db = async () => {
  await connectDB();
};

db();

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await Blog.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await Blog.find({});
    return NextResponse.json({ blogs });
  }
}

export async function POST(request) {
  const formData = await request.formData();

  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imageUrl = `/${timestamp}_${image.name}`;

  const newBlog = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imageUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await Blog.create(newBlog);
  console.log("Blog successfuly created!!!");

  return NextResponse.json({
    success: true,
    message: "Blog successfuly created!!!",
  });
}

export async function DELETE(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  const blog = await Blog.findById(blogId);

  fs.unlink(`./public/${blog.image}`, () => {});

  await Blog.findByIdAndDelete(blogId);

  return NextResponse.json({
    message: "Blog successfuly deleted!!!",
  });
}
