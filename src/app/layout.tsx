import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import React, { Suspense } from "react";
import { unstable_noStore } from "next/cache";

const BlogPost = async () => {
  unstable_noStore();
  let res = await fetch("https://api.vercel.app/blog");
  const data = await res.json();

  return (
    <ul className="flex flex-col items-center justify-between p-24">
      {data.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<h2>"loading ..."</h2>}>
          {children}
          <BlogPost />
        </Suspense>
      </body>
    </html>
  );
}
