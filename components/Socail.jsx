import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Link from "next/link";

export const Socail = () => {
  return (
    <ul className="flex items-center gap-2 text-3xl">
      <li>
        <Link href="https://www.instagram.com/" target="_blank">
          <RiInstagramLine className="hover:text-red-500 transition-colors ease-in duration-300" />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/" target="_blank">
          <RiFacebookFill className="hover:text-red-500 transition-colors ease-in duration-300" />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/" target="_blank">
          <RiLinkedinFill className="hover:text-red-500 transition-colors ease-in duration-300" />
        </Link>
      </li>
      <li>
        <Link href="https://x.com/" target="_blank">
          <RiTwitterXFill className="hover:text-red-500 transition-colors ease-in duration-300" />
        </Link>
      </li>
    </ul>
  );
};
