import type { Metadata } from "next";
import { Lato } from '@next/font/google';
import "./globals.scss";
import Header from "@/components/screens/Header/Header";
import HeaderBottom from "@/components/screens/HeaderBottom/HeaderBottom";
import LayoutClient from "@/components/layouts/LayoutClient";

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body>
        
        <Header />
        <LayoutClient>
          {children}
        </LayoutClient>
        <HeaderBottom />
      </body>
    </html>
  );
}
