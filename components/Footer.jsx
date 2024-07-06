import {
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Link from "next/link";
import { GrBlog } from "react-icons/gr";

export const Footer = () => {
  return (
    <footer className="flex justify-around items-center flex-col gap-2 sm:flex-row sm:gap-0 py-5 bg-black">
      <Link
        href="/"
        className="flex items-center gap-2 text-4xl font-bold text-white/50 hover:text-white"
      >
        <GrBlog className="text-red-500" />
        blogger
      </Link>
      <p className="text-sm text-white/50">
        Copyright © 2024 blogger. All right reserved.
      </p>
      <ul className="flex items-center gap-8 text-[36px]">
        <li>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className="text-white/50 hover:text-white"
          >
            <RiFacebookBoxFill />
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/"
            target="_blank"
            className="text-white/50 hover:text-white"
          >
            <RiTwitterXFill />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="text-white/50 hover:text-white"
          >
            <RiInstagramFill />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            className="text-white/50 hover:text-white"
          >
            <RiYoutubeFill />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
