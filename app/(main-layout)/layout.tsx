import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-1">
          {children}
        </div>
        <Footer/>
    </div>
  );
}
