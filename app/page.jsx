import { BlogList } from "@/components/BlogList";
import { Subscribe } from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Subscribe />
      <BlogList />
    </div>
  );
}
