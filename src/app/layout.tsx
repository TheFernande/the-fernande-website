import { type Metadata } from "next";
import { Inter } from "next/font/google";

import GlobalLayout from "@/layouts/global-layout/global-layout";
import StyledComponentsRegistry from "@/lib/styled-components-registry";

import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  fallback: ["sans-serif"]
});

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
        <StyledComponentsRegistry>
          <GlobalLayout>{children}</GlobalLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
