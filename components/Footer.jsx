import { Logo } from "@/components/Logo";
import { Socail } from "@/components/Socail";

export const Footer = () => {
  return (
    <footer className="flex justify-around items-center flex-col gap-2 sm:flex-row sm:gap-0 py-5 text-zinc-500  bg-zinc-950">
      <Logo />
      <span className="text-sm">
        Copyright © 2024 blogger. All right reserved.
      </span>
      <Socail />
    </footer>
  );
};
