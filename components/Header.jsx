import Link from "next/link";
import { GrBlog } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";

export const Header = () => {
  return (
    <header className="p-5 md:px-12 lg:px-24 xl:px-48">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-4xl font-bold">
          <GrBlog className="text-red-500" />
          blogger
        </Link>
        <button
          type="button"
          className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_rgba(0,0,0,0.5)]"
        >
          Get started
          <IoMdArrowForward />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="capitalize text-3xl sm:text-5xl font-medium">
          Latest blogs
        </h1>
        <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
          distinctio ad architecto quam minima unde provident neque, quis ut. At
          velit exercitationem eligendi voluptatem consequuntur aperiam sunt,
          non consectetur!
        </p>
        <form
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_rgba(0,0,0,0.5)]"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 outline-none"
          />
          <button
            type="submit"
            className="border-1 border-black bg-black text-white p-4 sm:px-8 hover:bg-black/80 active:bg-black/80"
          >
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
};
