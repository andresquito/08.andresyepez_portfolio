import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import SlideBar from "./components/SlideBar";

export const metadata: Metadata = {
  title: "Andrés Yépez",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SlideBar />
        <main className="w-full h-[700px]">{children}</main>
      </body>
    </html>
  );
}
