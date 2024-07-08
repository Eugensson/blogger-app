"use client";

import {
  RiLinkedinFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get(`${BaseUrl}/api/blog`, {
      params: {
        id: params.id,
      },
    });
    setData(response.data.blog);
  };

  useEffect(() => {
    fetchBlogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-190px)]">
      {data ? (
        <article className="p-6 md:px-12 lg:px-24 xl:px-48 min-h-[calc(100vh-180px)]">
          <div className="mb-10 text-center">
            <h1 className="text-2x sm:text-5xl font-semibold max-w-[700px] mx-auto">
              {data.title}
            </h1>
            <Image
              src={data.authorImg}
              alt={data.author}
              width={120}
              height={120}
              className="mx-auto mt-6 border border-white rounded-full"
            />
            <p className="mt-1 pb-2 text-xl text-gray-500 font-semibold max-w-[740px] mx-auto ">
              {data.author}
            </p>
          </div>
          <div className="mx-5 max-w-[800px] md:mx-auto mb-10">
            <Image
              priority
              src={data.image}
              alt={data.title}
              width={1280}
              height={720}
              className="border-4 border-gray-500"
            />
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
            <div className="my-24">
              <p className="text-black font-semibold mb-4">
                Share this article on social media
              </p>
              <ul className="flex items-center gap-4 text-[30px]">
                <li>
                  <RiFacebookBoxFill />
                </li>
                <li>
                  <RiInstagramFill />
                </li>
                <li>
                  <RiLinkedinFill />
                </li>
                <li>
                  <RiTwitterXFill />
                </li>
              </ul>
            </div>
          </div>
        </article>
      ) : (
        <></>
      )}
    </section>
  );
};

export default BlogPage;
