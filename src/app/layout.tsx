import type { Metadata } from "next";

import "./globals.scss";
import Header from "@/components/screens/Header/Header";



export const metadata: Metadata = {
  title: "movies",
  description: "watch only interesting movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
