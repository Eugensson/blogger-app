import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blog App",
  description: "Next blog app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <div className="flex flex-col justify-between h-screen">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
            <ToastContainer theme="dark" />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
