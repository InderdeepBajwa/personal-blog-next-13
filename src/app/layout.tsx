import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Navbar from "@blog/components/navigation/Navbar";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inderdeep Singh - Personal Blog",
  description:
    "A blog by Inderdeep Singh about software development and learnings for engineers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
