import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Andrés Yépez",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-blue-300 w-full h-[700px]">{children}</main>
      </body>
    </html>
  );
}
