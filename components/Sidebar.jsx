import Link from "next/link";
import { TfiWrite } from "react-icons/tfi";
import { IoAddCircleOutline, IoMailOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <aside className="flex w-72 min-h-[calc(100vh-113px)] flex-col bg-zinc-800 text-white">
      <ul className="w-full py-20 flex flex-col gap-10">
        <li>
          <Link
            href="/admin/addBlog"
            className="flex items-center gap-5 px-1 py-3 hover:bg-white font-semibold hover:text-zinc-950 transition-colors ease-in duration-300"
          >
            <IoAddCircleOutline className="w-8 h-8" />
            <span>Add blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/blogList"
            className="flex items-center gap-5 px-1 py-3 hover:bg-white font-semibold hover:text-zinc-950 transition-colors ease-in duration-300"
          >
            <TfiWrite className="w-8 h-8" />
            <span>Blog list</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/subscriptions"
            className="flex items-center gap-5 px-1 py-3 hover:bg-white font-semibold hover:text-zinc-950 transition-colors ease-in duration-300"
          >
            <IoMailOutline className="w-8 h-8" />
            <span>Subscriptions</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
