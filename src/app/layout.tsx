import { type Metadata } from "next";
import { Inter } from "next/font/google";

import GlobalLayout from "@/layouts/global-layout/global-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Fernande Website",
  description: "An art e-commerce website powered by Jade Hernandez."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
