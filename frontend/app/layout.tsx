import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Free Room Locator",
  description: "Find available rooms in your building",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
