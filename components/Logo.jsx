import Link from "next/link";
import { GrBlog } from "react-icons/gr";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-4xl text-zinc-500 font-bold"
    >
      <GrBlog className="text-red-500" />
      blogger
    </Link>
  );
};
