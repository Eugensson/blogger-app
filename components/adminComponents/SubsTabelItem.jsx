import { IoTrashBinSharp } from "react-icons/io5";

export const SubsTabelItem = ({ id, email, date, deleteEmail }) => {
  const blogDate = new Date(date);

  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{blogDate.toDateString()}</td>
      <td onClick={() => deleteEmail(id)} className="px-6 py-4 cursor-pointer">
        <IoTrashBinSharp className="w-6 h-6" />
      </td>
    </tr>
  );
};
