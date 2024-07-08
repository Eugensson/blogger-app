import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/Logo";
import { Socail } from "@/components/Socail";

export const Header = () => {
  return (
    <header className="p-2 md:px-12 lg:px-24 bg-zinc-100 text-zinc-700 border-b shadow-lg">
      <div className="flex justify-between items-center">
        <Socail />
        <Logo />
        <SignedOut>
          <SignInButton className="rounded-none border-4 text-lg px-8 py-2" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
