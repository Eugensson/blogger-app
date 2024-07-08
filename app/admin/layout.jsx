import Image from "next/image";
import { assets } from "@/assets/assets";
import { Sidebar } from "@/components/adminComponents/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full py-3 max-h-[60px] px-12 border-b border-black">
          <h3 className="capitalize font-semibold text-xl">Admin panel</h3>
          <Image src={assets.profile_icon} width={40} height={40} alt="" />
        </div>
        {children}
      </div>
    </section>
  );
}
