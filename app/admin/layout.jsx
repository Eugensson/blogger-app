import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <ScrollArea className="h-[83vh] w-full rounded-none border">
          {children}
        </ScrollArea>
      </div>
    </section>
  );
}
