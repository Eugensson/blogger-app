import { Logo } from "@/components/Logo";
import { Socail } from "@/components/Socail";

export const Header = () => {
  return (
    <header className="p-2 md:px-12 lg:px-24 bg-zinc-100 text-zinc-700 border-b shadow-lg">
      <div className="flex justify-between items-center">
        <Socail />
        <Logo />
      </div>
    </header>
  );
};
