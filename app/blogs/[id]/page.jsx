"use client";

import {
  RiLinkedinFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Image from "next/image";
import { useEffect, useState } from "react";

import { blog_data } from "@/assets/assets";

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i += 1) {
      if (params.id === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data ? (
        <article className="p-6 md:px-12 lg:px-24 xl:px-48 min-h-[calc(100vh-180px)]">
          <div className="mb-10 text-center">
            <h1 className="text-2x sm:text-5xl font-semibold max-w-[700px] mx-auto">
              {data.title}
            </h1>
            <Image
              src={data.author_img}
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
            <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
            <p>{data.description}</p>
            <h3 className="my-5 text-[18px] font-semibold">
              Step 1: Self-Reflextion and Goal Settings
            </h3>
            <p className="my-3">
              To manage your lifestyle, you first need to have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals.
            </p>
            <p className="my-3">
              To manage your lifestyle, you first need to have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals.
            </p>
            <h3 className="my-5 text-[18px] font-semibold">
              Step 2: Self-Reflextion and Goal Settings
            </h3>
            <p className="my-3">
              To manage your lifestyle, you first need to have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals.
            </p>
            <p className="my-3">
              To manage your lifestyle, you first need to have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals.
            </p>
            <h3 className="my-5 text-[18px] font-semibold">
              Step 3: Self-Reflextion and Goal Settings
            </h3>
            <p className="my-3">
              To manage your lifestyle, you first need to have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals.
            </p>
            <p className="my-3">
              To manage your lifestyle, you first need to have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals.
            </p>
            <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
            <p className="my-3">
              Managing your lifestyle is a journey that requires commitment and
              self-awareness. By following this step-by-step guide, you can take
              control of your life and make meaningful changes that will lead to
              a more balanced and fulfilling life. Remember, it is perfectly
              normal to seek support and guidance from professionals or mentors
              along the way. Your well-being and happiness are worth the effort.
            </p>
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
    </>
  );
};

export default BlogPage;
