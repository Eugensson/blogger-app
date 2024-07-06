import Link from "next/link";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

export const BlogItem = ({ image, title, category, description }) => {
  return (
    <article className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_rgba(0,0,0,0.5)] cursor-pointer">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="border-b border-black"
        />
        <span className="absolute top-2 right-0 px-4 py-1  bg-white/70 text-red-500 font-semibold">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-700">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-500">
          {description}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 py-2 font-semibold text-center"
        >
          Read more
          <IoMdArrowForward />
        </Link>
      </div>
    </article>
  );
};
