import Link from "next/link";
import { GrBlog } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";

export const Header = () => {
  return (
    <header className="p-5 md:px-12 lg:px-24 border-b shadow-lg">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-4xl text-gray-600 font-bold"
        >
          <GrBlog className="text-red-500" />
          blogger
        </Link>
        <button
          type="button"
          className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_rgba(0,0,0,0.5)] hover:bg-black hover:text-white"
        >
          Get started
          <IoMdArrowForward />
        </button>
      </div>
    </header>
  );
};
