import Image from "next/image";
import { IoTrashBinSharp } from "react-icons/io5";

import { assets } from "@/assets/assets";

export const BlogTableItem = ({
  id,
  authorImg,
  title,
  author,
  date,
  deleteBlog,
}) => {
  const blogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="hidden sm:flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          alt="User profile avatar"
          width={40}
          height={40}
        />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No title"}</td>
      <td className="px-6 py-4">{blogDate.toDateString()}</td>
      <td className="px-6 py-4 cursor-pointer" onClick={() => deleteBlog(id)}>
        <IoTrashBinSharp className="w-6 h-6" />
      </td>
    </tr>
  );
};
