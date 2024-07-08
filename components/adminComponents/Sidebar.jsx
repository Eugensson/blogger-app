import Link from "next/link";
import { TfiWrite } from "react-icons/tfi";
import { IoAddCircleOutline, IoMailOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-gray-200">
      <div className="relative py-32 w-28 sm:w-80 h-[calc(100vh-170px)] border-r border-black/20">
        <ul className="w-1/2 sm:w-4/5 absolute right-0">
          <li>
            <Link
              href="/admin/addBlog"
              className="mb-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_rgba(0,0,0,0.5)]"
            >
              <IoAddCircleOutline className="w-8 h-8" />
              <span>Add blog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/blogList"
              className="mb-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_rgba(0,0,0,0.5)]"
            >
              <TfiWrite className="w-8 h-8" />
              <span>Blog list</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/subscriptions"
              className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_rgba(0,0,0,0.5)]"
            >
              <IoMailOutline className="w-8 h-8" />
              <span>Subscriptions</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
